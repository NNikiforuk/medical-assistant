import styles from "./page.module.scss";
import Layout from "@/components/dashboard/Layout";
import { cookies } from "next/headers";
import { fetchUserById } from "@/database/fetch";
import Button from "@/components/common/Button/Button";

const Dashboard = async () => {
	const cookieStore = cookies();
	const cookieSession = cookieStore.get("session");
	const user = await fetchUserById(cookieSession?.value ?? "");

	return (
		<div className={styles.dashboard}>
			<header className={styles.header}>
				<div className={styles.header__title}>
					<h1>Welcome {user.name}!</h1>
					<div className={styles.header__date}>
						{new Date().toDateString()}
					</div>
				</div>
				<div className={styles.header__btn}>
					<Button type="button" variant="secondary" label="Add medicine" />
				</div>
			</header>
			<Layout>main</Layout>
		</div>
	);
};

export default Dashboard;
