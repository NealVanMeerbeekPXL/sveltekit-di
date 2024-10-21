import { Serializable } from "../serialization/Serializable";

export class DmaDTO extends Serializable {
    constructor(public id: string, public company: string, public name: string) {
        super();
    }
}
