import { Flex, Heading, Image } from '@chakra-ui/react'
import { portraitBorderImages } from '../../../constants/portrait'
import { setPortraitBorder } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

const PortraitBorderSettings = () => {
  const dispatch = useAppDispatch()
  const portraitBorderIndex = useAppSelector(
    (state) => state.user.portraitBorderIndex,
  )

  return (
    <>
      <Heading size="sm">PortraitBorder Settings</Heading>
      <Flex flexWrap="wrap">
        {portraitBorderImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            w="150px"
            m="10px"
            border={
              portraitBorderIndex === index ? '4px solid #ffd485' : 'none'
            }
            onClick={() => dispatch(setPortraitBorder(index))}
          />
        ))}
      </Flex>
    </>
  )
}

export default PortraitBorderSettings
