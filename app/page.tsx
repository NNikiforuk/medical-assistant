"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
	const [mounted, setMounted] = useState(false);

	//Hydration error with LastPass
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;

	return (
		<main className={styles.main}>
			<div className={styles.main_logo}>LOGO</div>
			<div className={styles.main_links}>
				<div className={styles.link}>SING IN</div>
				<div className={styles.link}>SIGN UP</div>
			</div>
			<form className={styles.main_form}>
				<div className={styles.main_form_item}>
					<label>Email</label>
					<input type="text" name="username" required />
				</div>
				<div className={styles.main_form_item}>
					<label>Password</label>
					<input type="password" name="password" required />
				</div>
			</form>
		</main>
	);
}
