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

/*
 * This class is a validator for the character stats DTO
 * */

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

/*
 * This class is a validator for the character skills DTO
 * */

class CharacterSkillsDtoImp implements CharacterSkillsDto {
  @Expose()
  @IsString()
  skillSet!: string

  @Expose()
  @IsArray()
  @IsString({ each: true })
  skills!: string[]
}

/*
 * This class is a validator for the character inventory DTO
 * */

class CharacterInventoryDtoImp implements CharacterInventoryDto {
  @Expose()
  @IsArray()
  @IsString({ each: true })
  items!: string[]
}

/*
 *  This class is a validator for the character DTO
 * */

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
