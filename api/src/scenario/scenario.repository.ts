import { ScenarioModel } from './scenario.model'
import { Scenario, ScenarioDto } from './scenario.type'

/**
 * It interacts with the database to perform CRUD operations on the Scenario model.
 */
export class ScenarioRepository {
  create(scenarioDto: ScenarioDto) {
    const scenario = new ScenarioModel(scenarioDto)
    return scenario.save()
  }

  async get(id: string) {
    const scenario = await ScenarioModel.findById<Scenario>(id)
      .exec()
      .catch(() => null)
    return scenario
  }

  async update(id: string, scenarioDto: ScenarioDto) {
    const scenario = await ScenarioModel.findById(id).exec()
    if (!scenario) return null
    scenario.set(scenarioDto)
    return scenario.save()
  }

  async delete(id: string) {
    const scenario = await ScenarioModel.findByIdAndDelete(id)
      .exec()
      .catch(() => null)

    return !!scenario
  }

  async getAll() {
    const scenarios = await ScenarioModel.find<Scenario>().exec()
    return scenarios
  }
}
