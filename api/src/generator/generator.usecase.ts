import { Character, Scenario } from 'types'

import { CharacterUseCase } from '../character/character.usecase'
import { GeneratorService } from './generator.service'

/**
 * The AI generator aims to generate the data for the scenario and the characters.
 * It uses an external service to generate the data.
 */
export class GeneratorUseCase {
  constructor(
    private readonly generatorService = new GeneratorService(),
    private readonly characterUseCase = new CharacterUseCase()
  ) {}

  /**
   * It generates the data for the scenario
   * @param prompt The prompt to generate the scenario
   */
  async generateScenario(prompt: string): Promise<Scenario> {
    const availableCharacters = await this.characterUseCase.getAllCharacters()
    const preparedPrompt = this.prepareScenarioPrompt(
      prompt,
      availableCharacters
    )
    return this.generatorService.generateScenario(preparedPrompt)
  }

  /**
   * It generates the prompt to send to the AI with the expected output format.
   * @param prompt The prompt to generate the scenario
   * @param availableCharacters The available characters to include in the scenario
   */
  private prepareScenarioPrompt(
    prompt: string,
    availableCharacters: Character[]
  ): string {
    return `You are a game master of RPG. Generate me a scenario in the spy world. 
    I want the scenario in the JSON format. 
    I want an array, each item represents a scene. 
    A scene has the following fields: "characters", "location", "description" and "name". 
    I want as response only a JSON format.
    Pick in the following list the characters you want to include in the scenario: ${availableCharacters.join(', ')}.
    The following text represents the context of the scenario: ${prompt}`
  }
}
