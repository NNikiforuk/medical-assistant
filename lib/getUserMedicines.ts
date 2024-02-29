export async function getUserMedicines(email: string) {
	try {
		const res = await fetch("/api/dashboard", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				email: email,
			},
		});

		if (res.ok) {
			const data = await res.json();
			return data;
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}
