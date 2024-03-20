/*
 * The schema is needed defines the structure of the character object in the database.
 *  It's based on the Character type.
 */
import { Schema, model } from 'mongoose'

import { Character } from 'types'

const characterSchema = new Schema<Character>({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  clearance: { type: String, required: true },
  avatar: { type: String, required: true },
  description: { type: String, required: true },
  stats: {
    physical: { type: Number, required: true },
    mental: { type: Number, required: true },
    social: { type: Number, required: true },
    initiative: { type: Number, required: true },
  },
  skills: [
    {
      skillSet: { type: String, required: true },
      skills: [{ type: String, required: true }],
    },
  ],
  inventory: {
    items: [{ type: String, required: true }],
  },
})

export const CharacterModel = model('Character', characterSchema)
