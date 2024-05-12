import { Box, Progress } from '@chakra-ui/react'

const HoneyEnergyProgressContainer = () => {
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
    </Box>
  )
}

export default HoneyEnergyProgressContainer
