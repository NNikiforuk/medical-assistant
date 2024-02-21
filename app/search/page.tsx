"use client";

import Button from "@/components/common/Button/Button";
import styles from "./page.module.scss";
import { RxCross1 } from "react-icons/rx";
import Layout from "@/components/common/Layout/Layout";
import { getData } from "../lib/getData";
import { useEffect, useState } from "react";

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
	console.log(pills);

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
						<ul>
							{pills?.map((el: any, index: any) => {
								return (
									<li key={index}>
										<div>Name: {el.openfda.brand_name[0]}</div>
										<div>
											Dosage:
											{el.dosage_and_administration[0]}
										</div>
										<div>
											Usage:
											{el.indications_and_usage[0]}
										</div>
										<div>
											Purpose:
											{el.purpose[0]}
										</div>
									</li>
								);
							})}
						</ul>
					</section>
				</main>
			</Layout>
		</div>
	);
};

export default Search;
