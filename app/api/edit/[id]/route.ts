import { editPill } from "@/lib/editPill";

export const PATCH = async (
	request: Request,
	{ params }: { params: { id: number } }
) => {
	const { hour, name, dosage } = await request.json();

	try {
		console.log("name", name)

		const id = params.id;
		await editPill(id, hour, name, dosage);

		return new Response("Pill edited");
	} catch (error) {
		return new Response("Failed to update the pill", { status: 500 });
	}
};
