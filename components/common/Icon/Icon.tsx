import "./icon.scss";

type IconProps = {
	variant: "green" | "red";
	label: React.ReactNode;
	onClick?: () => void;
};

const Icon = ({ variant, label, onClick }: IconProps) => {
	return (
		<button
			onClick={onClick}
			className={`icon icon${variant === "green" ? "--green" : "--red"}`}
		>
			{label}
		</button>
	);
};

export default Icon;
