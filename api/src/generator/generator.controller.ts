import { NextFunction, Request, Response } from 'express'

import { validateDto } from '../core/validateDto'
import { GeneratorDtoImpl } from './generator.dto'
import { GeneratorUseCase } from './generator.usecase'

/**
 * This controller is responsible for handling the requests and responses for the generator module.
 * It interacts with the GeneratorUseCase to perform the operations.
 */
export class GeneratorController {
  constructor(private generatorUseCase = new GeneratorUseCase()) {}

  /**
   * Generate a scenario based on the incoming prompt using the generator use case.
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  async generateScenario(req: Request, res: Response, next: NextFunction) {
    const dto = await validateDto(GeneratorDtoImpl, req.body, next)
    if (!dto) return
    const scenario = await this.generatorUseCase.generateScenario(dto.prompt)
    return res.status(200).json(scenario)
  }
}
