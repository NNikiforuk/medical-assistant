import { markPillAsNotTaken } from "@/lib/markPillAsNotTaken";
import { markPillAsTaken } from "@/lib/markPillAsTaken";

export const PATCH = async (
	request: Request,
	{ params }: { params: { id: number } }
) => {
	const { set } = await request.json();

	try {
		const id = params.id;

        if (set) {
            await markPillAsTaken(id);

        } else {
            await markPillAsNotTaken(id)
        }


		return new Response("Pill marked");
	} catch (error) {
		return new Response("Failed to mark the pill", { status: 500 });
	}
};
