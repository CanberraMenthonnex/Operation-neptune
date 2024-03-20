import { Icon } from '@components/atoms/Icon'

import { InformationProps } from './information.interface'
import styles from './information.module.css'

/**
 * Information component
 *
 * @params {place} string - Information place
 * @params {context} string - Information context
 * @returns {ReactElement} - Information component
 */

export default function Information({ place, context }: InformationProps) {
  return (
    <>
      <div className={styles.information}>
        <div className={styles.informationPlace}>
          <Icon name="mapMarker" size={20} color="#FFFFFF" />
          <h3>{place}</h3>
        </div>
        <div className={styles.informationContext}>
          <Icon name="message" size={20} color="#FFFFFF" />
          <p>{context}</p>
        </div>
      </div>
    </>
  )
}
