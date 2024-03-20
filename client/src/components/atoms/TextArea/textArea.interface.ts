// TextArea props interface
export interface TextAreaProps {
  label: string
  rows?: number
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}
