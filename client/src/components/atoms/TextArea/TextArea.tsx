import { useId } from 'react'

import InputLabel from '@components/atoms/InputLabel/InputLabel'

import { TextAreaProps } from './textArea.interface'
import styles from './textArea.module.scss'

/**
 * Text area component
 *
 * @description A component to display a text area
 *
 * @param {string} label - Text area label
 * @param {number} rows - Text area rows
 * @returns {ReactElement} - Text area component
 */
export default function TextArea({ label, rows = 3 }: TextAreaProps) {
  const id = useId()

  return (
    <div className={styles.textAreaContainer}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <textarea id={id} rows={rows} className={styles.textArea} />
    </div>
  )
}
