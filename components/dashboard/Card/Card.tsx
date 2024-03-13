"use client";

import { useState } from "react";
import "./card.scss";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { CardProps } from "@/data/types";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Card = ({ hour, name, dosage, id }: CardProps) => {
	const router = useRouter();
	const [taken, setTaken] = useState(false);

	const handleClick = () => {
		setTaken(!taken);
	};

	const handleDelete = async (id: number) => {
		try {
			const response = await fetch(`/api/delete/${id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				router.refresh();
			}
		} catch (error) {
			console.error("Error during deleting pill", error);
		}
	};

	return (
		<section className="card">
			<header className="header">
				<div className="header__hour">{hour}</div>
				<div className="header__icon">
					{hour === "morning" ? (
						<IoPartlySunnyOutline />
					) : hour === "dinner" ? (
						<IoSunnyOutline />
					) : (
						<MdOutlineNightsStay />
					)}
				</div>
			</header>
			<div className="main">
				<div className="main__name">{name}</div>
				<div className="main__dosage">{dosage}</div>
			</div>
			<div className="btns">
				<Link href={`/dashboard/edit/${id}`}>
					<Button variant="transparent" label="Edit" type="button" />
				</Link>
				<Button
					onClick={() => handleDelete(id)}
					variant="transparent"
					label="Delete"
					type="button"
				/>

				{taken ? (
					<div className="btns__icon">
						<Button
							onClick={handleClick}
							variant="greenIcon"
							label={<MdCheck />}
							type="button"
						/>
					</div>
				) : (
					<div className="btns__icon">
						<Button
							onClick={handleClick}
							variant="red"
							label="to take"
							type="button"
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default Card;
