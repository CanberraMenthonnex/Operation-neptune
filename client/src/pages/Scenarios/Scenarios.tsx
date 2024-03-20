import Box from '../../components/atoms/Box/Box.tsx'
import Button from '../../components/atoms/Button/Button.tsx'
import Row from '../../components/atoms/Row/Row.tsx'
import { scenarios } from './scenarios.mock'
import styles from './scenarios.module.css'

/**
 * Scenarios page
 *
 * @description - This is the scenarios page
 * @returns {ReactElement} - Scenarios page
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
