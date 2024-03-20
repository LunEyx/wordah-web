import { Card, CardBody, CardHeader, Flex } from '@chakra-ui/react'
import { useRecordContext } from '../../contexts/RecordContext'
import RecordTag from '../recordRegion/RecordTag'

const RecentWordCard = () => {
  const { recentWords, removeRecord } = useRecordContext()
  return (
    <Card>
      <CardHeader>Recently Added Words</CardHeader>
      <CardBody>
        <Flex gap={2} wrap="wrap">
          {recentWords.map((word) => (
            <RecordTag
              key={word}
              word={word}
              closable
              onClose={() => removeRecord(word)}
            />
          ))}
        </Flex>
      </CardBody>
    </Card>
  )
}

export default RecentWordCard
