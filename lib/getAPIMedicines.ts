export async function getAPIMedicines() {
	//First 500 results
	try {
		const res = await fetch(
			`https://api.fda.gov/drug/label.json?api_key=KLxGjiRrhbj1eKfcew93j85eAMhz8aquCkxvBX9A&search=effective_time:[20110601+TO+20231231]&limit=500`
		);

		if (res.ok) {
			const data = await res.json();

			//Filter results with known brand name and purpose
			const filteredResults = data.results.filter(
				(result: { openfda: {}; purpose: {} }) =>
					result.openfda &&
					Object.keys(result.openfda).length > 0 &&
					result.purpose &&
					Object.keys(result.purpose).length > 0
			);

			return await { ...data, results: filteredResults };
		} else {
			throw new Error("Response not OK");
		}
	} catch (error) {
		console.error(error);
		throw error;
	}
}
