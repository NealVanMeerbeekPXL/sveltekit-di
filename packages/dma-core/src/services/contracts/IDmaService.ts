import { DmaDTO } from "../dto";

export abstract class IDmaService {
    abstract getAllDMAs(): Promise<DmaDTO[]>;
}