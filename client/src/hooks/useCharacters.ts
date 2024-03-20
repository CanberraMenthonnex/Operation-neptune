import { useEffect, useReducer } from 'react'
import { useQuery, useQueryClient } from 'react-query'

import { CharacterDto } from 'types'
import {
  createCharacter,
  deleteCharacter,
  fetchCharacter,
  fetchCharacters,
  updateCharacter,
} from 'utils/api/characters'

type CharacterProps = {
  characterId?: string | undefined // If it's providde, it fetches the character by its id
  onCharacterUpdated?: (character: CharacterDto) => void // It's called when the character is updated
  onCharacterDeleted?: () => void // It's called when the character is deleted
}

/**
 * Default character form
 */
function getDefaultCharacterForm(): CharacterDto {
  return {
    name: '',
    description: '',
    profession: '',
    clearance: '',
    stats: {
      physical: 0,
      mental: 0,
      social: 0,
      initiative: 0,
    },
    skills: [],
    inventory: {
      items: [],
    },
    avatar: 'avatar1',
  }
}

/**
 * Define how to update the character state
 *
 * @param state
 * @param action
 * @returns
 */
function characterReducer(
  state: CharacterDto,
  action: { field: string; value: unknown }
) {
  if (action.field === 'clear') {
    return getDefaultCharacterForm()
  }
  return {
    ...state,
    [action.field]: action.value,
  }
}

/**
 * It's used to interact with the character feature.
 * It provides the character list and the ability to create / update a character.
 */
export const useCharacters = ({
  characterId,
  onCharacterUpdated,
  onCharacterDeleted,
}: CharacterProps = {}) => {
  const { data: characters } = useQuery('characters', () => fetchCharacters())
  const { data: character } = useQuery(
    'character',
    () => fetchCharacter(characterId || ''),
    {
      enabled: !!characterId,
      refetchInterval: false,
    }
  )

  const [characterForm, dispatchCharacterForm] = useReducer(
    characterReducer,
    getDefaultCharacterForm()
  )

  const queryClient = useQueryClient()

  useEffect(() => {
    console.log({ clear: characterId })
    queryClient.invalidateQueries('character')
    dispatchCharacterForm({ field: 'clear', value: '' })
  }, [characterId])

  useEffect(() => {
    return () => {
      dispatchCharacterForm({ field: 'clear', value: '' })
    }
  }, [])

  /**
   * It updates the character form with the character data.
   */
  useEffect(() => {
    if (character && characterId) {
      dispatchCharacterForm({ field: 'name', value: character.name })
      dispatchCharacterForm({
        field: 'profession',
        value: character.profession,
      })
      dispatchCharacterForm({ field: 'clearance', value: character.clearance })
      dispatchCharacterForm({ field: 'stats', value: character.stats })
      dispatchCharacterForm({ field: 'skills', value: character.skills })
      dispatchCharacterForm({ field: 'inventory', value: character.inventory })
      dispatchCharacterForm({ field: 'avatar', value: character.avatar })
      dispatchCharacterForm({
        field: 'description',
        value: character.description,
      })
    } else {
      dispatchCharacterForm({ field: 'clear', value: '' })
    }
  }, [character])

  /**
   * It creates a new character or updates an existing one.
   * @returns
   */
  const editCharacter = async () => {
    if (characterId) {
      await updateCharacter(characterId || '', characterForm)
      queryClient.invalidateQueries('character')
      onCharacterUpdated && onCharacterUpdated(characterForm)
      return
    }
    await createCharacter(characterForm)
    queryClient.invalidateQueries('characters')
    onCharacterUpdated && onCharacterUpdated(characterForm)
  }

  /**
   * It delete a character by its id.
   */
  const removeCharacter = async () => {
    await deleteCharacter(characterId || '')
    queryClient.invalidateQueries('characters')
    onCharacterDeleted && onCharacterDeleted()
  }

  return {
    characters,
    character,
    dispatchCharacterForm,
    characterForm,
    editCharacter,
    removeCharacter,
  }
}
