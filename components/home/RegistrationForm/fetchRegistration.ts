export const fetchRegistration = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}) => {
	try {
		const response = await fetch("/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		} else {
			return true;
		}
	} catch (error: any) {
		console.error("Registration Failed:", error);
		return false;
	}
};
