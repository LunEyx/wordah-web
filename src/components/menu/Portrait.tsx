import { Box, Image } from '@chakra-ui/react'
import { useAppSelector } from '../../hooks/redux'
import { portraitBorderImages, portraitImages } from '../../constants/portrait'

const Portrait = () => {
  const portraitBorderIndex = useAppSelector(
    (state) => state.user.portraitBorderIndex,
  )
  const portraitIndex = useAppSelector((state) => state.user.portraitIndex)

  return (
    <Box pos="relative">
      <Image src={portraitImages[portraitIndex]} />
      <Image
        pos="absolute"
        top="0"
        left="0"
        src={portraitBorderImages[portraitBorderIndex]}
      />
    </Box>
  )
}

export default Portrait
