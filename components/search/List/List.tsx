"use client";

import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import MedicationIcon from "@mui/icons-material/Medication";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import "./list.scss";
import { useState } from "react";

type NestedListProps = {
	brandName: string[];
	usage: string[];
	purpose: string[];
	id: any;
};

export default function NestedList({
	brandName,
	usage,
	purpose,
	id
}: NestedListProps) {
	const [open, setOpen] = useState<boolean>(false);

	const handleClick = (id: any) => {
		setOpen(!open);
	};

	return (
		<div className="item">
			<ListItemButton onClick={() => handleClick(id)}>
				<ListItemIcon>
					<MedicationIcon />
				</ListItemIcon>
				<ListItemText primary={brandName} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton className="item__desc">
						<ListItemText primary={usage} />
					</ListItemButton>
					<ListItemButton className="item__desc">
						<ListItemText primary={purpose} />
					</ListItemButton>
				</List>
			</Collapse>
		</div>
	);
}
