import { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { DialogueContext } from '../../contexts/DialogueContext'

const DialogueContainer = () => {
  const { content } = useContext(DialogueContext)

  return <Box>{content}</Box>
}

export default DialogueContainer
