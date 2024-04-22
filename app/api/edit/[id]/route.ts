import { editPill } from "@/lib/editPill";

export const PATCH = async (
	request: Request,
	{ params }: { params: { id: number } }
) => {
	const { hour, name, dosage } = await request.json();

	try {
		const id = params.id;
		const result = await editPill(id, hour, name, dosage);

		return new Response(JSON.stringify(result), {
			headers: {
				"Content-Type": "application/json",
				"Cache-Control": "no-cache, no-store, must-revalidate",
				Pragma: "no-cache",
				Expires: "0",
			},
			status: 200,
		});
	} catch (error) {
		return new Response("Failed to update the pill", {
			status: 500,
			headers: {
				"Cache-Control": "no-cache, no-store, must-revalidate",
				Pragma: "no-cache",
				Expires: "0",
			},
		});
	}
};
