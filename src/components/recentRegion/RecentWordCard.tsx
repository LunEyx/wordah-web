import { useContext } from 'react'
import { Card, CardBody, CardHeader, Flex } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import RecordTag from '../recordRegion/RecordTag'
import BackgroundImg from '../../assets/recentWordBackground.png'

const RecentWordCard = () => {
  const { recentWords, removeRecord } = useContext(RecordContext)
  return (
    <Card
      bg={`url(${BackgroundImg})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="top"
    >
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
