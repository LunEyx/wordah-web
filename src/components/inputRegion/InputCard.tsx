import { useContext, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import AnswerInput from './AnswerInput'

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
    <Flex gap={4}>
      <AnswerInput
        value={answer}
        onChange={(e) =>
          setAnswer(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))
        }
        onSubmit={handleSubmit}
      />
    </Flex>
  )
}

export default InputCard
