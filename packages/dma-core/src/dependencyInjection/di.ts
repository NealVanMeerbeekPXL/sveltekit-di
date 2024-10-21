import { container } from "tsyringe";
import { DatabaseClient, DmaRepository, IDmaRepository } from "../infrastructure";
import { DmaService } from "../services";
import { IDmaService } from "../services/contracts";

export const diContainer = container
    .register(IDmaRepository.name, DmaRepository)
    .register(IDmaService.name, DmaService)
    .register(DatabaseClient.name, DatabaseClient);