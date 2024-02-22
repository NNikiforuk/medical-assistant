"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState(false);
	const [password, setPassword] = useState("");
	const [invalidPassword, setInvalidPassword] = useState(false);

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		const data = {
			email: email,
			password: password,
		};

		const response = await fetch("/api", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const responseData = await response.json();

		if (responseData === "success") {
			setInvalidEmail(false);
			setInvalidPassword(false);
			router.push("/dashboard")
		} else if (responseData === "Invalid password") {
			setInvalidPassword(true);
		} else if (responseData === "Invalid email") {
			setInvalidEmail(true);
		} else {
			setInvalidEmail(true);
			setInvalidPassword(true);
		}
	};

	return (
		<form className="home__form" onSubmit={handleLogin}>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				label="Email"
				isError={invalidEmail ? true : false}
			/>
			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				label="Password"
				isError={invalidPassword ? true : false}
			/>

			<Button type="submit" variant="primary" label="Sign in" />
		</form>
	);
};

export default LoginForm;
