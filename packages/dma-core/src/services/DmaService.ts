import { inject, injectable } from "tsyringe";
import { serializeMultiple } from "./serialization";
import { DmaDTO } from "./dto";
import { IDmaService } from "./contracts";
import { IDmaRepository } from "../infrastructure";

@injectable()
export class DmaService implements IDmaService {
    constructor(@inject(IDmaRepository.name) private dmaRepository: IDmaRepository) {
    }

    async getAllDMAs() {
        const allDmas = await this.dmaRepository.getData();
        return serializeMultiple((allDmas).map(dma => new DmaDTO(dma.id, dma.company, dma.name)));
    }
}