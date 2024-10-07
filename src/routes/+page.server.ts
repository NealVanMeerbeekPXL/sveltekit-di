import '@abraham/reflection';
import type { PageServerLoad } from './$types';
import container from '$lib/server/di';
import { DMAController } from '$lib/server/api/DMAController';

export const load: PageServerLoad = async () => {
	return { d: await container.resolve<DMAController>(DMAController.name).getAllDMAs() };
};
