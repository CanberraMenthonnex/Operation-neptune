import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  color: ButtonColors
}

export type ButtonColors = 'orange' | 'red'
