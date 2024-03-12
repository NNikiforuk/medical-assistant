import "./select.scss";

const Select = ({ onChange, value }: { onChange: (e: any) => void, value: string }) => {
	return (
		<div className="select">
			<label className="select__label" htmlFor="time">
				Time
			</label>
			<select
				value={value}
				onChange={onChange}
				className="list"
				name="time"
				id="time"
			>
				<option className="list__option" value="morning">
					morning
				</option>
				<option className="list__option" value="dinner">
					dinner
				</option>
				<option className="list__option" value="night">
					night
				</option>
			</select>
		</div>
	);
};

export default Select;
