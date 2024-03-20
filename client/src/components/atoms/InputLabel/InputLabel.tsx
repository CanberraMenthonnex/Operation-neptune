import { InputLabelProps } from './inputLabel.interface'
import styles from './inputLabel.module.css'

/**
 * InputLabel component
 *
 * @param {ReactNode} children - InputLabel content
 * @param {string} htmlFor - Input id
 * @returns {ReactElement} InputLabel
 */
export default function InputLabel({ children, htmlFor }: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className={styles.label}>
      {children}
    </label>
  )
}
