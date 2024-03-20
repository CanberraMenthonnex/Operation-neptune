import { IconProps } from './icon.interface'
import { IconsList } from './iconsList'

/**
 * Icon component
 *
 * @description A component to display an icon
 *
 * @param {IconsName} name - Icon name
 * @param {number} size - Icon class name
 * @param {string} color - Icon color
 * @param {string} className - Icon class name
 * @returns {ReactElement} - Icon component
 */
export default function Icon({ name, size, color, className }: IconProps) {
  const SVGIcon = IconsList[name]

  // Handle style (size and color)
  let style = {}
  if (size) {
    style = { ...style, maxWidth: `${size}px`, maxHeight: `${size}px` }
  }
  if (color) {
    style = { ...style, color: color }
  }

  return <SVGIcon style={style} className={className} />
}
