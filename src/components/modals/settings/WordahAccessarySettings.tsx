import { Flex, Heading, Image } from '@chakra-ui/react'
import { wordah } from '../../../constants/wordah'
import { setWordahAccessary } from '../../../features/user/userSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

const WordahAccessarySettings = () => {
  const dispatch = useAppDispatch()
  const wordahAccessaryIndex = useAppSelector(
    (state) => state.user.wordahAccessaryIndex,
  )

  return (
    <>
      <Heading size="sm">Wordah Accessary Settings</Heading>
      <Flex flexWrap="wrap">
        {wordah.accessary.map((image, index) => (
          <Image
            key={index}
            src={image}
            w="150px"
            m="10px"
            border={
              wordahAccessaryIndex === index ? '4px solid #ffd485' : 'none'
            }
            onClick={() => dispatch(setWordahAccessary(index))}
          />
        ))}
      </Flex>
    </>
  )
}

export default WordahAccessarySettings
