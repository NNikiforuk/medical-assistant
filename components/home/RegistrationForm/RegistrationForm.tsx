"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const router = useRouter();

	const handleRegistration = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				throw new Error("Network response was not ok");
			} else {
				router.push("/dashboard");
			}
		} catch (error: any) {
			console.error("Registration Failed:", error);
		}
	};

	return (
		<form className="home__form" onSubmit={handleRegistration}>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				label="Email"
				isError={false}
			/>

			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				label="Password"
				isError={false}
			/>

			<Button type="submit" variant="primary" label="Sign up" />
		</form>
	);
};

export default RegistrationForm;
