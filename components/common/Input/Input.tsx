"use client";

import { ChangeEvent, useEffect, useState } from "react";
import "./input.scss";

type InputProps = {
	type: "password" | "email";
	isError: boolean;
	label: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, isError, label, value, onChange }: InputProps) => {
	const [mounted, setMounted] = useState(false);

	//Hydration error with lastPass
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;


	// <button type="{type}" classname="{`button" button${="" variant="==" "primary"="" ?="" "--primary"="" :="" "--secondary"="" }="" ${isdisabled="" &&="" "button--disabled"}`}="">
	// 		{label}
	// 	</button>

	return (
		<div className="input__wrapper">
			<label htmlFor={type}>{label}</label>
			<input
				id={type}
				required
				name={type}
				value={value}
				onChange={onChange}
				className={`input__${type === "email" ? "email" : "password"} ${isError && "input__error"}`}
				type={type}
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
