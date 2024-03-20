/**
 * This file contains the types for the scenario module.
 */

export interface ScenarioScene {
	_id: string;
	name: string;
	place: string;
	context: string;
	characters: any[]; // @TODO: add character type when it's defined
}

export interface Scenario {
	_id: string;
	name: string;
	description: string;
	scenes: ScenarioScene[];
}

export type ScenarioDto = Omit<Scenario, "_id" | "scenes"> & {
	scenes: ScenarioSceneDto[];
};

export type ScenarioSceneDto = Omit<ScenarioScene, "_id">;
