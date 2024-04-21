import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@vercel/postgres";

export async function POST(request: Request, response: Response) {
	const client = await db.connect();

	try {
		const { email, password } = await request.json();

		const userAlreadyRegistered =
			await client.sql`SELECT * FROM users WHERE email = ${email}`;

		if (userAlreadyRegistered.rowCount > 0) {
			return NextResponse.json(
				{ error: "User already exists" },
				{ status: 500 }
			);
		} else {
			const hashedPassword = await hash(password, 10);
			await client.sql`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`;
		}
	} catch (e) {
		console.log({ e });
	}

	return NextResponse.json({ message: "success" });
}
