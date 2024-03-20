import { Schema, model } from 'mongoose'
import { Scenario } from 'types'

/**
 * It defines the database schema for the Scenario model.
 * It's based on the Scenario type.
 */

const scenarioSchema = new Schema<Scenario>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  scenes: [
    {
      name: { type: String, required: true },
      place: { type: String, required: true },
      context: { type: String, required: true },
      characters: { type: Array, required: true },
    },
  ],
})

export const ScenarioModel = model('Scenario', scenarioSchema)
