import "./logo.scss";
import { DM_Serif_Display } from "next/font/google";

const DMSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Logo = () => {
	return (
		<section className={`logo ${DMSerifDisplay.className}`}>
			Medical assistant
		</section>
	);
};

export default Logo;
