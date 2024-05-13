import { useAppSelector } from '../../hooks/redux'
import { Box, Image } from '@chakra-ui/react'
import { WordahActionState } from '../../types/wordah'
import { wordah } from '../../constants/wordah'

const CharacterContainer = () => {
  const wordahState = useAppSelector((state) => state.wordah.state)
  const wordahClothIndex = useAppSelector(
    (state) => state.user.wordahClothIndex,
  )
  const wordahAccessaryIndex = useAppSelector(
    (state) => state.user.wordahAccessaryIndex,
  )
  const isEating = wordahState === WordahActionState.EATING
  const isRubbishSet = wordahClothIndex === 4

  return (
    <Box w="100%" pos="relative">
      <Image top="0" left="0" w="100%" src={wordah.head[0]} />
      <Image
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        src={wordah.eye[isEating ? 1 : isRubbishSet ? 3 : 0]}
      />
      <Image
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        src={wordah.mouth[isEating ? 2 : isRubbishSet ? 4 : 0]}
      />
      <Image
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        src={wordah.honey[isEating ? 1 : 0]}
      />
      <Image pos="absolute" top="0" left="0" w="100%" src={wordah.body[0]} />
      <Image
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        src={wordah.cloth[wordahClothIndex]}
      />
      <Image
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        src={wordah.accessary[wordahAccessaryIndex]}
      />
      <Image
        pos="absolute"
        top="0"
        left="0"
        w="100%"
        src={wordah.hand[isEating ? 1 : 0]}
      />
    </Box>
  )
}

export default CharacterContainer
