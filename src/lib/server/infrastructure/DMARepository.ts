import { IDatabase } from "./IDatabase";
import type { IDMARepository } from "../applogic/IDMARepository";
import { DMA } from "../domain/DMA";

export class DMARepository implements IDMARepository {
    constructor(private database: IDatabase) {

    }

    async getData() {
        return Promise.resolve([new DMA("Microsoft", "TestAnalyse 2024")]);
    }
}