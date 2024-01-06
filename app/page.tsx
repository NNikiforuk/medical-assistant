"use client";

import { usePathname } from "next/navigation";
import styles from "./page.module.scss";
import Button from "@/stories/Button";
import Links from "../components/home/Links";
import Logo from "../components/general/Logo";
import Form from "@/components/home/Form";
import PS from "@/components/home/PS";

export default function Home() {
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
}
