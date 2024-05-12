import { useContext, useRef, useState } from 'react'
import { Box, Image } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import AnswerInput from './AnswerInput'
import { DialogueContext } from '../../contexts/DialogueContext'
import { CHECK_RECORD_RESULTS } from '../../constants/record'
import { DialogueReason } from '../../types/dialogue'
import ChatBubbleImg from '../../assets/chatBubble02.png'
import { useAppDispatch } from '../../hooks/redux'
import { setState } from '../../features/wordah/wordahSlice'
import { WordahActionState } from '../../types/wordah'

const InputCard = () => {
  const { generateDialogue } = useContext(DialogueContext)
  const { addRecord, checkRecord } = useContext(RecordContext)
  const dispatch = useAppDispatch()
  const [answer, setAnswer] = useState('')
  const eatingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSubmit = () => {
    const checkRecordResult = checkRecord(answer)

    if (checkRecordResult === CHECK_RECORD_RESULTS.NEW) {
      addRecord(answer)
      setAnswer('')
      dispatch(setState(WordahActionState.EATING))
      if (eatingTimeoutRef.current) {
        clearTimeout(eatingTimeoutRef.current)
      }
      eatingTimeoutRef.current = setTimeout(() => {
        dispatch(setState(WordahActionState.IDLE))
      }, 1000)
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
    <Box pos="relative" w={{ base: '100%', md: '75%', lg: '60%', xl: '50%' }}>
      <Image src={ChatBubbleImg} />
      <Box
        pos="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <AnswerInput
          value={answer}
          onChange={(e) =>
            setAnswer(e.target.value.toLowerCase().replace(/[^a-z]/g, ''))
          }
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  )
}

export default InputCard
