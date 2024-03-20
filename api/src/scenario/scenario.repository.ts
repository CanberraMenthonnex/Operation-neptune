import { Scenario, ScenarioDto } from 'types'

import { ScenarioModel } from './scenario.model'

/**
 * It interacts with the database to perform CRUD operations on the Scenario model.
 */
export class ScenarioRepository {
  /**
   * Persist a new scenario in the database.
   * @param scenarioDto
   * @returns
   */
  create(scenarioDto: ScenarioDto) {
    const scenario = new ScenarioModel(scenarioDto)
    return scenario.save()
  }

  /**
   * Retrieve a scenario from the database.
   * @param id
   * @returns
   */
  async get(id: string) {
    const scenario = await ScenarioModel.findById<Scenario>(id)
      .exec()
      .catch(() => null)
    return scenario
  }

  /**
   * Update a scenario in the database.
   * @param id
   * @param scenarioDto
   * @returns
   */
  async update(id: string, scenarioDto: ScenarioDto) {
    const scenario = await ScenarioModel.findById(id).exec()
    if (!scenario) return null
    scenario.set(scenarioDto)
    return scenario.save()
  }

  /**
   * Delete a scenario from the database.
   * @param id
   * @returns
   */
  async delete(id: string) {
    const scenario = await ScenarioModel.findByIdAndDelete(id)
      .exec()
      .catch(() => null)

    return !!scenario
  }

  /**
   * Retrieve all the scenarios from the database.
   * @returns
   */
  async getAll() {
    const scenarios = await ScenarioModel.find<Scenario>().exec()
    return scenarios
  }
}
