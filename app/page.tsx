"use client";

import { usePathname } from "next/navigation";
import styles from "./page.module.scss";
import Upper from "@/components/home/Upper";
import Shape from "@/components/home/Shape";

export default function Home() {
	const pathname = usePathname();

	return (
		<main className={styles.main}>
			<Upper pathname={pathname} />
			<Shape signin={true} />
		</main>
	);
}
