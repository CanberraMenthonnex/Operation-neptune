import { Router } from 'express'

import { GeneratorController } from './generator.controller'

/**
 * Generator module routes
 */
const generatorRouter = Router()

const generatorController = new GeneratorController()

generatorRouter.post(
  '/scenario',
  generatorController.generateScenario.bind(generatorController)
)
