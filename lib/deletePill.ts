import { sql } from "@vercel/postgres";

export async function deletePill(id: number) {
	try {
		await sql`DELETE FROM pills WHERE id = ${id}`;
	} catch (error) {
		console.error("Database error (delete)", error);
		throw new Error("Failed to delete");
	}
}
