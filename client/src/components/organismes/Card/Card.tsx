//import { CardProps } from './card.interface'
import Information from '@components/molecules/CardComponents/Information/Information'
import Pnj from '@components/molecules/CardComponents/Pnj/Pnj'

import ImageTest from '../../../../public/vite.svg'
import { Icon } from '../../atoms/Icon'
import { CardProps } from './card.interface'
import styles from './card.module.css'

/**
 * Card component
 *
 * @params {scenarioName} string - Card content
 * @returns {ReactElement} - Card component
 */
export default function Card({ scenarioName }: CardProps) {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.cardFirstContent}>
            <div className={styles.cardDivTitle}>
              <h2>{scenarioName}</h2>
            </div>
            <Icon name="basket" size={15} color="#FFFFFF" />
          </div>
          <div className={styles.cardSecondContent}>
            <div className={styles.cardDivPnj}>
              <Pnj name="Pnj 1" imageSrc={ImageTest} />
              <Pnj name="Pnj 2" />
              <Pnj name="Pnj 3" />
              <div className={styles.cardDivPnjAdd}>
                <button className={styles.cardPnjAdd}>
                  <Icon name="plus" size={10} color="#FFFFFF" />
                </button>
              </div>
            </div>
            <div className={styles.cardDivInfo}>
              <Information
                place="Weapon shop"
                context="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              />
            </div>
          </div>
        </div>
        <div className={styles.cardDivMove}>
          <Icon name="sixdots" size={15} color="#FFFFFF" />
        </div>
      </div>
    </>
  )
}
