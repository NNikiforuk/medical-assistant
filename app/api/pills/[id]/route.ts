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
			await sql`SELECT name, time_of_day, dosage FROM pills WHERE id = ${id}`;

			console.log("result", result)
		const resultRows = result.rows[0];
		console.log("resultrows0", resultRows[0])
		const name = resultRows.name;
		const hour = resultRows.time_of_day;
		const dosage = resultRows.dosage;

		console.log("name, hour, dosage", name, hour, dosage)

		return new Response(JSON.stringify({ hour, name, dosage }));
	} catch (error) {
		return new Response("Failed to fetch the pill", {
			status: 500,
		});
	}
};
