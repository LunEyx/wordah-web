import {
  Card,
  CardBody,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
} from '@chakra-ui/react'
import { useRecordContext } from '../../contexts/RecordContext'

const RecordCard = () => {
  const { words, removeRecord } = useRecordContext()

  return (
    <Card>
      <CardBody>
        <Flex gap={2} wrap="wrap">
          {Array.from(words).map((word) => (
            <Tag key={word}>
              <TagLabel>{word}</TagLabel>
              <TagCloseButton onClick={() => removeRecord(word)} />
            </Tag>
          ))}
        </Flex>
      </CardBody>
    </Card>
  )
}

export default RecordCard
