"use client";

import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import "./card.scss";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

type CardProps = {
	isTaken: boolean;
	hour: string;
	name: string;
	dosage: string;
};

const Card = ({ isTaken, hour, name, dosage }: CardProps) => {
	const [taken, setTaken] = useState<boolean>(false);

	const handleClick = () => {
		setTaken(!taken);
	};

	return (
		<div className="card">
			<div className="card__header">
				<div className="card__header__hour">{hour}</div>
				<div className="card__header__icon">
					<IoPartlySunnyOutline />
				</div>
			</div>
			<div className="card__main">
				<div className="card__main__name">{name}</div>
				<div className="card__main__dosage">{dosage}</div>
			</div>
			{taken ? (
				<div className="card__main__checked">
					<FaCheck />
				</div>
			) : (
				<div className="card__main__btn" onClick={handleClick}>
					<Button variant="secondary" label="Mark as taken" type="button" />
				</div>
			)}
		</div>
	);
};

export default Card;
