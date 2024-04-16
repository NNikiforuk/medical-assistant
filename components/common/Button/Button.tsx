import "./button.scss";

export type ButtonProps = {
	variant: "primary" | "exit" | "noBackground" | "alert" | "success";
	label: string | React.ReactNode;
	type: "button" | "submit";
	onClick?: () => void;
};

const Button = ({
	variant,
	label,
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
