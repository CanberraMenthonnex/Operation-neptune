import { Link, useNavigate, useParams } from 'react-router-dom'

import Box from '@components/atoms/Box'
import Button from '@components/atoms/Button'
import TextArea from '@components/atoms/TextArea'
import FormInput from '@components/molecules/FormInput'
import { useCharacters } from 'hooks/useCharacters'

import styles from './editCharacter.module.scss'

/**
 * EditCharacter component
 *
 * @description A component to edit a character
 * @returns {ReactElement} - EditCharacter component
 */
function EditCharacter() {
  const navigate = useNavigate()
  const params = useParams()
  const characterId = params.id
  const { characterForm, dispatchCharacterForm, editCharacter, removeCharacter } = useCharacters(
    {
      characterId,
      onCharacterUpdated: () => {
        navigate('/characters')
      },
      onCharacterDeleted: () => {
        navigate('/characters')
      }
    }
  )

  return (
    <Box title="Characters" action={<Button color="orange">Add</Button>}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <Link to={'/characters'}>Back</Link>
        </div>
        <div className={styles.container}>
          <div className={styles.statsContainer}>
            <FormInput
              label="Name"
              value={characterForm.name}
              onChange={(event) =>
                dispatchCharacterForm({
                  field: 'name',
                  value: event.target.value,
                })
              }
            />
            <FormInput
              label="Profession"
              value={characterForm.profession}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'profession',
                  value: e.target.value,
                })
              }
            />
            <FormInput
              label="Clearance"
              value={characterForm.clearance}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'clearance',
                  value: e.target.value,
                })
              }
            />
            <TextArea
              label="Description"
              value={characterForm.description}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'description',
                  value: e.target.value,
                })
              }
            />
          </div>
          <div>
            <div className={styles.avatar}>
              <img src="https://images.unsplash.com/flagged/photo-1578074606880-a7f5c9a30418?q=80&w=2272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
            </div>
          </div>
          <div className={styles.statsContainer}>
            <FormInput
              label="Physiscal"
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'stats',
                  value: {
                    ...characterForm.stats,
                    physical: Number(e.target.value),
                  },
                })
              }
              value={String(characterForm?.stats.physical || 0)}
            />
            <FormInput
              label="Social"
              value={String(characterForm?.stats.social || 0)}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'stats',
                  value: {
                    ...characterForm.stats,
                    social: Number(e.target.value),
                  },
                })
              }
            />
            <FormInput
              label="Mental"
              value={String(characterForm?.stats.mental || 0)}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'stats',
                  value: {
                    ...characterForm.stats,
                    mental: Number(e.target.value),
                  },
                })
              }
            />
            <FormInput
              label="Initiative"
              value={String(characterForm?.stats?.initiative || 0)}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'stats',
                  value: {
                    ...characterForm.stats,
                    initiative: Number(e.target.value),
                  },
                })
              }
            />
          </div>
        </div>
        <div>
          <TextArea
            label="Inventory"
            value={characterForm.inventory.items.join(',')}
            onChange={(e) =>
              dispatchCharacterForm({
                field: 'inventory',
                value: {
                  ...characterForm.inventory,
                  items: e.target.value.split(','),
                },
              })
            }
          />
        </div>
        {characterForm.skills.map((skill, index) => (
          <div key={index} className={styles.skillContainer}>
            <FormInput
              label="Skillset"
              value={skill.skillSet}
              onChange={(e) =>
                dispatchCharacterForm({
                  field: 'skills',
                  value: characterForm.skills.map((item, i) =>
                    i === index ? { ...item, skillSet: e.target.value } : item
                  ),
                })
              }
            />
            {skill.skills.map((skill, index) => (
              <div className={styles.skillItem}>
                <FormInput
                  key={index}
                  label="Skill"
                  value={skill}
                  onChange={(e) =>
                    dispatchCharacterForm({
                      field: 'skills',
                      value: characterForm.skills.map((item, i) =>
                        i === index
                          ? {
                              ...item,
                              skills: item.skills.map((s, j) =>
                                j === index ? e.target.value : s
                              ),
                            }
                          : item
                      ),
                    })
                  }
                />
              </div>
            ))}
          </div>
        ))}
        <div className={styles.buttonContainer}>
          <Button color="orange" onClick={editCharacter}>
            Save
          </Button>
          {characterId && <Button color="red" onClick={removeCharacter}>Delete</Button>}
        </div>
      </div>
    </Box>
  )
}

export default EditCharacter
