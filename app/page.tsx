import Link from "next/link";
import styles from "./page.module.scss";
import Input from "@/stories/Input";
import Button from "@/stories/Button";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.main_logo}>LOGO</div>
			<div className={styles.main_links}>
				<div className={styles.link}>
					<Link href={""}>SIGN IN</Link>
				</div>
				<div className={styles.link}>
					<Link href={""}>SIGN UP</Link>
				</div>
			</div>
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
