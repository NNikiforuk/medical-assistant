"use client";

import { ChangeEvent, useEffect, useState } from "react";
import "./input.scss";

type InputProps = {
	type: "password" | "email" | "search" | "time" | "text";
	isError: boolean;
	label: string;
	value: string;
	placeholder?: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
	type,
	isError,
	label,
	value,
	onChange,
	placeholder = "",
}: InputProps) => {
	const [mounted, setMounted] = useState(false);

	//Hydration error with lastPass
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<div className="input__wrapper">
			<label className="label" htmlFor={type}>
				{label}
			</label>
			<input
				id={type}
				required
				name={type}
				value={value}
				onChange={onChange}
				className={`input ${isError && "input--error"} ${
					placeholder && "input__placeholder"
				}`}
				type={type}
				placeholder={placeholder}
			/>

			{isError && (
				<div className="input__message">
					{type === "email" ? "Invalid e-mail" : "Invalid password"}
				</div>
			)}
		</div>
	);
};

export default Input;
