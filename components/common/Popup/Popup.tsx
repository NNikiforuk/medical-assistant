import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "./popup.scss";

type PopupProps = {
	text: string;
	handleClose: (e: any) => void;
	handleConfirmation?: (e: any) => void;
	popup: boolean;
	twoBtns?: boolean;
};

export default function Popup({
	text,
	popup,
	handleClose,
	handleConfirmation,
	twoBtns,
}: PopupProps) {
	return (
		<>
			<Dialog
				open={popup}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogContent className="dialog">
					<DialogContentText id="alert-dialog-description">
						{text}
					</DialogContentText>
				</DialogContent>
				<DialogActions className="dialog">
					<Button onClick={handleClose} autoFocus>
						Close
					</Button>
					{twoBtns && (
						<Button onClick={handleConfirmation} autoFocus>
							Delete
						</Button>
					)}
				</DialogActions>
			</Dialog>
		</>
	);
}
