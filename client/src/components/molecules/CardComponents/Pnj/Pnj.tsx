import { Icon } from '@components/atoms/Icon'

import { PnjProps } from './pnj.interface'
import styles from './pnj.module.css'

/**
 * Pnj component
 *
 * @params {name} string - Pnj name
 * @params {imageSrc} string - Pnj image source
 * @returns {ReactElement} - Pnj component
 */

export default function Pnj({ name, imageSrc }: PnjProps) {
  return (
    <>
      <div className={styles.pnj}>
        <img src={imageSrc} alt="" className={styles.pnjImage} />
        <p className={styles.pnjName}>{name}</p>
        <Icon name="cross" size={10} color="#FFFFFF" />
      </div>
    </>
  )
}
