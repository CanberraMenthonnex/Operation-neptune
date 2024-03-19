import { useId } from 'react'

import { Icon } from '../../atoms/Icon'
import Input from '../../atoms/Input/Input'
import InputLabel from '../../atoms/InputLabel/InputLabel'
import { FormInputProps } from './formInput.interface'

/**
 * FormInput component
 *
 * Input component with label and edit button
 *
 * @param {string} label - Input label
 * @returns {ReactElement} - FormInput component
 */
export default function FormInput({ label }: FormInputProps) {
  const id = useId()

  return (
    <Input
      id={id}
      before={<InputLabel htmlFor={id}>{label}</InputLabel>}
      after={<Icon name="pen" color={'var(--white-color)'} size={16} />}
    />
  )
}
