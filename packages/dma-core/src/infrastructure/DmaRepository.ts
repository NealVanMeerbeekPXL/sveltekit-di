import { inject, injectable } from "tsyringe";
import { IDmaRepository } from "./IDmaRepository";
import { DatabaseClient } from "./DatabaseClient";

@injectable()
export class DmaRepository implements IDmaRepository {
    constructor(@inject(DatabaseClient) private prisma: DatabaseClient) {

    }

    async getData() {
        await this.prisma.dma.deleteMany();
        return await this.prisma.dma.createManyAndReturn({
            data: {
                company: "Microsoft",
                name: "TestAnalysis 2024"
            }
        })
    }
}