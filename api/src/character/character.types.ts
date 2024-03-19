export interface Character {
    id?: number
    name: string
    profession: string
    clearance: number
    stats: CharacterStats
    skills: CharacterSkills[]
    inventory: CharacterInventory
}

export interface CharacterStats {
    id?: number
    physical: number
    mental: number
    social: number
    initiative: number
}

export interface CharacterSkills {
    id?: number
    skillSet: string
    skills: string[]
}

export interface CharacterInventory {
    id?: number
    items: string[]
}