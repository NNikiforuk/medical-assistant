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
	handleEdit: () => void;
};
