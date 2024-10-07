import { inject, injectable } from "tsyringe";
import { IDMARepository } from "./IDMARepository";
import type { IDMAService } from "./IDMAService";

@injectable()
export class DMAService implements IDMAService {
    constructor(@inject(IDMARepository.name) private readonly dmaRepository: IDMARepository) {

    }

    getAllDMAs() {
        return this.dmaRepository.getData();
    }
}