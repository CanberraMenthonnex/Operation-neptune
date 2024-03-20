import { Link } from 'react-router-dom'

import Box from '@components/atoms/Box/Box'
import Button from '@components/atoms/Button/Button'
import Row from '@components/atoms/Row/Row'

import { characters } from './characters.mock'
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
          <Link to={'/characters/edit'} key={character.id}>
            <Row rowType="character" rowData={character} />
          </Link>
        ))}
      </div>
    </Box>
  )
}
