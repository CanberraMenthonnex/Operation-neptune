import { Character, CharacterInventory, CharacterSkills, CharacterStats } from "./character/character.types";
import { Scenario, ScenarioDto, ScenarioScene, ScenarioSceneDto } from "./scenario/scenario.type";


/**
 * It set up the Swagger documentation for the API.
 */

const swaggerAutogen = require('swagger-autogen')()

// In swagger, we can reference other objects using $ref. 
// This type is used to define the structure of the object that can be referenced.
type ReferencableType<T extends object> = {
  [key in keyof T]: T[key] | { $ref: string } | [ { $ref: string } ]
}

// Define the objects that are used in the API
type SwaggerDefinitions = {
  ScenarioScene: ReferencableType<ScenarioScene>
  Scenario: ReferencableType<Scenario>
  ScenarioDto: ReferencableType<ScenarioDto>
  ScenarioSceneDto: ReferencableType<ScenarioSceneDto>
  Character: ReferencableType<Character>
  CharacterStats: ReferencableType<CharacterStats>
  CharacterSkills: ReferencableType<CharacterSkills>
  CharacterInventory: ReferencableType<CharacterInventory>
}

// Provide example regarding all the objects that are used in the API
const definitions: SwaggerDefinitions = {
  ScenarioScene: {
    _id: '12345',
    name: 'Weapon shop',
    place: 'Weapon shop in the city center',
    context:
      'The main character is buying a new weapon for the upcoming battle.',
    characters: [
      {
        $ref: '#/definitions/Character',
      },
    ], // @TODO: add character type when it's defined
  },
  Scenario: {
    _id: '12345',
    name: 'Scenario 1',
    description: 'This is the first scenario.',
    scenes: [
      {
        $ref: '#/definitions/ScenarioScene',
      },
    ],
  },
  ScenarioDto: {
    name: 'Scenario 1',
    description: 'This is the first scenario.',
    scenes: [
      {
        $ref: '#/definitions/ScenarioSceneDto',
      },
    ],
  },
  ScenarioSceneDto: {
    name: 'Weapon shop',
    place: 'Weapon shop in the city center',
    context:
      'The main character is buying a new weapon for the upcoming battle.',
    characters: [
      {
        $ref: '#/definitions/Character',
      },
    ], // @TODO: add character type when it's defined
  },
  Character: {
    _id: '12345',
    name: 'John Doe',
    profession: 'Spy',
    clearance: 'Top secret',
    stats: {
      $ref: '#/definitions/CharacterStats',
    },
    skills: [
      {
        $ref: '#/definitions/CharacterSkills',
      },
    ],
    inventory: {
      $ref: '#/definitions/CharacterInventory',
    },
    avatar: 'avatar1',
  },
  CharacterStats: {
    _id: '12345',
    physical: 10,
    mental: 10,
    social: 10,
    initiative: 10,
  },
  CharacterSkills: {
    _id: '12345',
    skillSet: 'Combat',
    skills: ['Sword fighting', 'Archery'],
  },
  CharacterInventory: {
    _id: '12345',
    items: ['Sword', 'Bow'],
  },
}

// Define the Swagger documentation for the API
const doc = {
  info: {
    version: '1.0.0',
    title: 'My API',
    description: 'This is a REST API for the Operation-Neptune API',
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Scenario',
      description: 'Scenario endpoints',
    },
    {
      name: 'Character',
      description: 'Character endpoints',
    },
  ],
  definitions,
}

const outputFile = '../swagger-output.json'
const endpointsFiles = [
  './src/scenario/scenario.routes.ts',
  './src/character/character.routes.ts',
  // './src/generator/generator.routes.ts',
]

swaggerAutogen(outputFile, endpointsFiles, doc)