import type { DMA } from "../domain/DMA";

export abstract class IDMARepository {
    abstract getData(): Promise<DMA[]>;
}
