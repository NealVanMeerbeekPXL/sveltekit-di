import type { Serializable } from "./Serializable";

export function serializeSingle<T extends Serializable>(modelToSerialize: T) {
    return modelToSerialize.toJSON();
}

export function serializeMultiple<T extends Serializable>(arrayToSerialize: T[]) {
    return arrayToSerialize.map(element => element.toJSON());
}