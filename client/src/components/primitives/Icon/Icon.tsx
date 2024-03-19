import { IconProps } from './icon.interface.ts'
import { IconsList } from './iconsList.ts'

export function Icon({ name }: IconProps) {
  const SVGIcon = IconsList[name]
  return <SVGIcon />
}
