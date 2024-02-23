"use client";

import Input from "@/components/common/Input/Input";
import "./add.scss";
import { useState } from "react";
import Button from "@/components/common/Button/Button";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Add = () => {
	const [hour, setHour] = useState("");
	const [name, setName] = useState("");
	const [dosage, setDosage] = useState("");

    const handleAdding = () => {};

	return (
		<section className="add">
			<div className="add__btn">
				<Link href="/dashboard">
					<RxCross1 />
				</Link>
			</div>
			<form className="add__form" onSubmit={handleAdding}>
				<Input
					value={hour}
					onChange={(e) => setHour(e.target.value)}
					type="time"
					label="Time"
					isError={false}
				/>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					label="Name"
					isError={false}
				/>
				<Input
					value={dosage}
					onChange={(e) => setDosage(e.target.value)}
					type="text"
					label="Dosage"
					isError={false}
				/>

				<Button type="submit" variant="primary" label="Add" />
			</form>
		</section>
	);
};

export default Add;
