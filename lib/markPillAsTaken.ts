import { sql } from "@vercel/postgres";

export async function markPillAsTaken(
	id: number,
) {
	try {
		await sql`UPDATE pills
        SET last_time_taken = CURRENT_DATE
        WHERE id = ${id}`;
	} catch (error) {
		console.error("Database error (pill checked)", error);
		throw new Error("Failed to mark the pill");
	}
}
