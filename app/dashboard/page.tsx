import styles from "./page.module.scss";
import Layout from "@/components/dashboard/Layout";
import { cookies } from "next/headers";
import { fetchUserById } from "@/database/fetch";

const Dashboard = async () => {
	const cookieStore = cookies();
	const cookieSession = cookieStore.get("session");
	const user = await fetchUserById(cookieSession?.value ?? "");

	return (
		<div className={styles.dashboard}>
			<header className={styles.dashboard__header}>
				<h1 className={styles.dashboard__header__title}>Welcome {user.name}!</h1>
				<div className={styles.dashboard__header__date}>
					{new Date().toDateString()}
				</div>
			</header>
			<Layout>main</Layout>
		</div>
	);
};

export default Dashboard;
