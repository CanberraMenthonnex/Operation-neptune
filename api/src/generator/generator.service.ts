import { Scenario } from '../scenario/scenario.type'

/**
 * The GeneratorService interacts with the AI to generate the data for the scenario and the characters based
 * on a given prompt.
 */
export class GeneratorService {
  /**
   * It generates the data for the scenario
   * @param prompt The prompt to generate the scenario (it needs to provide the expected output format in the prompt)
   */
  async generateScenario(prompt: string): Promise<Scenario> {
    const AI_API = process.env.AI_API
    const response = await fetch(`${AI_API}/scenario`, {
      body: JSON.stringify({ prompt }),
    })
    const scenario = (await response.json()) as Scenario
    return scenario
  }
}
