import Select, { components } from "react-select";
import { useId } from "react";

// const Select = ({ onChange, value }: { onChange: (e: any) => void, value: string }) => {
// 	return (
// 		<div className="select">
// 			<label className="select__label" htmlFor="time">
// 				Time
// 			</label>
// 			<select
// 				value={value}
// 				onChange={onChange}
// 				className="list"
// 				name="time"
// 				id="time"
// 			>
// 				<option className="list__option" value="morning">
// 					morning
// 				</option>
// 				<option className="list__option" value="dinner">
// 					dinner
// 				</option>
// 				<option className="list__option" value="night">
// 					night
// 				</option>
// 			</select>
// 		</div>
// 	);
// };

// export default Select;

type OptionsProps = {
	value: string;
	label: string;
};

const options: OptionsProps[] = [
	{ value: "morning", label: "morning" },
	{ value: "dinner", label: "dinner" },
	{ value: "night", label: "night" },
];

const MySelect = () => {
	return (
		<Select
			components={{
				Input: (props) => (
					<components.Input {...props} aria-activedescendant={undefined} />
				),
			}}
			instanceId={useId()}
			options={options}
			className="project-edition-select-container"
			classNamePrefix="project-edition-select"
		/>
	);
};

export default MySelect;
