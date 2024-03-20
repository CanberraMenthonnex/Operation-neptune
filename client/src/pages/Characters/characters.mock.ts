export interface Character {
  id: number
  name: string
  profession: string
  clearance: string
  avatar: string
}
export const characters: Character[] = [
  {
    id: 1,
    avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'John Doe',
    profession: 'Field Agent',
    clearance: 'Rookie',
  },
  {
    id: 2,
    avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Jane Doe',
    profession: 'Field Agent',
    clearance: 'Rookie',
  },
  {
    id: 3,
    avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    name: 'John Smith',
    profession: 'Field Agent',
    clearance: 'Rookie',
  },
  {
    id: 4,
    avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    name: 'Jane Smith',
    profession: 'Field Agent',
    clearance: 'Rookie',
  },
]
