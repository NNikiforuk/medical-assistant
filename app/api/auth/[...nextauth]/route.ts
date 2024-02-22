import { sql } from "@vercel/postgres";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const handler = NextAuth({
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/",
	},
	providers: [
		CredentialsProvider({
			credentials: {
				email: {},
				password: {},
			},
			async authorize(credentials) {
				const response =
					await sql`SELECT * FROM users WHERE email=${credentials?.email}`;
				const user = response.rows[0];

				if (!user) {
					throw new Error("No user found with the email");
				}

				const passwordCorrect = await compare(
					credentials?.password || "",
					user.password
				);

				if (passwordCorrect) {
					return {
						id: user.id,
						email: user.email,
					};
				}
				return null;
			},
		}),
	],
});

export { handler as GET, handler as POST };
