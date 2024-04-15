"use client";

import "./card.scss";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import Button from "@/components/common/Button/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Popup from "@/components/common/Popup/Popup";

type CardProps = {
	hour: string;
	name: string;
	dosage: string;
	id: number;
	isTaken: boolean;
};

const Card = ({ hour, name, dosage, id, isTaken }: CardProps) => {
	const [ifWantToDelete, setIfWantToDelete] = useState(false);
	const router = useRouter();

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
		setIfWantToDelete(false);
	};

	const handleTakenPill = async (id: number, set: boolean) => {
		try {
			const response = await fetch(`/api/edit/${id}/mark`, {
				method: "PATCH",
				body: JSON.stringify({
					set,
				}),
			});

			if (response.ok) {
				router.refresh();
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleClosePopup = () => {
		setIfWantToDelete(false);
	};


	return (
		<section className="card">
			{ifWantToDelete && (
				<Popup
					handleClose={handleClosePopup}
					handleConfirmation={() => handleDelete(id)}
					text="Do you really want to delete?"
					popup={ifWantToDelete}
					twoBtns={true}
				/>
			)}
			<header className={`header ${isTaken && "header--taken"}`}>
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
					<Button variant="noBackground" label="Edit" type="button" />
				</Link>
				<Button
					onClick={() => setIfWantToDelete(true)}
					variant="noBackground"
					label="Delete"
					type="button"
				/>

				{isTaken ? (
					<div className="btns__icon">
						<Button
							variant="success"
							label="taken"
							type="button"
							onClick={() => handleTakenPill(id, false)}
						/>
					</div>
				) : (
					<div className="btns__icon">
						<Button
							variant="alert"
							label="to take"
							type="button"
							onClick={() => handleTakenPill(id, true)}
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default Card;
