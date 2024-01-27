import { sql } from "@vercel/postgres";
import { usersTypes } from "@/data/types";

export async function fetchUsers() {
	try {
		console.log("Fetching users...");

		const data = await sql<usersTypes>`SELECT * FROM users`;

		console.log("Data fetch completed");

		return data.rows;
	} catch (error) {
		console.error("database error:", error);
		throw new Error("Failed to fetch data regarding users");
	}
}