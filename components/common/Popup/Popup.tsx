import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import "./popup.scss";

export default function Popup({
	text,
	popup,
	handleClose,
}: {
	text: string;
	handleClose: (e: any) => void;
	popup: boolean;
}) {
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
				</DialogActions>
			</Dialog>
		</>
	);
}
