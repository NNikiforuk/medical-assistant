import { deletePill } from "@/lib/deletePill";

export async function DELETE(
	request: Request,
	{ params }: { params: { id: number } }
) {
	try {
		const id = params.id;
		await deletePill(id);

		return new Response("Pill deleted");
	} catch (error) {
		console.error("Error in DELETE request", error);
	}
}
