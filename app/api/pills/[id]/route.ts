import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

//GET current pill by its id
export const GET = async (
	request: NextRequest,
	{ params }: { params: { id: number } }
) => {
	try {
		const id = params.id;
		const result =
			await sql`SELECT name, hour, dosage FROM pills WHERE id = ${id}`;
		const resultRows = result.rows[0];
		const name = resultRows.name;
		const hour = resultRows.hour;
		const dosage = resultRows.dosage;

		return new Response(
			JSON.stringify({hour, name, dosage})
		);
	} catch (error) {
		return new Response("Failed to fetch the pill", {
			status: 500,
		});
	}
};
