import type { IDMA } from "../domain/IDMA";

export abstract class IDMAService {
    abstract getAllDMAs(): Promise<IDMA[]>
}