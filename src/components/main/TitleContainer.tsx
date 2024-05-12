import { Box, Image } from '@chakra-ui/react'
import TitleImg from '../../assets/wordah.png'

const TitleContainer = () => {
  return (
    <Box w="60%">
      <Image src={TitleImg} />
    </Box>
  )
}

export default TitleContainer
