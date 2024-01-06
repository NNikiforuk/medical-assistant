import Link from "next/link";
import "../../styles/home/links.scss";

const Links = ({ pathname }: { pathname: string }) => {
	return (
		<div className="links">
			<div className="link">
				<Link className={pathname === "/" ? "active" : "nonactive"} href={"/"}>
					SIGN IN
				</Link>
			</div>
			<div className="link">
				<Link
					className={pathname === "/signup" ? "active" : "nonactive"}
					href={"/signup"}
				>
					SIGN UP
				</Link>
			</div>
		</div>
	);
};

export default Links;
