"use client";

import Button from "@/components/common/Button/Button";
import styles from "./page.module.scss";
import { RxCross1 } from "react-icons/rx";
import Layout from "@/components/common/Layout/Layout";
import { getAPIMedicines } from "../../lib/getAPIMedicines";
import { ChangeEvent, useEffect, useState } from "react";
import List from "../../components/search/List/List";
import Searchbar from "@/components/search/Searchbar/Searchbar";

const Search = () => {
	const [pills, setPills] = useState<any>([]);
	const [value, setValue] = useState<string>("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getAPIMedicines();
				setPills(data.results);
			} catch (error) {
				console.error("Error");
			}
		};

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
					<Button type="button" variant="secondary" label={<RxCross1 />} />
				</div>
			</header>
			<Layout>
				<main className={styles.main}>
					<section className="searchbar">
						<h2>Search for medicines</h2>
						<Searchbar value={value} handleChange={handleChange} />
					</section>
					<section>
						<h2>All medicines</h2>
						<ul className={styles.main__list}>
							{searchedPills?.map((el: any) => {
								return (
									<List
										key={el.id}
										brandName={el.openfda?.brand_name?.[0]}
										usage={el.indications_and_usage?.[0]}
										purpose={el.purpose?.[0]}
									/>
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
