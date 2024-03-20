import { Card, CardBody, Text } from '@chakra-ui/react'
import { useRecordContext } from '../../contexts/RecordContext'

const StatusCard = () => {
  const { wordCount } = useRecordContext()

  return (
    <Card>
      <CardBody>
        <Text>Word Count: {wordCount}</Text>
      </CardBody>
    </Card>
  )
}

export default StatusCard
