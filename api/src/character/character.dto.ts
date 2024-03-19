/*
 * The DTOs are used to validate the input and output of the character object
 * We are using the class-transformer and class-validator libraries to validate the input and output of the character object
 * */
import { Expose, Type } from 'class-transformer'
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator'

import {
  CharacterDto,
  CharacterInventoryDto,
  CharacterSkillsDto,
  CharacterStatsDto,
} from './character.types'

class CharacterStatsDtoImp implements CharacterStatsDto {
  @Expose()
  @IsInt()
  physical!: number

  @Expose()
  @IsInt()
  mental!: number

  @Expose()
  @IsInt()
  social!: number

  @Expose()
  @IsInt()
  initiative!: number
}

class CharacterSkillsDtoImp implements CharacterSkillsDto {
  @Expose()
  @IsString()
  skillSet!: string

  @Expose()
  @IsArray()
  @IsString({ each: true })
  skills!: string[]
}

class CharacterInventoryDtoImp implements CharacterInventoryDto {
  @Expose()
  @IsArray()
  @IsString({ each: true })
  items!: string[]
}

export class CharacterDtoImp implements CharacterDto {
  @Expose()
  @IsString()
  name!: string

  @Expose()
  @IsString()
  profession!: string

  @Expose()
  @IsString()
  clearance!: string

  @Expose()
  @Type(() => CharacterStatsDtoImp)
  @ValidateNested()
  stats!: CharacterStatsDto

  @Expose()
  @Type(() => CharacterSkillsDtoImp)
  @ValidateNested({ each: true })
  @IsArray()
  @IsNotEmpty({ each: true })
  skills!: CharacterSkillsDto[]

  @Expose()
  @Type(() => CharacterInventoryDtoImp)
  @ValidateNested()
  inventory!: CharacterInventoryDto

  @Expose()
  @IsString()
  avatar!: string
}
