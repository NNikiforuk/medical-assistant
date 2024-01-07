import Button from "@/stories/Button";
import React from "react";
import Form from "./Form";
import PS from "./PS";
import "../../styles/home/shape.scss";

const Shape = ({ signin }: { signin: boolean }) => {
	return (
		<div className="shape_container">
			<Form />
			<div className="btn">
				<Button variant="primary" label={signin ? "Sign in" : "Sig up"} />
			</div>
			<PS
				text={signin ? "Don't have an account?" : "Already have an account?"}
				link={signin ? "Sign up" : "Sign in"}
				href={signin ? "/" : "/signup"}
			/>
		</div>
	);
};

export default Shape;
