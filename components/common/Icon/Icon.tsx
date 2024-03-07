import "./icon.scss";

type IconProps = {
	variant: "green" | "red" | "gray";
	label: React.ReactNode;
	onClick?: () => void;
};

const Icon = ({ variant, label, onClick }: IconProps) => {
	return (
		<button
			onClick={onClick}
			className={`icon icon${variant === "green" ? "--green" : variant === "red" ? "--red" : "--gray"}`}
		>
			{label}
		</button>
	);
};

export default Icon;
