import { useContext } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'

const StatusCard = () => {
  const { wordCount, longestWord } = useContext(RecordContext)

  return (
    <Flex flexDir="column" align="end">
      <Text>Word Count: {wordCount}</Text>
      <Text>Longest Word: {longestWord}</Text>
    </Flex>
  )
}

export default StatusCard
