import styles from './input.module.scss'
import { InputProps } from './input.types'

/**
 * Input component
 *
 * @description A component to display an input
 *
 * @param {string} id - Input id
 * @param {ReactNode} before - ReactNode to be rendered before the input
 * @param {ReactNode} after - ReactNode to be rendered after the input
 * @param {string} value - Input value
 * @param {Function} onChange - Function to be called when the input value changes
 * @returns {ReactElement} - Input component
 */
export default function Input({
  id,
  before,
  after,
  value,
  onChange,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      {before}
      <input
        id={id}
        className={styles.input}
        value={value}
        onChange={onChange}
      />
      {after}
    </div>
  )
}
