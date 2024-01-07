import { sql } from "@vercel/postgres";

let initialized = false;

const initializedDatabase = async () => {
	if (initialized) return;

	await sql`CREATE TABLE users (email varchar(255), password varchar(255))`;

	initialized = true;
};

export const validateUser = async (email: string, password: string) => {
	await initializedDatabase();

	const { rows } =
		await sql`SELECT email, password FROM users WHERE email = ${email}`;

	if (rows.length !== 1) throw new Error("Too many or not enough results");

	if (rows[0].password !== password) throw new Error("Wrong password");
};
