import styles from "./page.module.scss";
import Layout from "@/components/common/Layout/Layout";
import Button from "@/components/common/Button/Button";
import Card from "@/components/dashboard/Card/Card";
import CarouselWrapper from "@/components/dashboard/Carousel/CarouselWrapper";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import { GiExitDoor } from "react-icons/gi";
import ButtonLogout from "@/components/common/Button/ButtonLogout";

const Dashboard = async () => {
	const session = await getServerSession();
	const pills = await sql`SELECT name, hour, dosage, id, CASE WHEN last_time_taken IS NULL THEN FALSE WHEN last_time_taken = CURRENT_DATE THEN TRUE ELSE FALSE END AS is_taken
	FROM pills
	WHERE owner_email = ${session?.user?.email}
	ORDER BY CASE
    WHEN hour = 'morning' THEN 1
    WHEN hour = 'dinner' THEN 2
    WHEN hour = 'night' THEN 3
    ELSE 4
	END;`;

	return (
		<div className={styles.dashboard}>
			<header className={styles.header}>
				<div className={styles.header__title}>
					<h1>Welcome!</h1>
					<div className={styles.header__date}>{new Date().toDateString()}</div>
				</div>
				<div className={styles.header__btns}>
					<Link href="/dashboard/add">
						<Button
							type="button"
							variant="primary"
							label="Add medicine"
						></Button>
					</Link>
					<Link href="/search">
						<Button
							type="button"
							variant="primary"
							label="Search pills"
						></Button>
					</Link>
					<ButtonLogout
						type="button"
						variant="grayicon"
						label={<GiExitDoor />}
					/>
				</div>
			</header>
			<Layout>
				<main className={styles.main}>
					<h2 className={styles.main__header}>Your medicines</h2>
					{/* Mobile */}
					<CarouselWrapper>
						{pills.rows.map((pill) => {
							return (
								<Card
									isTaken={pill.is_taken}
									key={pill.id}
									name={pill.name}
									hour={pill.hour}
									dosage={pill.dosage}
									id={pill.id}
								/>
							);
						})}
					</CarouselWrapper>
					{/* From 768px */}
					<section className={styles.pillsList}>
						{pills.rows.map((pill) => {
							return (
								<Card
									isTaken={pill.is_taken}
									key={pill.id}
									name={pill.name}
									hour={pill.hour}
									dosage={pill.dosage}
									id={pill.id}
								/>
							);
						})}
					</section>
				</main>
			</Layout>
		</div>
	);
};

export default Dashboard;
