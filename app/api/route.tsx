import { fetchUsers } from "@/database/fetch";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
	try {
		const users = await fetchUsers();
		return Response.json(users);
	} catch (error) {
		console.error("Error in GET users request:", error);
	}
}

export async function POST(request: NextRequest, response: NextResponse) {
	try {
		const users = await fetchUsers();
		const data = await request.json();
		const { email, password } = data;
		const doesUserExists = users.find(
			(user) => user.email === email && user.password === password
		);
		const existingEmail = users.find((user) => user.email === email);
		const existingPassword = users.find((user) => user.password === password);

		if (existingEmail && existingPassword) {
			return Response.json("success");
		} else if (existingEmail && !existingPassword) {
			return Response.json("Invalid password");
		} else if (!existingEmail && existingPassword) {
			return Response.json("Invalid email");
		}
		return Response.json("Invalid email and password");
	} catch (error) {
		console.error("Error in POST request:", error);
	}
}
