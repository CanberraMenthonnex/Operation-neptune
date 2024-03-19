/*
* The characterSchema is a Mongoose schema that defines the structure of the character object.
* It reuses the Character interface to define the types of the fields.
* The schema is then exported to be used in the database connection and model.
*/

import { model, Schema } from 'mongoose'
import { Character } from "./character.types";

const characterSchema = new Schema<Character>({
    name: { type: String, required: true },
    profession: { type: String, required: true },
    clearance: { type: String, required: true },
    avatar: { type: String, required: true },
    stats: {
        physical: { type: Number, required: true },
        mental: { type: Number, required: true },
        social: { type: Number, required: true },
        initiative: { type: Number, required: true }
    },
    skills: [{
        skillSet: { type: String, required: true },
        skills: [{ type: String, required: true }]
    }],
    inventory: {
        items: [{ type: String, required: true }]
    }
})

export const CharacterModel = model('Character', characterSchema)