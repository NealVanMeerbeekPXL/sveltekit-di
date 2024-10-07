import type { IDMA } from "./IDMA";

export class DMA implements IDMA {
    constructor(public company: string, public name: string) {

    }

    toJSON () {
        return { ...this } // here I make a POJO's copy of the class instance
      }
}