import "./button.scss";

type ButtonProps = {
	variant: "primary" | "secondary";
	label: string;
	isDisabled?: boolean;
	type: "button" | "submit";
};

const Button = ({ variant, label, isDisabled = false, type }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`button button${
				variant === "primary" ? "--primary" : "--secondary"
			} ${isDisabled && "button--disabled"}`}
		>
			{label}
		</button>
	);
};

export default Button;


