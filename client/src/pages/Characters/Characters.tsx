import Box from '../../components/atoms/Box/Box.tsx'
import Button from '../../components/atoms/Button/Button.tsx'
import Row from '../../components/atoms/Row/Row.tsx'
import { characters } from './characters.mock.ts'
import styles from './characters.module.css'

/**
 * Characters page
 *
 * @description - This is the characters page
 * @returns {ReactElement} - Characters page
 */
export default function Characters() {
  return (
    <Box title="Characters" action={<Button color="orange">Add</Button>}>
      <div className={styles.charactersList}>
        {characters.map((character) => (
          <Row key={character.id} rowType="character" rowData={character} />
        ))}
      </div>
    </Box>
  )
}
