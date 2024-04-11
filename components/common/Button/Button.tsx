import "./button.scss";

export type ButtonProps = {
	variant: "primary" | "exit" | "noBackground" | "alert" | "success";
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
