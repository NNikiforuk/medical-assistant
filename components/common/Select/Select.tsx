import "./select.scss";

const Select = ({ onChange }: { onChange: (e: any) => void }) => {
	return (
		<div className="select" onChange={onChange}>
			<label className="select__label" htmlFor="time">
				Time
			</label>
			<select className="list" name="time" id="time">
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
