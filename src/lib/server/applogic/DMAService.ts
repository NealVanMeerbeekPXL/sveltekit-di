import type { IDMARepository } from "./IDMARepository";
import type { IDMAService } from "./IDMAService";

export class DMAService implements IDMAService {
    constructor(private readonly dmaRepository: IDMARepository) {

    }

    getAllDMAs() {
        return this.dmaRepository.getData();
    }
}