"use client";

import { useEffect, useState } from "react";
import "../styles/general/input.scss";

type Props = {
	variant: string;
	label: string;
	msg: boolean;
};

const Input = ({ variant, label, msg }: Props) => {
	const [inputValue, setInputValue] = useState("");
	const [mounted, setMounted] = useState(false);

	//Hydration error with lastPass
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	const mode =
		variant === "email"
			? "email"
			: variant === "errorEmail"
			? "error"
			: variant === "errorPassword"
			? "error"
			: "password";

	return (
		<div className="form_input">
			<label htmlFor={label}>{label}</label>
			<input
				required
				name={label}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				className={`input ${mode}`}
				type={
					variant === "password" || variant === "errorPassword"
						? "password"
						: "email"
				}
			/>

			{msg && (
				<div className="form_input_errorMsg">
					{variant === "errorEmail" ? "Niepoprawny mail" : "Niepoprawne hasło"}
				</div>
			)}
		</div>
	);
};

export default Input;
