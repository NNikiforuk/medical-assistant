"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ButtonProps = {
	variant: string;
	label: string | ReactNode;
	type: "submit" | "reset" | "button" | undefined;
};

const ButtonLogout = ({ variant, label, type }: ButtonProps) => {
	const router = useRouter();

	const handleLogout = async () => {
		await signOut({ redirect: false, callbackUrl: "/" });
		router.push("/");
	};

	return (
		<button
			onClick={handleLogout}
			type={type}
			className={`button button--${variant}`}
		>
			{label}
		</button>
	);
};

export default ButtonLogout;
