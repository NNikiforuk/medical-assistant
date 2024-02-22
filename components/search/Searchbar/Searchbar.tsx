import Input from "@/components/common/Input/Input";
import { ChangeEvent, useState } from "react";

const Searchbar = () => {
	const [value, setValue] = useState<string>("");

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setValue(inputValue);
	};

	return (
		<Input
			type="search"
			isError={false}
			label=""
			value={value}
			onChange={handleChange}
			placeholder="Search..."
		/>
	);
};

export default Searchbar;
