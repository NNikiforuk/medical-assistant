import { db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const client = await db.connect();

	try {
		const { hour, name, dosage, email } = await request.json();

		await client.sql`BEGIN`;
		await client.sql`
			INSERT INTO pills (name, hour, dosage)
			VALUES (${name}, ${hour}, ${dosage})
		`;
		await client.sql`
			INSERT INTO owners (owner_email, pill_name)
			VALUES (${email}, ${name})
		`;
		await client.sql`COMMIT`;
	} catch (e) {
		console.log({ e });
		await client.sql`ROLLBACK`;
	}

	return NextResponse.json({ message: "success" });
}
