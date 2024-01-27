const { db } = require("@vercel/postgres");
const { users } = require("../data/placeholders");

//Creating database, table and seeding it with placeholder data
async function seedDatabase(client) {
	try {
		await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

		const createTable = await client.sql`CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
        `;

		console.log(`Created "users" table`);

		const insertedUsers = await Promise.all(
			users.map(async (user) => {
				return client.sql`
                    INSERT INTO users (id, email, password) VALUES (${user.id}, ${user.email}, ${user.password})
                    ON CONFLICT (id) DO NOTHING;
                    `;
			})
		);

		console.log(`Seeded ${insertedUsers.length} users`);

		return {
			createTable,
			users: insertedUsers,
		};
	} catch (error) {
		console.error("Error seeding users:", error);
		throw error;
	}
}

async function main() {
	const client = await db.connect();
	await seedDatabase(client);
}

main().catch((error) => {
	console.error(
		"An error occurred while attempting to seed the database",
		error
	);
});
