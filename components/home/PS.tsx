import Link from "next/link";
import "../../styles/home/ps.scss";

const PS = ({
	text,
	link,
	href,
}: {
	text: string;
	link: string;
	href: string;
}) => {
	return (
		<div className="ps">
			<div className="text">{text}</div>
			<div className="link">
				<Link href={href}>{link}</Link>
			</div>
		</div>
	);
};

export default PS;
