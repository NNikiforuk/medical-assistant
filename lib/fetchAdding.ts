export const fetchAdding = async ({
	hour,
	name,
	dosage,
	loggedUserEmail,
}: {
	hour: any;
	name: string;
	dosage: string;
	loggedUserEmail: string;
}) => {
	try {
		const response = await fetch("/api/add", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ hour, name, dosage, email: loggedUserEmail }),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		} else {
			return true;
		}
	} catch (error: any) {
		return false;
	}
};
