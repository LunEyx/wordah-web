import { Flex, Heading, Image } from '@chakra-ui/react'
import { backgroundImages } from '../../../constants/background'
import { setBackground } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

const BackgroundSettings = () => {
  const dispatch = useAppDispatch()
  const backgroundIndex = useAppSelector((state) => state.user.backgroundIndex)

  return (
    <>
      <Heading size="sm">Background Settings</Heading>
      <Flex flexWrap="wrap">
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            w="150px"
            m="10px"
            border={backgroundIndex === index ? '4px solid #ffd485' : 'none'}
            onClick={() => dispatch(setBackground(index))}
          />
        ))}
      </Flex>
    </>
  )
}

export default BackgroundSettings
