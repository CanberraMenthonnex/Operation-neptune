import styles from './input.module.scss'
import { InputProps } from './input.types.ts'

/**
 * Input component
 *
 * Let the user enter data
 *
 * @param {string} id - Input id
 * @param {ReactNode} before - ReactNode to be rendered before the input
 * @param {ReactNode} after - ReactNode to be rendered after the input
 * @returns {ReactElement} - Input component
 */
export default function Input({ id, before, after }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      {before}
      <input id={id} className={styles.input} />
      {after}
    </div>
  )
}
