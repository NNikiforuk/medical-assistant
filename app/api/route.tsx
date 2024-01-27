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

		if (doesUserExists) {
			return Response.json("Login succesful");
		} else {
		}
		return Response.json("Invalid credentials");
	} catch (error) {
		console.error("Error in POST request:", error);
	}
}
