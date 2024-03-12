import { editePill } from "@/lib/editePill";

export const PATCH = async (
	request: Request,
	{ params }: { params: { id: number } }
) => {
	const { hour, name, dosage } = await request.json();

	console.log(hour);
	try {
		const id = params.id;
		await editePill(id, hour, name, dosage);

		return new Response("Pill edited");
	} catch (error) {
		return new Response("Failed to update the pill", { status: 500 });
	}
};
