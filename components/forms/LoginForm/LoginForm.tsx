"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { handleEnter } from "@/lib/handleEnter";

const LoginForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [invalidEmail, setInvalidEmail] = useState("");
	const [password, setPassword] = useState("");
	const [invalidPassword, setInvalidPassword] = useState("");

	const performLogin = async () => {
		const result = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (result?.error) {
			setInvalidEmail("Invalid email");
			setInvalidPassword("Invalid password");
		} else {
			router.push("/dashboard");
		}
	};

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();
		await performLogin();
	};

	return (
		<form className="home__form" onSubmit={handleLogin}>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				label="Email"
				isError={invalidEmail}
				onKeyDown={(e) => handleEnter(e, performLogin)}
			/>
			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				label="Password"
				isError={invalidPassword}
				onKeyDown={(e) => handleEnter(e, performLogin)}
			/>

			<Button type="submit" variant="primary" label="Sign in" />
		</form>
	);
};

export default LoginForm;
