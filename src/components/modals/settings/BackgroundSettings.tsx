import { Flex, Heading, Image } from '@chakra-ui/react'
import { backgroundImages } from '../../../constants/background'
import { setBackground } from '../../../features/user/userSlice'
import { useAppDispatch } from '../../../hooks/redux'

const BackgroundSettings = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Heading size="sm">Background Settings</Heading>
      <Flex>
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            w="150px"
            m="10px"
            onClick={() => dispatch(setBackground(index))}
          />
        ))}
      </Flex>
    </>
  )
}

export default BackgroundSettings
