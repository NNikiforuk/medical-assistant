import { sql } from "@vercel/postgres";

export async function editPill(
	id: number,
	hour: string,
	name: string,
	dosage: string
) {
	try {
		await sql`UPDATE pills
        SET time_of_day = ${hour}, dosage = ${dosage},
        name = ${name}
        WHERE id = ${id}`;
	} catch (error) {
		console.error("Database error (delete)", error);
		throw new Error("Failed to delete");
	}
}
