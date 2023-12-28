import "../styles/button.scss";

type Props = {
	variant: string;
	label: string;
};

const Button = ({ variant, label }: Props) => {
	const mode =
		variant === "primary"
			? "button--primary"
			: variant === "secondary"
			? "button--secondary"
			: "button--disabled";

	return (
		<button type="button" className={`button ${mode}`}>
			{label}
		</button>
	);
};

export default Button;
