import { useContext, useState } from 'react'
import { Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import AnswerInput from './AnswerInput'
import AnswerSubmitButton from './AnswerSubmitButton'

const InputCard = () => {
  const { addRecord, checkRecord } = useContext(RecordContext)
  const [answer, setAnswer] = useState('')

  const handleSubmit = () => {
    if (checkRecord(answer)) {
      addRecord(answer)
      setAnswer('')
    }
  }

  return (
    <Card>
      <CardBody>
        <Text mb={4}>What's your word?</Text>
        <Flex gap={4}>
          <AnswerInput
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))
            }
            onSubmit={handleSubmit}
          />
          <AnswerSubmitButton onClick={handleSubmit} />
        </Flex>
      </CardBody>
    </Card>
  )
}

export default InputCard
