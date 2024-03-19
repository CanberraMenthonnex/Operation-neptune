import classNames from 'classnames'

import { ButtonProps } from './button.interface'
import styles from './button.module.css'

function Button({ title, color }: ButtonProps) {
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
      <button className={classNames([styles.button, variant])}>{title}</button>
    </>
  )
}

export default Button
