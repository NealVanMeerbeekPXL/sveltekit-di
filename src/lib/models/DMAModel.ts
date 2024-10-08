import { Serializable } from "../server/api/Serializable";

export class DMAModel extends Serializable {
  constructor(public company: string, public name: string) {
    super();
  }
}
