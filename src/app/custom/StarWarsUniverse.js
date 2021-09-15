/* eslint-disable*/
import Entity from "./Entity";

export default class StarWarsUniverse {
	constructor() {
		this.entities = [];
	}

	// get _entities() {
	// 	return this._entities;
	// }

	async init() {
		const fetchData = await fetch("https://swapi.boom.dev/api/");
		const entities = await fetchData.json();
		for (let entityName in entities) {
			const entityFetch = await fetch(entities[entityName]);
			const entityData = await entityFetch.json();
			// console.log(entityData);
			this.entities.push(new Entity(entityName, entityData.count, entityData.results));
		}
		// console.log(this.entities);
	}
}
