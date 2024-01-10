"use client";

import Button from "@/components/common/Button/Button"
import Input from "@/components/common/Input/Input"
import { useState } from "react";
import "./registerForm.scss";



const RegistrationForm = () => {
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

const handleRegistration = () => {
	//
};



return (
	<form className="home__login__form">
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

		<Button type="submit" variant="primary" label="Sign up" />
	</form>
);
}

export default RegistrationForm
