// Input props interface
import { ReactNode } from 'react'

export interface InputProps {
  id?: string
  before?: ReactNode
  after?: ReactNode
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
