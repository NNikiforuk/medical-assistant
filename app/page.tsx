"use client";

import styles from "./page.module.scss";
import Logo from "@/components/common/Logo/Logo";
import Header from "@/components/header/Header";
import LoginForm from "@/components/forms/LoginForm/LoginForm";
import RegistrationForm from "@/components/forms/RegistrationForm/RegistrationForm";
import Link from "next/link";

export default function Home({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] | undefined };
}) {
	// const searchParams = useSearchParams();
	const isRegistrationPage = searchParams["signup"] !== null;

	return (
		<main className={styles.home}>
			<Logo />
			<Header isRegistrationPage={isRegistrationPage} />
			{isRegistrationPage ? <RegistrationForm /> : <LoginForm />}
			<div className={styles.home__additional__info}>
				<div className={styles.additional__info__text}>
					{isRegistrationPage
						? "I already have an account"
						: "You don't have an account?"}
				</div>
				<div className={styles.additional__info__link}>
					<Link href={isRegistrationPage ? "/" : "/?signup"}>
						{isRegistrationPage ? "Sign in" : "Sign up"}
					</Link>
				</div>
			</div>
		</main>
	);
}
