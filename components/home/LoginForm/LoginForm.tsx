"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState<string>("");
	const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
	const [password, setPassword] = useState<string>("");
	const [invalidPassword, setInvalidPassword] = useState<boolean>(false);

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		const result = await signIn("credentials", {
			redirect: false,
			email,
			password,
		});

		if (result?.error) {
			console.log(result.error);
			setInvalidEmail(true);
			setInvalidPassword(true);
		} else {
			router.push("/dashboard");
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
