import type { Dma } from "@prisma/client";

export abstract class IDmaRepository {
    abstract getData(): Promise<Dma[]>;
}
