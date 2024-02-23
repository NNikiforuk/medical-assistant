"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";
import { fetchRegistration } from "./fetchRegistration";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleRegistration = async (e: FormEvent) => {
		e.preventDefault();

		const isSuccess = await fetchRegistration({ email, password });

		if (isSuccess) {
			router.push("/dashboard");
		} else {
			console.error("Registration failed");
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
