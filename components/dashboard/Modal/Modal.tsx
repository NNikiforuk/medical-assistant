"use client";

import Input from "@/components/common/Input/Input";
import "./modal.scss";
import { useState } from "react";
import Button from "@/components/common/Button/Button";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";

const Modal = () => {
	const [hour, setHour] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [dosage, setDosage] = useState<string>("");

	const handleAdding = () => {};

	return (
		<section className="modal">
			<div className="modal__btn">
				<Link href="/dashboard">
					<RxCross1 />
				</Link>
			</div>
			<form className="modal__form" onSubmit={handleAdding}>
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

export default Modal;
