import { sql } from "@vercel/postgres";

export async function editPill(
	id: number,
	hour: string,
	name: string,
	dosage: string
) {
	try {
		console.log("Aktualizacja danych w bazie", { id, hour, name, dosage });

		await sql`UPDATE pills
        SET time_of_day = ${hour}, dosage = ${dosage},
        name = ${name}
        WHERE id = ${id}`;

		console.log("Dane zaktualizowane");

	} catch (error) {
		console.error("Database error (edit)", error);
		throw new Error("Failed to edit");
	}
}
