import Box from '@components/atoms/Box/Box'
import FormInput from '@components/molecules/FormInput/FormInput'
import Card from '@components/organismes/Card/Card'

import styles from './editScenario.module.css'

/**
 * scenarios page
 *
 * @description - This is the scenarios edit page
 * @returns {ReactElement} - scenarios edit page
 */

function EditScenario() {
  return (
    <Box title="Scenario">
      <div className={styles.formInputDiv}>
        <FormInput label="Generate" value="" />
      </div>
      <div className={styles.scenarioDiv}>
        <Card scenarioName="Weapon shop" />
        <Card scenarioName="Weapon shop" />
        <Card scenarioName="Weapon shop" />
        <Card scenarioName="Weapon shop" />
        <Card scenarioName="Weapon shop" />
      </div>
    </Box>
  )
}

export default EditScenario
