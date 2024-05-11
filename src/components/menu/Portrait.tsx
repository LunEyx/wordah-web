import { Box, Image } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { portraitBorderImages, portraitImages } from '../../constants/portrait'
import { toggleModal } from '../../features/modal/settingsSlice'

const Portrait = () => {
  const dispatch = useAppDispatch()
  const portraitBorderIndex = useAppSelector(
    (state) => state.user.portraitBorderIndex,
  )
  const portraitIndex = useAppSelector((state) => state.user.portraitIndex)

  return (
    <Box pos="relative" onClick={() => dispatch(toggleModal())}>
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
