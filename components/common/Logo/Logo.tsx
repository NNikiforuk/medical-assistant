import Image from "next/image";
import "./logo.scss";
import logo from "../../../public/logo.svg";
import { DM_Serif_Display } from "next/font/google";

const DMSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] });

const Logo = () => {
	return (
		<section className="logo">
			<div className={`${DMSerifDisplay.className} logo__header`}>
				Medical assistant
			</div>
			<div className="logo__img">
				<Image src={logo} alt="App logo - a pill" priority={true} />
			</div>
		</section>
	);
};

export default Logo;
