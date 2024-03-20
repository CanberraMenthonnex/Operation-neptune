import { BoxProps } from './box.interface'
import styles from './box.module.scss'

/**
 * Box component
 *
 * @description A box component with a title and an action
 *
 * @param {string} title - The title of the box
 * @param {ReactNode} action - The action to be displayed on the right side of the title
 * @param {ReactNode} children - The content of the box
 * @returns {ReactNode} The Box component
 *
 */
export default function Box({ title, action, children }: BoxProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div />
        {title ? (
          <h2 className={`title-font ${styles.title}`}>{title}</h2>
        ) : (
          <div />
        )}
        {action ? <div className={styles.action}>{action}</div> : <div />}
      </div>

      {children}
    </div>
  )
}
