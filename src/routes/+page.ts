import type { DMAModel } from "$lib/models";

export const load = async ({ fetch }) => {
	const res = await fetch('/api/dma');
	const dmas: DMAModel[] = await res.json();

	return { dmas };
};