import Input from "@/components/common/Input/Input";
import { ChangeEvent } from "react";

type SearchbarProps = {
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Searchbar = ({ value, handleChange }: SearchbarProps) => {
	return (
		<Input
			type="search"
			isError={false}
			label=""
			value={value}
			onChange={handleChange}
			placeholder="Type something"
		/>
	);
};

export default Searchbar;
