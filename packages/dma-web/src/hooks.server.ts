import "@abraham/reflection";
import { diContainer } from "@resultx/dma-core";

export const handle = async function ({event, resolve}) {
    event.locals.diContainer = diContainer;
    return resolve(event);
};
