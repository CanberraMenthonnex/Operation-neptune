import { Link } from 'react-router-dom'

import Box from '@components/atoms/Box/Box'
import Button from '@components/atoms/Button/Button'
import Row from '@components/atoms/Row/Row'
import { useCharacters } from 'hooks/useCharacters'

import styles from './characters.module.css'

/**
 * Characters page
 *
 * @description - This is the characters page
 * @returns {ReactElement} - Characters page
 */
export default function Characters() {
  const { characters } = useCharacters()

  return (
    <Box
      title="Characters"
      action={
        <Link to={"/characters/create"}>
          <Button color="orange">Add</Button>
        </Link>
      }
    >
      <div className={styles.charactersList}>
        {characters &&
          characters.map((character) => (
            <Link to={'/characters/edit/' + character._id} key={character._id}>
              <Row rowType="character" rowData={character} />
            </Link>
          ))}
      </div>
    </Box>
  )
}
