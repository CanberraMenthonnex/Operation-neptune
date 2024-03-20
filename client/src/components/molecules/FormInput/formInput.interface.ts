// FormInput props interface
export interface FormInputProps {
  label: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
