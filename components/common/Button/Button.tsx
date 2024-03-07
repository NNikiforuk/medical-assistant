import "./button.scss";

type ButtonProps = {
	variant: "primary" | "secondary";
	label: string | React.ReactNode;
	isDisabled?: boolean;
	type: "button" | "submit";
	onClick?: () => void;
};

const Button = ({
	variant,
	label,
	isDisabled = false,
	type,
	onClick,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			type={type}
			className={`button ${
				variant === "primary" ? "button--primary" : "button--secondary"
			} ${isDisabled && "button--disabled"}`}
		>
			{label}
		</button>
	);
};

export default Button;
