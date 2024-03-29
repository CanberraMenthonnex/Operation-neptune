import { NextFunction, Request, Response } from 'express'

import { validateDto } from '../core/validateDto'
import { ScenarioDtoImpl } from './scenario.dto'
import { ScenarioUseCase } from './scenario.usecase'

/**
 * It is responsible for handling the requests and responses for the scenario entity
 * It manages the CRUD operations.
 */
export class ScenarioController {
  constructor(private readonly scenarioUseCase = new ScenarioUseCase()) {}

  /**
   * Create the scenario
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  async createScenario(req: Request, res: Response, next: NextFunction) {
    const dto = await validateDto(ScenarioDtoImpl, req.body, next)
    if (!dto) return
    const scenario = await this.scenarioUseCase.createScenario(dto)
    return res.status(201).json(scenario)
  }

  /**
   * Retrieve the scenario
   *
   * @param req
   * @param res
   * @returns
   */
  async getScenario(req: Request, res: Response) {
    const scenario = await this.scenarioUseCase.getScenario(req.params.id)
    if (!scenario) {
      return res.status(404).json({ error: 'Scenario not found' })
    }
    return res.status(200).json(scenario)
  }

  /**
   * Update the scenario
   *
   * @param req
   * @param res
   * @param next
   * @returns
   */
  async updateScenario(req: Request, res: Response, next: NextFunction) {
    const dto = await validateDto(ScenarioDtoImpl, req.body, next)
    if (!dto) return
    const scenario = await this.scenarioUseCase.updateScenario(
      req.params.id,
      dto
    )
    return res.status(200).json(scenario)
  }

  /**
   * Delete the scenario
   *
   * @param req
   * @param res
   * @returns
   */
  async deleteScenario(req: Request, res: Response) {
    const deleted = await this.scenarioUseCase.deleteScenario(req.params.id)
    if (!deleted) {
      return res.status(404).json({ error: "Scenario can't be deleted" })
    }
    return res.status(200).json({ message: 'Scenario deleted' })
  }

  /**
   * Retrieve all the scenarios
   *
   * @param req
   * @param res
   * @returns
   */
  async getAllScenarios(req: Request, res: Response) {
    const scenarios = await this.scenarioUseCase.getAllScenarios()
    return res.status(200).json(scenarios)
  }
}
