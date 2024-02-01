import { sql } from "@vercel/postgres";
import { UserType } from "@/data/types";

export async function fetchUsers() {
	try {
		console.log("Fetching users...");

		const data = await sql<UserType>`SELECT * FROM users`;

		console.log("Data fetch completed");

		return data.rows;
	} catch (error) {
		console.error("database error:", error);
		throw new Error("Failed to fetch data regarding users");
	}
}

export async function fetchUserById(id: string) {
	try {
		const data =
			await sql<UserType>`SELECT * FROM USERS WHERE id::text = ${id}`;

		return data.rows[0];
	} catch (error) {
		console.error("fetching user error:", error);
		throw new Error("Failed to fetch user by id");
	}
}
