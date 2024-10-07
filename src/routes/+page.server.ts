import type { PageServerLoad } from './$types';
import { IoCContainerSingleton } from '$lib/server/di';
import { DMAController } from '$lib/server/api/DMAController';

export const load: PageServerLoad = async () => {
	return { d: (await IoCContainerSingleton.getInstance()).resolve<DMAController>(DMAController.name).getAllDMAs() };
};
