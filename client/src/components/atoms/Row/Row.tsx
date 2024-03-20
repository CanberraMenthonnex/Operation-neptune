import { RowProps } from './row.interface'
import styles from './row.module.css'

/**
 * Row component
 *
 * @description 2 types (use row.interface.ts):
 *  - type character (input: CharacterRow values)
 *  - type scenario (input: ScenarioRow values)
 *
 * @param {string} rowType - Row type
 * @param {CharacterRow | ScenarioRow} rowData - Row data
 * @returns {ReactElement} - Row component
 */
function Row({ rowType, rowData }: RowProps) {
  if (rowType === 'character') {
    return (
      <>
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <img src={rowData.imageSrc} alt="" className={styles.rowImage} />
            <p className="text-font">{rowData.name}</p>
          </div>
          <div className={styles.rowRight}>
            <p className="text-font">{rowData.profession}</p>
            <p className={`text-font ${styles.rowTextOrange}`}>
              {rowData.clearance}
            </p>
          </div>
        </div>
      </>
    )
  }
  if (rowType === 'scenario') {
    return (
      <>
        <div className={styles.row}>
          <div className={styles.rowLeft}>
            <p className="text-font">{rowData.title}</p>
          </div>
          <div className={styles.rowRight}>
            <p className="text-font">{rowData.scenesNumber} scenes</p>
            <p className="text-font">{rowData.charactersNumber} characters</p>
          </div>
        </div>
      </>
    )
  }
}

export default Row
