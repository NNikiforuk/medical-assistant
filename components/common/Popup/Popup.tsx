import "./popup.scss";

type Popup = {
	togglePopup: (event: React.MouseEvent<HTMLElement>) => void;
};
export const Popup = ({ togglePopup }: Popup) => (
	<div className="popup">
		<div className="popup__card">
			<button className="btn" onClick={togglePopup}>
				Close
			</button>
		</div>
	</div>
);
