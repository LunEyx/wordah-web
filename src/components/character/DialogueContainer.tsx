import { useContext } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import { DialogueContext } from '../../contexts/DialogueContext'
import ChatBubbleImg from '../../assets/chatBubble01.png'
import CharacterContainer from './CharacterContainer'

const DialogueContainer = () => {
  const { content } = useContext(DialogueContext)

  return (
    <Box pos="relative" w={{ base: '100%', sm: '75%', lg: '60%', xl: '50%' }}>
      <Image src={ChatBubbleImg} />
      <Text
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        p="14% 12% 6% 5.5%"
      >
        {content}
      </Text>
      <Box pos="absolute" top="-44%" left="92%" w="50%">
        <CharacterContainer />
      </Box>
    </Box>
  )
}

export default DialogueContainer
