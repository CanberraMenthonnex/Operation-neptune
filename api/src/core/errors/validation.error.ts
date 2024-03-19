/**
 * Error thrown when a data validation fails
 */
export class ValidationError extends Error {
  constructor(public readonly errors: string[]) {
    super('Validation failed')
  }
}
