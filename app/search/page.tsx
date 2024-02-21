"use client";

import Button from "@/components/common/Button/Button";
import styles from "./page.module.scss";
import { RxCross1 } from "react-icons/rx";
import Layout from "@/components/common/Layout/Layout";
import { getData } from "../lib/getData";
import { useEffect, useState } from "react";
import List from "../../components/search/List/List";

const Search = () => {
	const [pills, setPills] = useState<any>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getData();
				setPills(data.results);
			} catch (error) {
				console.error("Error");
			}
		};

		fetchData();
	}, []);

	return (
		<div className={styles.search}>
			<header className={styles.header}>
				<h1>Medicine finder</h1>
				<div className={styles.header__btn}>
					<Button type="button" variant="secondary" label={<RxCross1 />} />
				</div>
			</header>
			<Layout>
				<main className={styles.main}>
					<section className={styles.main__medicines}>
						<h2>All medicines</h2>

						{pills?.map((el: any) => {
							return (
								<List
									key={el.id}
									brandName={el.openfda.brand_name[0]}
									dosage={el.dosage_and_administration[0]}
									usage={el.indications_and_usage[0]}
									purpose={el.purpose[0]}
								/>
							);
						})}
					</section>
				</main>
			</Layout>
		</div>
	);
};

export default Search;
