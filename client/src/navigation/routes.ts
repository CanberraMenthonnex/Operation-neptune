import Home from '@pages/Home'
import EditCharacter from '@pages/characters/edit/EditCharacter'
import Characters from '@pages/characters/list/Characters'
import EditScenario from '@pages/scenarios/edit/EditScenario'
import Scenarios from '@pages/scenarios/list/Scenarios'

import { Routes } from './routes.interface'

/**
 * Routes
 *
 * @description - This is the routes array with the pages and their paths
 * @returns {Routes[]} - Routes array
 */
export const routes: Routes[] = [
  { Page: Home, path: '/' },
  { Page: Characters, path: '/characters' },
  { Page: EditCharacter, path: '/characters/edit' },
  { Page: Scenarios, path: '/scenarios' },
  { Page: EditScenario, path: '/scenarios/edit' },
]
