import { DMAService } from "../applogic/DMAService";

export class DMAController {
    constructor(private readonly dmaService: DMAService) {

    }

    async getAllDMAs() {
        return JSON.stringify(await this.dmaService.getAllDMAs());
    }

}