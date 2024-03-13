import { sql } from "@vercel/postgres";

export async function markPillAsNotTaken(id: number) {
	try {
		await sql`UPDATE pills
        SET last_time_taken = null
        WHERE id = ${id}`;
	} catch (error) {
		console.error("Database error (pill not checked)", error);
		throw new Error("Failed to unmark the pill");
	}
}
