import Link from "next/link";
import "../../styles/home/ps.scss";

const PS = () => {
	return (
		<div className="ps">
			<div className="text">Don’t have an account?</div>
			<div className="link">
				<Link href={"/signup"}>Sign up</Link>
			</div>
		</div>
	);
};

export default PS;
