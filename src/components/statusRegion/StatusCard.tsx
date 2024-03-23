import { Flex, Text } from '@chakra-ui/react'
import { useRecordContext } from '../../contexts/RecordContext'

const StatusCard = () => {
  const { wordCount, longestWord } = useRecordContext()

  return (
    <Flex flexDir="column" align="end">
      <Text>Word Count: {wordCount}</Text>
      <Text>Longest Word: {longestWord}</Text>
    </Flex>
  )
}

export default StatusCard
