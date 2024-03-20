import { BoxProps } from './box.interface'
import styles from './box.module.scss'

/**
 * Box component
 *
 * @param {Object} children - The children of the component
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
