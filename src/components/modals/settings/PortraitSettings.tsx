import { Flex, Heading, Image } from '@chakra-ui/react'
import { portraitImages } from '../../../constants/portrait'
import { setPortrait } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

const PortraitSettings = () => {
  const dispatch = useAppDispatch()
  const portraitIndex = useAppSelector((state) => state.user.portraitIndex)

  return (
    <>
      <Heading size="sm">Portrait Settings</Heading>
      <Flex flexWrap="wrap">
        {portraitImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            w="150px"
            m="10px"
            border={portraitIndex === index ? '4px solid #ffd485' : 'none'}
            onClick={() => dispatch(setPortrait(index))}
          />
        ))}
      </Flex>
    </>
  )
}

export default PortraitSettings
