import { Character } from './character.types'

export interface CharacterRepository {
    create(character: Character): Promise<Character>
    read(id: number): Promise<Character>
    update(character: Character): Promise<Character>
    delete(id: number): Promise<boolean>
    list(): Promise<Character[]>
}