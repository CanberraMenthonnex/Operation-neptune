// Button props interface
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  color: ButtonColors
  onClick?: VoidFunction
}

export type ButtonColors = 'orange' | 'red'
