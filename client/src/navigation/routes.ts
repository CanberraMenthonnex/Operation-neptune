import Characters from '../pages/Characters/Characters.tsx'
import EditCharacter from '../pages/Characters/EditCharacter.tsx'
import Home from '../pages/Home'
import Scenarios from '../pages/Scenarios/Scenarios.tsx'
import { Routes } from './routes.interface'

export const routes: Routes[] = [
  { Page: Home, path: '/' },
  { Page: Characters, path: '/characters' },
  { Page: EditCharacter, path: '/characters/edit' },
  { Page: Scenarios, path: '/scenarios' },
]
