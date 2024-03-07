import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	const client = await db.connect();

	try {
		const email = request.headers.get("email");

		if (!email) {
			return new NextResponse(JSON.stringify({ error: "Email is required" }), {
				status: 400,
				headers: { "Content-Type": "application/json" },
			});
		}

		const result = await client.query(
			"SELECT * FROM pills WHERE owner_email = $1",
			[email]
		);
		return new NextResponse(JSON.stringify(result.rows), {
			status: 200,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
		console.log({ error });
		return new Response(
			JSON.stringify({ error: "Failed to retrieve medicines" }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	} finally {
		client.release();
	}
}
