import { Button } from '@chakra-ui/react'

interface AnswerSubmitButtonProps {
  onClick?: () => void
}

const AnswerSubmitButton = (props: AnswerSubmitButtonProps) => {
  const { onClick } = props

  return <Button onClick={onClick}>Submit</Button>
}

export default AnswerSubmitButton
