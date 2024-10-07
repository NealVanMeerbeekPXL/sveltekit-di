import { Serializable } from "../Serializable";

export class DMA extends Serializable {
  constructor(public company: string, public name: string) {
    super();
  }
}
