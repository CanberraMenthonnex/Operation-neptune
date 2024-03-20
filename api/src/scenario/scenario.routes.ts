import { Router } from 'express';



import { ScenarioController } from './scenario.controller';


/**
 * It's responsible for creating the routes for the scenario entity
 */

const scenarioController = new ScenarioController()

export const scenarioRouter = Router()

scenarioRouter.post(
  '/',
  /**
   * #swagger.tags = ['Scenario']
   * #swagger.summary = 'Create a scenario'
   * #swagger.requestBody = {
        required: true,
        schema: { $ref: "#/components/schemas/Scenario" }  
      }
   */
  scenarioController.createScenario.bind(scenarioController)
)

scenarioRouter.get(
  '/:id',
  /**
   * #swagger.tags = ['Scenario']
   * #swagger.summary = 'Get a scenario by id'
   */
  scenarioController.getScenario.bind(scenarioController)
)

scenarioRouter.put(
  '/:id',
  /**
   * #swagger.tags = ['Scenario']
   * #swagger.summary = 'Update a scenario by id'
   */
  scenarioController.updateScenario.bind(scenarioController)
)

scenarioRouter.delete(
  '/:id',
  /**
   * #swagger.tags = ['Scenario']
   * #swagger.summary = 'Delete a scenario by id'
   */
  scenarioController.deleteScenario.bind(scenarioController)
)

scenarioRouter.get(
  '/',
  /**
   * #swagger.tags = ['Scenario']
   * #swagger.summary = 'Get all scenarios'
   */
  scenarioController.getAllScenarios.bind(scenarioController)
)