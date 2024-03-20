import classNames from 'classnames'

import { ButtonProps } from './button.interface'
import styles from './button.module.css'

/**
 * Button component
 *
 * @params {ReactNode} children - Button content
 * @params {ButtonColors} color - Button color
 * @returns {ReactElement} - Button component
 */
export default function Button({ children, color }: ButtonProps) {
  let variant

  switch (color) {
    case 'red':
      variant = styles.buttonRed
      break
    case 'orange':
      variant = styles.buttonOrange
      break
    default:
      variant = ''
      break
  }

  return (
    <>
      <button className={classNames([styles.button, variant])}>
        {children}
      </button>
    </>
  )
}
