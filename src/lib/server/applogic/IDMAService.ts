import type { DMA } from "../domain/DMA";

export abstract class IDMAService {
    abstract getAllDMAs(): Promise<DMA[]>
}