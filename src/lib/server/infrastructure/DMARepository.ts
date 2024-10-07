import { IDatabase } from "./IDatabase";
import type { IDMARepository } from "../applogic/IDMARepository";
import { DMA } from "../domain/DMA";
import { inject, injectable } from "tsyringe";

@injectable()
export class DMARepository implements IDMARepository {
    constructor(@inject(IDatabase.name) private database: IDatabase) {

    }

    async getData() {
        return Promise.resolve([new DMA("Microsoft", "TestAnalyse 2024")]);
    }
}