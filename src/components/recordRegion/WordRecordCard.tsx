import { useContext } from 'react'
import {
  Card,
  CardBody,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
} from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import RecordTag from './RecordTag'

const RecordCard = () => {
  const { words, removeRecord } = useContext(RecordContext)

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
                  {words.sort().map((word) => (
                    <RecordTag
                      key={word}
                      word={word}
                      closable
                      onClose={() => removeRecord(word)}
                    />
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
