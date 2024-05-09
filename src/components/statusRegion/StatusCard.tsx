import { useContext } from 'react'
import { Flex, IconButton, Text } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { ModalContext } from '../../contexts/ModalContext'

const StatusCard = () => {
  const { wordCount, longestWord } = useContext(RecordContext)
  const {
    wordRecord: { onOpen },
  } = useContext(ModalContext)

  return (
    <Flex flexDir="column" align="end">
      <Flex align="center">
        <IconButton
          variant="ghost"
          aria-label="info"
          icon={<InfoOutlineIcon />}
          onClick={onOpen}
        />
        <Text>Word Count: {wordCount}</Text>
      </Flex>
      <Text>Longest Word: {longestWord}</Text>
    </Flex>
  )
}

export default StatusCard
