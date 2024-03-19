import { NextFunction, Request, Response } from 'express'

import { ValidationError } from '../errors/validation.error'

/**
 * It is responsible for handling the errors in the application
 * It returns a 400 status code and the errors if the error is a ValidationError
 * It returns a 500 status code and a generic error message if the error is not a ValidationError
 */
export const errorMiddleware = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ValidationError) {
    res.status(400).json({ errors: error.errors })
    return
  }
  res
    .status(500)
    .json({ error: (error as any)?.message || 'Something went wrong' })
}
