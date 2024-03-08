import "./button.scss";

type ButtonProps = {
	variant: "primary" | "secondary" | "gray";
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
			className={`button button--${variant}`}
		>
			{label}
		</button>
	);
};

export default Button;
