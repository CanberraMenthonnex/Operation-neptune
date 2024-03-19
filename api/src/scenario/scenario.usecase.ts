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

  async createScenario(scenario: ScenarioDto): Promise<Scenario> {
    return this.scenarioRepository.create(scenario)
  }

  async getScenario(id: string): Promise<Scenario | null> {
    return this.scenarioRepository.get(id)
  }

  async updateScenario(
    id: string,
    scenario: ScenarioDto
  ): Promise<Scenario | null> {
    return this.scenarioRepository.update(id, scenario)
  }

  async deleteScenario(id: string): Promise<boolean> {
    return this.scenarioRepository.delete(id)
  }

  async getAllScenarios(): Promise<Scenario[]> {
    return this.scenarioRepository.getAll()
  }
}
