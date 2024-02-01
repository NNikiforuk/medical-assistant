import styles from "./page.module.scss";
import Layout from "@/components/dashboard/Layout";
import { cookies } from "next/headers";
import { fetchUserById } from "@/database/fetch";
import { IoMdAddCircle } from "react-icons/io";

const Dashboard = async () => {
	const cookieStore = cookies();
	const cookieSession = cookieStore.get("session");
	const user = await fetchUserById(cookieSession?.value ?? "");

	return (
		<div className={styles.dashboard}>
			<header className={styles.dashboard__header}>
				<div className={styles.dashboard__title}>
					<h1 className={styles.dashboard__header__title__h1}>
						Welcome {user.name}!
					</h1>
					<div className={styles.dashboard__header__title__date}>
						{new Date().toDateString()}
					</div>
				</div>
				<div className={styles.dashboard__header__add__medicine}>
					<div className={styles.dashboard__header__add__medicine__icon}>
						<IoMdAddCircle />
					</div>
					<div className={styles.dashboard__header__add__medicine__desc}>
						Add medicine
					</div>
				</div>
			</header>
			<Layout>main</Layout>
		</div>
	);
};

export default Dashboard;
