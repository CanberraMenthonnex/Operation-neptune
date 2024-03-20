/*
 * This class is used to define the character repository interface
 * It interacts with the database to perform CRUD operations
 * */
import { Character, CharacterDto } from 'types'

import { CharacterModel } from './character.model'

export class CharacterRepository {
  create(character: CharacterDto) {
    const newCharacter = new CharacterModel(character)
    return newCharacter.save()
  }

  async read(id: string) {
    return await CharacterModel.findById<Character>(id)
      .exec()
      .catch(() => null)
  }

  async update(id: string, character: CharacterDto) {
    const characterToUpdate = await CharacterModel.findById(id).exec()
    if (!characterToUpdate) return null
    characterToUpdate.set(character)
    return characterToUpdate.save()
  }

  async delete(id: string) {
    const character = await CharacterModel.findByIdAndDelete(id)
      .exec()
      .catch(() => null)
    return !!character
  }

  async readAll() {
    return await CharacterModel.find<Character>().exec()
  }
}
