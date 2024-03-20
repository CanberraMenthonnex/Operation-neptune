import Box from '@components/atoms/Box/Box'
import Button from '@components/atoms/Button/Button'
import Row from '@components/atoms/Row/Row'

import { scenarios } from './scenarios.mock'
import styles from './scenarios.module.css'

/**
 * scenarios page
 *
 * @description - This is the scenarios page
 * @returns {ReactElement} - scenarios page
 */
export default function Scenarios() {
  return (
    <Box title="Scenarios" action={<Button color="orange">Add</Button>}>
      <div className={styles.scenariosList}>
        {scenarios.map((scenario) => (
          <Row key={scenario.id} rowType="scenario" rowData={scenario} />
        ))}
      </div>
    </Box>
  )
}
