import { Box, Flex, Image, Progress } from '@chakra-ui/react'
import { useAppDispatch } from '../hooks/redux'
import WordahBg from '../assets/wordah.png'
import { useEffect, useState } from 'react'
import { setInitialized } from '../features/game/gameSlice'

const InitializePage = () => {
  const dispatch = useAppDispatch()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => prev + 10)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      dispatch(setInitialized(true))
    }
  }, [progress, dispatch])

  return (
    <Flex h="100vh" py="10%" flexDir="column" justify="center" align="center">
      <Box minW={0} minH={0} flex={1}>
        <Image h="100%" src={WordahBg} alt="Wordah" />
      </Box>
      <Box w="80%">
        <Progress
          borderRadius="1.5rem"
          height="1.5rem"
          hasStripe
          value={progress}
        />
      </Box>
    </Flex>
  )
}

export default InitializePage
