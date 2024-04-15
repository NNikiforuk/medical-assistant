"use client";

import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import "./input.scss";

type InputProps = {
	type: "password" | "email" | "search" | "time" | "text";
	isError?: string;
	label: string;
	value: string;
	placeholder?: string;
	onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	pattern?: string;
	maxLength?: number;
};

const Input = ({
	type,
	isError,
	label,
	value,
	onChange,
	placeholder = "",
	onKeyDown,
	pattern,
	maxLength
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
				onKeyDown={onKeyDown}
				pattern={pattern}
				maxLength={maxLength}
			/>

			{isError && <div className="input__message">{isError}</div>}
		</div>
	);
};

export default Input;
