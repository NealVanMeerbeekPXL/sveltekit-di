import { container } from "tsyringe";
import { IDMARepository } from "./applogic";
import { Database, DMARepository, IDatabase } from "./infrastructure";

container
    .register(IDMARepository.name, DMARepository)
    .register(IDatabase.name, Database);

export default container;