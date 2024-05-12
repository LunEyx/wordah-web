import { Box, Flex } from '@chakra-ui/react'

interface VerticalProgressProps {
  value: number
}

const VerticalProgress = (props: VerticalProgressProps) => {
  const { value } = props

  return (
    <Box
      pos="relative"
      h="100%"
      border="3px solid #713d20"
      borderRadius="1.5em"
    >
      <Flex
        w="1.5em"
        h="100%"
        bgColor="white"
        border="5px solid #ffbf64"
        borderRadius="100px"
        align="end"
      >
        <Box
          w="100%"
          h={`${value}%`}
          bgColor="#ffd687"
          borderRadius="100px"
        ></Box>
      </Flex>
    </Box>
  )
}

export default VerticalProgress
