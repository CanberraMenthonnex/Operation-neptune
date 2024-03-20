import { Expose } from 'class-transformer'
import { IsString } from 'class-validator'

import { GeneratorDto } from './generator.types'

/**
 * It validates the incoming data of the Generator DTO.
 */
export class GeneratorDtoImpl implements GeneratorDto {
  @Expose()
  @IsString()
  prompt!: string
}
