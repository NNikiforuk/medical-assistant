"use client";

import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { FormEvent, useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";
import { fetchRegistration } from "../../../lib/fetchRegistration";
import { useRouter } from "next/navigation";
import { handleEnter } from "@/lib/handleEnter";

const RegistrationForm = () => {
	const [email, setEmail] = useState("");
	const [emailAlert, setEmailAlert] = useState("");
	const [password, setPassword] = useState("");
	const [passwordAlert, setPasswordAlert] = useState("");
	const router = useRouter();

	function validateEmail(email: string) {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return regex.test(email);
	}

	function validatePassword(password: string) {
		const regex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

		return regex.test(password);
	}

	const performRegistration = async () => {
		const isEmailValidated = validateEmail(email);
		const isPasswordValidated = validatePassword(password);

		if (!isEmailValidated) {
			setEmailAlert("Invalid email");
		}

		if (!isPasswordValidated) {
			setPasswordAlert(
				"Use: 1 lowercase letter, 1 uppercase letter, 1 digit, 1 special character and min. 8 characters in total"
			);
		}

		if (isEmailValidated && isPasswordValidated) {
			const isSuccess = await fetchRegistration({ email, password });

			if (isSuccess) {
				router.push("/dashboard");
			} else {
				console.error("Registration failed");
			}
		}
	};

	const handleRegistration = async (e: FormEvent) => {
		e.preventDefault();
		await performRegistration();
	};

	return (
		<form className="home__form" onSubmit={handleRegistration}>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				label="Email"
				isError={emailAlert}
				placeholder=""
				onKeyDown={(e) => handleEnter(e, performRegistration)}
			/>

			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				label="Password"
				isError={passwordAlert}
				placeholder=""
				onKeyDown={(e) => handleEnter(e, performRegistration)}
			/>

			<Button type="submit" variant="primary" label="Sign up" />
		</form>
	);
};

export default RegistrationForm;
