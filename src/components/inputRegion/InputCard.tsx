import { useContext, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import AnswerInput from './AnswerInput'
import { DialogueContext } from '../../contexts/DialogueContext'
import { CHECK_RECORD_RESULTS } from '../../constants/record'
import { DialogueReason } from '../../types/dialogue'

const InputCard = () => {
  const { generateDialogue } = useContext(DialogueContext)
  const { addRecord, checkRecord } = useContext(RecordContext)
  const [answer, setAnswer] = useState('')

  const handleSubmit = () => {
    const checkRecordResult = checkRecord(answer)

    if (checkRecordResult === CHECK_RECORD_RESULTS.NEW) {
      addRecord(answer)
      setAnswer('')
    }

    let reason = DialogueReason.NEW_WORD
    if (checkRecordResult === CHECK_RECORD_RESULTS.KNOWN) {
      reason = DialogueReason.KNOWN_WORD
    } else if (checkRecordResult === CHECK_RECORD_RESULTS.UNKNOWN) {
      reason = DialogueReason.UNKNOWN_WORD
    }

    generateDialogue(answer, reason)
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
