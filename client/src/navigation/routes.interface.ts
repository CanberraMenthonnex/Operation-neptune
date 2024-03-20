import { ReactNode } from 'react'

export interface Routes {
  Page: () => ReactNode
  path: string
}
