import { useState } from "react";
import "../styles/input.scss";

type Props = {
	variant: string;
	label: string;
	msg: boolean;
};

const Input = ({ variant, label, msg }: Props) => {
	const [inputValue, setInputValue] = useState("");

	const mode =
		variant === "email"
			? "email"
			: variant === "errorEmail"
			? "error"
			: variant === "errorPassword"
			? "error"
			: "password";

	return (
		<form className="form_input">
			<label>
				{label}
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className={`input ${mode}`}
				/>
			</label>
			{msg && (
				<div className="form_input_errorMsg">
					{variant === "errorEmail" ? "Niepoprawny mail" : "Niepoprawne hasło"}
				</div>
			)}
		</form>
	);
};

export default Input;
