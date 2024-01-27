"use client";

import { ChangeEvent, useEffect, useState } from "react";
import "./input.scss";

type InputProps = {
	type: "password" | "email";
	isError: boolean;
	label: string;
	msg: boolean;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
	type,
	isError = true,
	label,
	msg,
	value,
	onChange,
}: InputProps) => {
	const [mounted, setMounted] = useState(false);

	//Hydration error with lastPass
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div className="input__wrapper">
			<label htmlFor={label}>{label}</label>
			<input
				required
				name={label}
				value={value}
				onChange={onChange}
				className={`input__${type === "email" ? "email" : "password"}`}
				type={type === "email" ? "email" : "password"}
			/>

			{msg && isError && (
				<div className="input__error">
					{type === "email" ? "Niepoprawny mail" : "Niepoprawne hasło"}
				</div>
			)}
		</div>
	);
};

export default Input;
