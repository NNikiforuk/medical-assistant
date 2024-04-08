import { ButtonProps } from "@/data/types";
import "./button.scss";

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
