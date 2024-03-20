import { Link } from 'react-router-dom'

import Box from '@components/atoms/Box'
import Button from '@components/atoms/Button'
import Row from '@components/atoms/Row'

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
          <Link to={'/scenarios/edit'} key={scenario.id}>
            <Row key={scenario.id} rowType="scenario" rowData={scenario} />
          </Link>
        ))}
      </div>
    </Box>
  )
}
