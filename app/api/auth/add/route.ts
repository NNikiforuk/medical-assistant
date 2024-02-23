import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
	try {
		const { hour, name, dosage, email } = await request.json();

		await sql`ALTER TABLE users ADD hour VARCHAR(255), ADD name VARCHAR(255), ADD dosage VARCHAR(255)`;

		const response =
			await sql`UPDATE users SET hour=${hour}, name=${name}, dosage=${dosage} WHERE email=${email}`;
	} catch (e) {
		console.log({ e });
	}

	return NextResponse.json({ message: "success" });
}
