"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../Login&RegistrationForm/login&registrationForm.scss";

const LoginForm = () => {
	const [email, setEmail] = useState<string>("");
	const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
	const [password, setPassword] = useState<string>("");
	const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

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
			//rerouting
			console.log("success");
			setInvalidEmail(false);
			setInvalidPassword(false);
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
