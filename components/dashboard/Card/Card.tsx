"use client";

import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import "./card.scss";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { CardProps } from "@/data/types";
import { morning, noon, evening } from "@/data/consts";

const Card = ({ hour, name, dosage }: CardProps) => {
	const [taken, setTaken] = useState<boolean>(false);

	const handleClick = () => {
		setTaken(!taken);
	};

	return (
		<section className="card">
			<header className="header">
				<div className="header__hour">{hour}</div>
				<div className="header__icon">
					{hour >= morning && hour < noon ? (
						<IoPartlySunnyOutline />
					) : hour >= noon && hour < evening ? (
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
			{taken ? (
				<div className="main__btn main__btn--checked" onClick={handleClick}>
					<Button
						variant="secondary"
						label={<FaCheck />}
						type="button"
						onClick={handleClick}
					/>
				</div>
			) : (
				<div className="main__btn">
					<Button
						variant="secondary"
						label="Mark as taken"
						type="button"
						onClick={handleClick}
					/>
				</div>
			)}
		</section>
	);
};

export default Card;
