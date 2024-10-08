import { inject, injectable } from "tsyringe";
import { IDMAService } from "../applogic/IDMAService";
import { serializeMultiple } from "./serialize";
import { DMAModel } from "../../models/DMAModel";

@injectable()
export class DMAController {
    constructor(@inject(IDMAService.name) private readonly dmaService: IDMAService) {

    }

    async getAllDMAs() {
        const dmas = await this.dmaService.getAllDMAs();
        return serializeMultiple(dmas.map(dma => new DMAModel(dma.company, dma.name)));
    }
}
