import { Box, Image } from '@chakra-ui/react'
import WoahImg from '../../assets/woah.jpg'

const CharacterContainer = () => {
  return (
    <Box w="300px" h="200px" backgroundColor="lightblue">
      <Image src={WoahImg} />
    </Box>
  )
}

export default CharacterContainer
