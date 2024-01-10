import Link from "next/link";
import "./header.scss";

type HeaderProps = {
	isRegistrationPage: boolean;
};

const Header = ({ isRegistrationPage }: HeaderProps) => {
	return (
		<header className="home__header">
			<Link
				className={isRegistrationPage ? "" : "header__link--active"}
				href={"/"}
			>
				SIGN IN
			</Link>

			<Link
				className={isRegistrationPage ? "header__link--active" : ""}
				href={"/?signup"}
			>
				SIGN UP
			</Link>
		</header>
	);
};

export default Header;
