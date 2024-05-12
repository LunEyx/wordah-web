import { Flex, Heading, Image } from '@chakra-ui/react'
import { wordah } from '../../../constants/wordah'
import { setWordahCloth } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

const WordahClothSettings = () => {
  const dispatch = useAppDispatch()
  const wordahClothIndex = useAppSelector(
    (state) => state.user.wordahClothIndex,
  )

  return (
    <>
      <Heading size="sm">Wordah Cloth Settings</Heading>
      <Flex flexWrap="wrap">
        {wordah.cloth.map((image, index) => (
          <Image
            key={index}
            src={image}
            w="150px"
            m="10px"
            border={wordahClothIndex === index ? '4px solid #ffd485' : 'none'}
            onClick={() => dispatch(setWordahCloth(index))}
          />
        ))}
      </Flex>
    </>
  )
}

export default WordahClothSettings
