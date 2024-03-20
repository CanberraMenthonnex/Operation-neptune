import { Expose, Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

import { Character } from '../character/character.types'
import { ScenarioDto, ScenarioSceneDto } from './scenario.type'

/**
 * It validates the incoming data of the Scenario Scene.
 */
class ScenarioSceneDtoImpl implements ScenarioSceneDto {
  @Expose()
  @IsString()
  name!: string

  @Expose()
  @IsString()
  place!: string

  @Expose()
  @IsString()
  context!: string

  @Expose()
  @IsArray()
  characters!: Character[]
}
/**
 *
 * It validates the incoming data of the Scenario DTO.
 */
export class ScenarioDtoImpl implements ScenarioDto {
  @Expose()
  @IsString()
  name!: string

  @Expose()
  @IsString()
  description!: string

  @Expose()
  @Type(() => ScenarioSceneDtoImpl)
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @IsArray()
  scenes!: ScenarioSceneDto[]
}
