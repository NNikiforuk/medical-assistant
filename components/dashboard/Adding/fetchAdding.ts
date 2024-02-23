export const fetchAdding = async ({
	hour,
	name,
	dosage,
}: {
	hour: any;
	name: string;
	dosage: string;
	loggedUserEmail: string
}) => {
	try {
		const response = await fetch("/api/auth/add", {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ hour, name, dosage }),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		} else {
			return true;
		}
	} catch (error: any) {
		console.error("Registration failed:", error);
		return false;
	}
};
