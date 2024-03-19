/*
    Row module interfaces:
        - interface CharacterRow (input: type, image, name, rang)
        - interface ScenarioRow (input: type, title, scenesNumber, charactersNumber)
        - type RowProps (allow to choose with interface is use for the Row component)
*/

export interface CharacterRow {
    type: 'character'
    imageSrc?: string
    name: string
    profession: string
    rang: string
}

export interface ScenarioRow {
    type: 'scenario'
    title: string
    scenesNumber: number
    charactersNumber: number
}

export type RowProps = { type: 'character' | 'scenario'; } & (CharacterRow | ScenarioRow);