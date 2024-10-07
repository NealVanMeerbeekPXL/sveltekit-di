import { container } from "tsyringe";
import { IDatabase } from "./infrastructure/IDatabase";
import { Database } from "./infrastructure/Database";
import { IDMAService } from "./applogic/IDMAService";
import { DMAService } from "./applogic/DMAService";
import { DMAController } from "./api/DMAController";
import { IDMARepository } from "./applogic/IDMARepository";
import { DMARepository } from "./infrastructure/DMARepository";

container
    .register(IDMARepository.name, DMARepository)
    .register(IDatabase.name, Database)
    .register(IDMAService.name, DMAService)
    .register(DMAController.name, DMAController);

export default container;