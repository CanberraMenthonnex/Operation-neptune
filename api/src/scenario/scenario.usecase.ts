import { ScenarioRepository } from './scenario.repository'
import { Scenario, ScenarioDto } from './scenario.type'

/**
 * Business logic for the scenario module.
 * It interacts with the scenario repository to perform CRUD operations.
 */

export class ScenarioUseCase {
  constructor(
    private readonly scenarioRepository: ScenarioRepository = new ScenarioRepository()
  ) {}

  /**
   * Create a new scenario
   * @param scenario
   * @returns
   */
  async createScenario(scenario: ScenarioDto): Promise<Scenario> {
    return this.scenarioRepository.create(scenario)
  }

  /**
   * Retrieve a scenario
   * @param id
   * @returns
   */
  async getScenario(id: string): Promise<Scenario | null> {
    return this.scenarioRepository.get(id)
  }

  /**
   * Update a scenario
   * @param id
   * @param scenario
   * @returns
   */
  async updateScenario(
    id: string,
    scenario: ScenarioDto
  ): Promise<Scenario | null> {
    return this.scenarioRepository.update(id, scenario)
  }

  /**
   * Delete a scenario
   * @param id
   * @returns
   */
  async deleteScenario(id: string): Promise<boolean> {
    return this.scenarioRepository.delete(id)
  }

  /**
   * Retrieve all the scenarios
   * @returns
   */
  async getAllScenarios(): Promise<Scenario[]> {
    return this.scenarioRepository.getAll()
  }
}
