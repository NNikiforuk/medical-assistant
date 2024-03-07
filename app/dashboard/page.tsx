import styles from "./page.module.scss";
import Layout from "@/components/common/Layout/Layout";
import Button from "@/components/common/Button/Button";
import Card from "@/components/dashboard/Card/Card";
import CarouselWrapper from "@/components/dashboard/Carousel/CarouselWrapper";
import Link from "next/link";
import { sql } from "@vercel/postgres";
import { getServerSession } from "next-auth";

const Dashboard = async () => {
	const session = await getServerSession();
	const pills =
		await sql`SELECT name, hour, dosage, id FROM pills WHERE owner_email = ${session?.user?.email}`;

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
				</div>
			</header>
			<Layout>
				<main className={styles.main}>
					<h2>Your medicines</h2>
					<CarouselWrapper>
						{pills.rows.map((pill) => {
							return (
								<Card
									key={pill.id}
									name={pill.name}
									hour={pill.hour}
									dosage={pill.dosage}
								/>
							);
						})}
					</CarouselWrapper>
				</main>
			</Layout>
		</div>
	);
};

export default Dashboard;
