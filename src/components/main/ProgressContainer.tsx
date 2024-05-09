import { Box, Progress, Text } from '@chakra-ui/react'
import { useAppSelector } from '../../hooks/redux'

const ProgressContainer = () => {
  const target = useAppSelector((state) => state.user.target)

  return (
    <Box pos="relative" w="100%">
      <Progress borderRadius="1.5rem" height="1.5rem" hasStripe value={50} />
      <Text pos="absolute" top="0" right="1.5rem">
        / {target}
      </Text>
    </Box>
  )
}

export default ProgressContainer
