/*
    Module Row 2 types (use row.interface.ts):
        - type character (input: CharacterRow values)
        - type scenario (input: ScenarioRow values)
*/
import { RowProps } from './row.interface'
import styles from './row.module.css'

function Row({ row }: { row: RowProps }) {
  if (row.type === 'character') {
    return (
      <>
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <img src={row.imageSrc} alt="" className={styles.rowImage} />
            <p className="text-font">{row.name}</p>
          </div>
          <div className={styles.rowRight}>
            <p className="text-font">{row.profession}</p>
            <p className={`text-font ${styles.rowTextOrange}`}>{row.rang}</p>
          </div>
        </div>
      </>
    )
  }
  if (row.type === 'scenario') {
    return (
      <>
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <p className="text-font">{row.title}</p>
          </div>
          <div className={styles.rowRight}>
            <p className="text-font">{row.scenesNumber} scenes</p>
            <p className="text-font">{row.charactersNumber} characters</p>
          </div>
        </div>
      </>
    )
  }
}

export default Row
