/*
    Row module interfaces:
        - interface CharacterRow (input: type, image, name, rang)
        - interface ScenarioRow (input: type, title, scenesNumber, charactersNumber)
        - type RowProps (allow to choose with interface is use for the Row component)
*/

export interface CharacterRow {
  imageSrc?: string
  name: string
  profession: string
  clearance: string
}

export interface ScenarioRow {
  title: string
  scenesNumber: number
  charactersNumber: number
}

export type RowProps =
  | {
      rowType: 'character'
      rowData: CharacterRow
    }
  | {
      rowType: 'scenario'
      rowData: ScenarioRow
    }
