import { ClassConstructor, plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import { ValidationError as ValidationErrorClassValidator } from 'class-validator'
import { NextFunction } from 'express'

import { ValidationError } from './errors/validation.error'

const extractErrors = (errors: ValidationErrorClassValidator[]): string[] => {
  return errors
    .map((e) => [
      ...Object.values(e.constraints || {}),
      ...extractErrors(e?.children || []),
    ])
    .reduce((acc, val) => acc.concat(val), [])
}

/**
 * It validates the data of the DTO using the class transformer.
 * It returns null and calls the `next` function with the ValidationError[] as params if the validation fails.
 */
export async function validateDto<T extends object>(
  dtoClass: ClassConstructor<T>,
  body: unknown,
  next: NextFunction
) {
  const dto = plainToClass(dtoClass, body)
  const errors = await validate(dto)

  if (errors.length) {
    const standardizedErrors = extractErrors(errors)
    const error = new ValidationError(standardizedErrors)
    next(error)

    return null
  }
  return dto
}
