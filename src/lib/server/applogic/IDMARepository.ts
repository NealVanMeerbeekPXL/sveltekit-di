import type { DMA } from "../domain";

export abstract class IDMARepository {
    abstract getData(): Promise<DMA[]>;
}
