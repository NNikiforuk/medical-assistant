"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useState } from "react";
import "../Login&RegistrationForm/login&registrationForm.scss";

const LoginForm = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleLogin = () => {
	//
	}


	return (
		<form className="home__form" onSubmit={handleLogin}>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				label="Email"
				msg={false}
				isError={false}
			/>
			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				label="Password"
				msg={false}
				isError={false}
			/>

			<Button type="submit" variant="primary" label="Sign in" />
		</form>
	);
};

export default LoginForm;
