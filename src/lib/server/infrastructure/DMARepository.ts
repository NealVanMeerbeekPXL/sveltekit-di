import { inject, injectable } from "tsyringe";
import type { IDMARepository } from "../applogic";
import { DMA } from "../domain";
import { IDatabase } from "./IDatabase";

@injectable()
export class DMARepository implements IDMARepository {
    constructor(@inject(IDatabase.name) private database: IDatabase) {

    }

    async getData() {
        return Promise.resolve([new DMA("Microsoft", "TestAnalyse 2024")]);
    }
}