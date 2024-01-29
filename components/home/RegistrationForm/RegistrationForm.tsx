"use client";

import Button from "@/components/common/Button/Button"
import Input from "@/components/common/Input/Input"
import { useState } from "react";
import "../LoginRegistrationForm/loginRegistrationForm.scss";

const RegistrationForm = () => {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

const handleRegistration = () => {
	//
};



return (
	<form className="home__form">
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
}

export default RegistrationForm
