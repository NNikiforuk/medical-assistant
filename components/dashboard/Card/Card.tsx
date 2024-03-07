"use client";

import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import "./card.scss";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CardProps } from "@/data/types";
import { morning, noon, evening } from "@/data/consts";

const Card = ({ hour, name, dosage }: CardProps) => {
	const [taken, setTaken] = useState(false);

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
						type="button"
						onClick={handleClick}
						label={<MdCheck />}
					/>
				</div>
			) : (
				<div className="main__btn">
					<Button
						variant="icon"
						type="button"
						onClick={handleClick}
						label={<RxCross2 />}
					/>
				</div>
			)}
		</section>
	);
};

export default Card;
