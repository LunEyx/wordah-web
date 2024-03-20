import { Input } from '@chakra-ui/react'

interface AnswerInputProps {
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onSubmit?: () => void
}

const AnswerInput = (props: AnswerInputProps) => {
  const { value, onChange, onSubmit } = props

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && onSubmit) {
      onSubmit()
    }
  }

  return <Input value={value} onChange={onChange} onKeyDown={handleKeyDown} />
}

export default AnswerInput
