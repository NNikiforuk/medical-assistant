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
	isTaken: boolean
};

export type ButtonProps = {
	variant:
		| "primary"
		| "exit"
		| "noBackground"
		| "alert"
		| "success";
	label: string | React.ReactNode;
	isDisabled?: boolean;
	type: "button" | "submit";
	onClick?: () => void;
};