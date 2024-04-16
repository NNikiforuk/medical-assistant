import styles from "./page.module.scss";
import Layout from "@/components/common/Layout/Layout";
import Card from "@/components/dashboard/Card/Card";
import CarouselWrapper from "@/components/dashboard/Carousel/CarouselWrapper";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";
import Navbar from "@/components/common/Navbar/Navbar";

const Dashboard = async () => {
	const session = await getServerSession();
	const pills =
		await sql`SELECT name, time_of_day, dosage, id, CASE WHEN last_time_taken IS NULL THEN FALSE WHEN last_time_taken = CURRENT_DATE THEN TRUE ELSE FALSE END AS is_taken
	FROM pills
	WHERE owner_email = ${session?.user?.email}
	ORDER BY CASE
    WHEN time_of_day = 'morning' THEN 1
    WHEN time_of_day = 'dinner' THEN 2
    WHEN time_of_day = 'night' THEN 3
    ELSE 4
	END;`;

	return (
		<div className={styles.dashboard}>
			<Navbar />
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
									hour={pill.time_of_day}
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
									hour={pill.time_of_day}
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
