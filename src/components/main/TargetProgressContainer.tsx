import { Box, Progress, Text } from '@chakra-ui/react'
import { useAppSelector } from '../../hooks/redux'

const TargetProgressContainer = () => {
  const target = useAppSelector((state) => state.user.target)

  return (
    <Box
      pos="relative"
      w="100%"
      border="3px solid #713d20"
      borderRadius="1.5em"
    >
      <Progress
        border="5px solid #ffbf64"
        borderRadius="1.5em"
        height="1.5em"
        value={50}
      />
      <Text pos="absolute" top="0" right="1.5em">
        / {target}
      </Text>
    </Box>
  )
}

export default TargetProgressContainer
