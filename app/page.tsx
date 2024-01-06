"use client";

import { usePathname } from "next/navigation";
import styles from "./page.module.scss";
import Input from "@/stories/Input";
import Button from "@/stories/Button";
import Links from "../components/landing/Links";
import Link from "next/link";
import Logo from "../components/general/Logo";

export default function Home() {
	const pathname = usePathname();

	return (
		<main className={styles.main}>
			<Logo />
			<Links pathname={pathname} />
			<div className={styles.main_form_container}>
				<Input variant="email" label="Email" msg={false} />
				<Input variant="password" label="Password" msg={false} />
			</div>
			<div className={styles.main_btn}>
				<Button variant="primary" label="Sign in" />
			</div>
			<div className={styles.main_ps}>
				<div className={styles.text}>Don’t have an account?</div>
				<div className={styles.link}>
					<Link href={""}>Sign up</Link>
				</div>
			</div>
		</main>
	);
}
