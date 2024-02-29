import { db, sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const client = await db.connect();

	try {
		const { hour, name, dosage, email } = await request.json();

		await client.sql`BEGIN`;
		await client.sql`
			INSERT INTO pills (name, hour, dosage, owner_email)
			VALUES (${name}, ${hour}, ${dosage}, ${email})
		`;
		await client.sql`
			INSERT INTO owners (owner_email, pill_name)
			VALUES (${email}, ${name})
		`;
		await client.sql`COMMIT`;

		return NextResponse.json({ message: "success" });
	} catch (e) {
		await client.sql`ROLLBACK`;
		return new NextResponse(
			JSON.stringify({ error: "Failed to add medicine" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	} finally {
		client.release();
	}
}
