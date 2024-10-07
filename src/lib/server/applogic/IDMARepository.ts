import type { IDMA } from "../domain/IDMA";

export abstract class IDMARepository {
    abstract getData(): Promise<IDMA[]>;
}
