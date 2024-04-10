"use client";

import "./navbar.scss";
import Link from "next/link";
import Button from "../Button/Button";
import ButtonLogout from "../Button/ButtonLogout";
import { GiExitDoor } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const currentPage = usePathname();
	const isCurrentPageDashboard = currentPage.includes("dashboard");

	return (
		<header className="header">
			<div className="header__title">
				{isCurrentPageDashboard ? <h1>Welcome!</h1> : <h1>Medicine finder</h1>}

				<div className="header__date">{new Date().toDateString()}</div>
			</div>
			<div className="header__btns">
				<Link href={isCurrentPageDashboard ? "/dashboard/add" : "/dashboard"}>
					<Button
						type="button"
						variant="primary"
						label={
							isCurrentPageDashboard ? "Add medicine" : "Go back to dashboard"
						}
					></Button>
				</Link>
				{isCurrentPageDashboard && (
					<Link href="/search">
						<Button
							type="button"
							variant="primary"
							label="Search pills"
						></Button>
					</Link>
				)}
				<ButtonLogout type="button" variant="exit" label={<GiExitDoor />} />
			</div>
		</header>
	);
};

export default Navbar;
