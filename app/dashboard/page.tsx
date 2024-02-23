import styles from "./page.module.scss";
import Layout from "@/components/dashboard/Layout";
import Button from "@/components/common/Button/Button";
import Card from "@/components/dashboard/Card/Card";
import CarouselWrapper from "@/components/dashboard/Carousel/CarouselWrapper";
import Link from "next/link";

const Dashboard = async () => {

	return (
		<div className={styles.dashboard}>
			<header className={styles.header}>
				<div className={styles.header__title}>
					{/* <h1>Welcome {user.name}!</h1> */}
					<h1>Welcome!</h1>
					<div className={styles.header__date}>{new Date().toDateString()}</div>
				</div>
				<div className={styles.header__btn}>
					<Link href="/dashboard/add">
						<Button
							type="button"
							variant="secondary"
							label="Add medicine"
						></Button>
					</Link>
				</div>
			</header>
			<Layout>
				<main className={styles.main}>
					<h2>Your medicines</h2>
					<CarouselWrapper>
						<Card hour="08:00" name="Ketonal" dosage="120mg" />
						<Card hour="10:00" name="Apap" dosage="30mg" />
						<Card hour="12:00" name="Antibiotic" dosage="5mg" />
						<Card hour="16:00" name="Paracetamol" dosage="120mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
						<Card hour="22:00" name="Ibuprom" dosage="3mg" />
					</CarouselWrapper>
				</main>
			</Layout>
		</div>
	);
};

export default Dashboard;
