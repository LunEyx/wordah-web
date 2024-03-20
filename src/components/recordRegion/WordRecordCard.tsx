import {
  Card,
  CardBody,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
} from '@chakra-ui/react'
import { useRecordContext } from '../../contexts/RecordContext'

const RecordCard = () => {
  const { words, removeRecord } = useRecordContext()

  const wordsByLength: { [key: number]: string[] } = {}

  for (const word of words) {
    const length = word.length
    if (wordsByLength[length]) {
      wordsByLength[length].push(word)
    } else {
      wordsByLength[length] = [word]
    }
  }

  return (
    <Card>
      <CardBody>
        <Accordion
          allowMultiple
          defaultIndex={Array.from(
            Array(Object.keys(wordsByLength).length).keys(),
          )}
        >
          {Object.entries(wordsByLength).map(([length, words]) => (
            <AccordionItem key={length}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {length} letter{parseInt(length) > 1 && 's'}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                <Flex gap={2} wrap="wrap">
                  {words.map((word) => (
                    <Tag key={word}>
                      <TagLabel>{word}</TagLabel>
                      <TagCloseButton onClick={() => removeRecord(word)} />
                    </Tag>
                  ))}
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </CardBody>
    </Card>
  )
}

export default RecordCard
