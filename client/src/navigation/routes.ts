import Characters from '../pages/Characters/Characters.tsx'
import Home from '../pages/Home'
import { Routes } from './routes.interface'

export const routes: Routes[] = [
  { Page: Home, path: '/' },
  { Page: Characters, path: '/characters' },
]
