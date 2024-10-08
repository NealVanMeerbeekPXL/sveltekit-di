import type { DMAModel } from '$lib/models/DMAModel';

export const load = async ({ fetch }) => {
	const res = await fetch('/api/dma');
	const dmas: DMAModel[] = await res.json();

	return { dmas };
};