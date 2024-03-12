export type UserType = {
	id: string;
	email: string;
	password: string;
	name: string;
	surname: string;
};

export type CardProps = {
	hour: string;
	name: string;
	dosage: string;
	id: number
};

export type ButtonProps = {
	variant: "primary" | "secondary" | "gray" | "grayicon";
	label: string | React.ReactNode;
	isDisabled?: boolean;
	type: "button" | "submit";
	onClick?: () => void;
};