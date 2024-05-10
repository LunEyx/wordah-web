import { useContext } from 'react'
import { Card, CardBody, CardHeader, Flex } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import RecordTag from '../recordRegion/RecordTag'
import BackgroundImg from '../../assets/recentWordBackground.png'

const RecentWordCard = () => {
  const { recentWords, removeRecord } = useContext(RecordContext)
  return (
    <Card
      h="100%"
      bg={`url(${BackgroundImg})`}
      bgSize="auto 100%"
      bgRepeat="repeat-x"
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
