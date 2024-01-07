import Input from "@/stories/Input";
import "../../styles/home/form.scss";

const Form = () => {

	return (
		<form className="form">
			<Input variant="email" label="Email" msg={false} />
			<Input variant="password" label="Password" msg={false} />
		</form>
	);
};

export default Form;
