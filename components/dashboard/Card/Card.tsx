"use client";

import { useState } from "react";
import "./card.scss";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { MdOutlineNightsStay } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { CardProps } from "@/data/types";
import { morning, noon, evening } from "@/data/consts";
import Icon from "@/components/common/Icon/Icon";

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
					<Icon variant="green" label={<MdCheck />} onClick={handleClick} />
				</div>
			) : (
				<div className="main__btn">
					<Icon variant="red" label={<RxCross2 />} onClick={handleClick} />
				</div>
			)}
		</section>
	);
};

export default Card;
