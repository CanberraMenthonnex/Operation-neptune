import Box from '@components/atoms/Box/Box'
import Button from '@components/atoms/Button/Button'
import TextArea from '@components/atoms/TextArea/TextArea'
import FormInput from '@components/molecules/FormInput/FormInput'

import styles from './editCharacter.module.scss'

function EditCharacter() {
  return (
    <Box title="Characters" action={<Button color="orange">Add</Button>}>
      <div>
        <div className={styles.container}>
          <div className={styles.statsContainer}>
            <FormInput label="Name" />
            <FormInput label="Profession" />
            <FormInput label="Clearance" />
            <TextArea label="Description" />
          </div>
          <div>
            <div className={styles.avatar}>
              <img src="https://via.placeholder.com/300" alt="Avatar" />
            </div>
          </div>
          <div className={styles.statsContainer}>
            <FormInput label="Physiscal" />
            <FormInput label="Social" />
            <FormInput label="Mental" />
            <FormInput label="Initiative" />
          </div>
        </div>
        <div>
          <TextArea label="Inventory" />
        </div>
        <div className={styles.skillContainer}>
          <FormInput label="Skillset" />
          <FormInput label="Skill" />
          <FormInput label="Skill" />
          <FormInput label="Skill" />
        </div>
      </div>
    </Box>
  )
}

export default EditCharacter
