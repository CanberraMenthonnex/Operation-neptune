/*
 * These interfaces are used to define the structure of the character object
 * */

export interface Character {
  _id: string
  name: string
  profession: string
  clearance: string
  stats: CharacterStats
  skills: CharacterSkills[]
  inventory: CharacterInventory
  avatar: string
}

export interface CharacterStats {
  _id: string
  physical: number
  mental: number
  social: number
  initiative: number
}

export interface CharacterSkills {
  _id: string
  skillSet: string
  skills: string[]
}

export interface CharacterInventory {
  _id: string
  items: string[]
}

export type CharacterStatsDto = Omit<CharacterStats, '_id'>
export type CharacterSkillsDto = Omit<CharacterSkills, '_id'>
export type CharacterInventoryDto = Omit<CharacterInventory, '_id'>

export type CharacterDto = Omit<
  Character,
  '_id' | 'stats' | 'skills' | 'inventory'
> & {
  stats: CharacterStatsDto
  skills: CharacterSkillsDto[]
  inventory: CharacterInventoryDto
}
