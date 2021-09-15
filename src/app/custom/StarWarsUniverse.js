/* eslint-disable*/
import Entity from "./Entity";

export default class StarWarsUniverse {
	constructor() {
		this._entities = [];
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
			this._entities.push(new Entity(entityName, entityData));
		}
	}
}
