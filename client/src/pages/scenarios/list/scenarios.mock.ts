export interface Scenarios {
  id: number
  title: string
  scenesNumber: number
  charactersNumber: number
}
export const scenarios: Scenarios[] = [
  {
    id: 1,
    title: 'Our very first mission',
    scenesNumber: 3,
    charactersNumber: 4,
  },
  {
    id: 2,
    title: 'An uncommon encounter',
    scenesNumber: 2,
    charactersNumber: 2,
  },
  {
    id: 3,
    title: 'The great escape',
    scenesNumber: 4,
    charactersNumber: 8,
  },
  {
    id: 4,
    title: 'The final showdown',
    scenesNumber: 8,
    charactersNumber: 27,
  },
]
