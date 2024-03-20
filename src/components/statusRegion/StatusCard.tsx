import { Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { useRecordContext } from '../../contexts/RecordContext'

const StatusCard = () => {
  const { wordCount, longestWord } = useRecordContext()

  return (
    <Card>
      <CardBody>
        <Flex justify="space-between">
          <Text>Word Count: {wordCount}</Text>
          <Text>Longest Word: {longestWord}</Text>
        </Flex>
      </CardBody>
    </Card>
  )
}

export default StatusCard
