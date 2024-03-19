/*
 * Business logic for the Character module.
 * It interacts with the Character repository to perform CRUD operations.
 * The use case will be used by the Character controller to handle the requests from the client.
 * */
import { CharacterRepository } from './character.repository'
import { Character, CharacterDto } from './character.types'

export class CharacterUseCase {
  constructor(private readonly repository = new CharacterRepository()) {}

  async createCharacter(character: CharacterDto): Promise<Character> {
    return this.repository.create(character)
  }

  async readCharacter(id: string): Promise<Character | null> {
    return this.repository.read(id)
  }

  async updateCharacter(
    id: string,
    character: CharacterDto
  ): Promise<Character | null> {
    return this.repository.update(id, character)
  }

  async deleteCharacter(id: string): Promise<boolean> {
    return this.repository.delete(id)
  }

  async getAllCharacters(): Promise<Character[]> {
    return this.repository.readAll()
  }
}
