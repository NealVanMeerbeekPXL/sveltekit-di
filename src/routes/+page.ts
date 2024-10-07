import type { DMA } from '$lib/server/domain/DMA.js';

export const load = async ({ fetch }) => {
	const res = await fetch('/dma');
	const dmas: DMA[] = await res.json();

	return { dmas };
};