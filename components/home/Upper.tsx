import React from "react";
import Logo from "../general/Logo";
import Links from "./Links";
import "../../styles/home/upper.scss";

const Upper = ({ pathname }: { pathname: string }) => {
	return (
		<div className="upper">
			<Logo />
			<Links pathname={pathname} />
		</div>
	);
};

export default Upper;
