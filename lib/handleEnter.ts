import { KeyboardEvent } from "react";

export const handleEnter = (
	e: KeyboardEvent<HTMLInputElement>,
	onPressEnter: () => void
) => {
	if (e.key === "Enter") {
		onPressEnter();
	}
};
