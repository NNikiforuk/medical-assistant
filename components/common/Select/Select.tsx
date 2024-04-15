import "./select.scss";

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

export type OptionsProps = {
	value: string;
	label: string;
};

const options: OptionsProps[] = [
	{ value: "morning", label: "morning" },
	{ value: "dinner", label: "dinner" },
	{ value: "night", label: "night" },
];

import Select, { components } from "react-select";

const MySelect = ({
	onChange,
	value,
	...props
}: {
	onChange: (e: any) => void;
	value: string;
}) => {
	return (
		<div className="select__wrapper">
			<label className="label" htmlFor="time">
				Time
			</label>
			<Select
				onChange={onChange}
				value={options.filter(function (option) {
					return option.value === value;
				})}
				{...props}
				components={{
					Input: (props) => (
						<components.Input {...props} aria-activedescendant={undefined} />
					),
				}}
				instanceId={"wsad123wqwe"}
				className="select"
				classNamePrefix="select"
				name="time"
				options={options}
			/>
		</div>
	);
};

export default MySelect;
