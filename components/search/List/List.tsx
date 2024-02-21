import * as React from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MedicationIcon from "@mui/icons-material/Medication";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import List from "@mui/material/List";
import "./list.scss";

type NestedListProps = {
	brandName: string[];
	dosage: string[];
	usage: string[];
	purpose: string[];
};

export default function NestedList({
	brandName,
	dosage,
	usage,
	purpose,
}: NestedListProps) {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<List>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<MedicationIcon />
				</ListItemIcon>
				<ListItemText primary={brandName} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<StarBorder />
						</ListItemIcon>
						<ListItemText primary="Starred" />
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
