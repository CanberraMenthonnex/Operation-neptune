import { Expose, Type } from 'class-transformer'
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator'

import { ScenarioDto, ScenarioSceneDto } from './scenario.type'

/**
 * It validates the data of the Scenario Scene DTO.
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
  characters!: any[] // @TODO: add character type when it's defined
}
/**
 *
 * It validates the data of the Scenario DTO.
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
