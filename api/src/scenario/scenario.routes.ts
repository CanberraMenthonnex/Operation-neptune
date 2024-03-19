import { Router } from 'express'

import { ScenarioController } from './scenario.controller'

/**
 * It's responsible for creating the routes for the scenario entity
 */

const scenarioController = new ScenarioController()

export const scenarioRouter = Router()

scenarioRouter.post(
  '/',
  scenarioController.createScenario.bind(scenarioController)
)

scenarioRouter.get(
  '/:id',
  scenarioController.getScenario.bind(scenarioController)
)

scenarioRouter.put(
  '/:id',
  scenarioController.updateScenario.bind(scenarioController)
)

scenarioRouter.delete(
  '/:id',
  scenarioController.deleteScenario.bind(scenarioController)
)

scenarioRouter.get(
  '/',
  scenarioController.getAllScenarios.bind(scenarioController)
)
