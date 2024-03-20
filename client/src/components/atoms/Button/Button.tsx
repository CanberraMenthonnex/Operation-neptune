import classNames from 'classnames'

import { ButtonProps } from './button.interface'
import styles from './button.module.css'

/**
 * Button component
 *
 * @description A button component
 *
 * @params {ReactNode} children - Button content
 * @params {ButtonColors} color - Button color
 * @params {() => void} onClick - Button click event
 * @returns {ReactElement} - Button component
 */
export default function Button({ children, color, onClick }: ButtonProps) {
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
      <button
        className={classNames([styles.button, variant])}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
