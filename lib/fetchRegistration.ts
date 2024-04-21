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

		if (response.ok) {
			return true;
		} else {
			return false;
		}
	} catch (error: any) {
		console.error("Registration failed:", error);
		return false;
	}
};
