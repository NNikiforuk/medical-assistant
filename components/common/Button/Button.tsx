import "./button.scss";

type ButtonProps = {
	variant: "primary" | "secondary";
	label: string;
	isDisabled?: boolean;
	type: "button" | "submit";
};

const Button = ({ variant, label, isDisabled = false, type }: ButtonProps) => {
	const mode =
		variant === "primary"
			? "button--primary"
			: "button--secondary"

	return (
		<button type={type} className={`button ${mode} ${isDisabled && "button--disabled"}`}>
			{label}
		</button>
	);
};

export default Button;


