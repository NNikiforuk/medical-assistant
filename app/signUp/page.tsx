"use client";

import { usePathname } from "next/navigation";
import Logo from "@/components/general/Logo";
import Links from "@/components/home/Links";
import Button from "@/stories/Button";
import styles from "./page.module.scss";
import Form from "@/components/home/Form";
import PS from "@/components/home/PS";

const SignUp = () => {
	const pathname = usePathname();

	return (
		<main className={styles.main}>
			<Logo />
			<Links pathname={pathname} />
			<Form />
			<div className={styles.main_btn}>
				<Button variant="primary" label="Sign in" />
			</div>
			<PS />
		</main>
	);
};

export default SignUp;
