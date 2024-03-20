import { Character, CharacterDto } from 'types'

const BASE_URL = 'http://localhost:3000'

/**
 * It fetches the character list from the server API
 */
export const fetchCharacters = async () => {
  const response = await fetch(BASE_URL + '/character')
  const data = await response.json()
  return data as Character[]
}

/**
 * It fetches a character by its id from the server API
 * @param id 
 */
export const fetchCharacter = async (id: string) => {
  const response = await fetch(BASE_URL + '/character/' + id)
  const data = await response.json()
  return data as Character
}

/**
 * It updates a character in the server API
 * @param id 
 * @param character 
 * @returns 
 */
export const updateCharacter = async (id: string, character: CharacterDto) => {
  const response = await fetch(BASE_URL + '/character/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  })
  const data = await response.json()
  return data as Character
}

/**
 * It creates a character in the server API
 */
export const createCharacter = async (character: CharacterDto) => {
  const response = await fetch(BASE_URL + '/character', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  })
  const data = await response.json()
  return data as Character
}

/**
 * It deletes a character in the server API
 */
export const deleteCharacter = async (id: string) => {
  const response = await fetch(BASE_URL + '/character/' + id, {
    method: 'DELETE'
  })
  return response
}