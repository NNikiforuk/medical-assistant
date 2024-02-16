import { fetchUsers } from "@/database/fetch";
import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

//User authentication (login)
export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const users = await fetchUsers();
		const data = await request.json();
		const { email, password } = data;
		const user = users.find((user) => user.email === email);

		if (!user) {
			return Response.json("Invalid email");
		}

		const passwordExists = user.password === password;

		if (!passwordExists) {
			return Response.json("Invalid password");
		}
		const cookie = serialize("session", user.id);

		return Response.json("success", {
			headers: [["Set-Cookie", cookie]],
		});
	} catch (error) {
		console.error("Error in POST request:", error);
	}
}
