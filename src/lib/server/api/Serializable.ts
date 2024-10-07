export abstract class Serializable {
    toJSON() {
		return { ...this };
	}
}