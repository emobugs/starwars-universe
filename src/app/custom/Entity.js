/* eslint-disable */

export default class Entity {
	constructor(name, count, otherData) {
		this.name = name;
		this.data = {
			count,
			otherData,
		};
	}
}
