import { IDmaService } from "@resultx/dma-core";

export const load = async function ({ locals }) {
    return {
        dmas: await locals.diContainer.resolve<IDmaService>(IDmaService.name).getAllDMAs(),
    };
};
