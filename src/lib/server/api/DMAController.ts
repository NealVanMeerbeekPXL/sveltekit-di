import { inject, injectable } from "tsyringe";
import { IDMAService } from "../applogic/IDMAService";
import { serializeMultiple } from "./serialize";
import { DMA } from "./models/DMA";

@injectable()
export class DMAController {
    constructor(@inject(IDMAService.name) private readonly dmaService: IDMAService) {

    }

    async getAllDMAs() {
        const dmas = await this.dmaService.getAllDMAs();
        return serializeMultiple(dmas.map(dma => new DMA(dma.company, dma.name)));
    }
    
}
