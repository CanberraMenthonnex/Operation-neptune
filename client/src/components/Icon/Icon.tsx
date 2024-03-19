import { IconsList, IconsName } from './iconsList'

interface IconProps {
  name: IconsName
}
export function Icon({ name }: IconProps) {
  const SVGIcon = IconsList[name]
  return <SVGIcon />
}
