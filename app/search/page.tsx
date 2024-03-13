"use client";

import Button from "@/components/common/Button/Button";
import styles from "./page.module.scss";
import Layout from "@/components/common/Layout/Layout";
import { getAPIMedicines } from "../../lib/getAPIMedicines";
import { ChangeEvent, useEffect, useState } from "react";
import List from "../../components/search/List/List";
import Searchbar from "@/components/search/Searchbar/Searchbar";
import Link from "next/link";
import Loader from "@/components/common/Loader/Loader";

const Search = () => {
	const [pills, setPills] = useState([]);
	const [value, setValue] = useState("");
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAPIMedicines();
				setPills(data.results);
				setShowLoader(false);
			} catch (error) {
				console.error("Error");
			}
		};
		setShowLoader(true);
		fetchData();
	}, []);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);
	};

	const searchedPills = pills.filter((pill: any) => {
		return pill.openfda.brand_name[0]
			.toLowerCase()
			.includes(value.toLowerCase());
	});

	return (
		<div className={styles.search}>
			<header className={styles.header}>
				<h1>Medicine finder</h1>
				<div className={styles.header__btn}>
					<Link href="/dashboard">
						<Button
							variant="primary"
							label="Go back to dashboard"
							type="button"
						/>
					</Link>
				</div>
			</header>
			<Layout>
				<main className={styles.main}>
					<section className={styles.searchbar}>
						<h2 className={styles.searchbar__header}>Search for medicines</h2>
						<Searchbar value={value} handleChange={handleChange} />
					</section>
					<section>
						<h2 className={styles.medicines__header}>All medicines</h2>
						{showLoader ? (
							<Loader />
						) : (
							<ul className={styles.main__list}>
								{searchedPills?.map((el: any) => {
									return (
										<List
											key={el.id}
											id={el.id}
											brandName={el.openfda?.brand_name?.[0]}
											usage={el.indications_and_usage?.[0]}
											purpose={el.purpose?.[0]}
										/>
									);
								})}
							</ul>
						)}
					</section>
				</main>
			</Layout>
		</div>
	);
};

export default Search;
