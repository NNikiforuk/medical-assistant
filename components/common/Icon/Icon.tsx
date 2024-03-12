import "./icon.scss";

type IconProps = {
	variant: "green" | "red" | "logout";
	label: React.ReactNode;
	onClick?: () => void;
};

const Icon = ({ variant, label, onClick }: IconProps) => {
	return (
		<form>
			<button
				onClick={onClick}
				className={`icon icon${
					variant === "green"
						? "--green"
						: variant === "red"
							? "--red"
							: "--logout"
				}`}
			>
				{label}
			</button>
		</form>
	);
};

export default Icon;
