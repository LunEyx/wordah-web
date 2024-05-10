import { useContext } from 'react'
import { Flex, IconButton, Image, Text } from '@chakra-ui/react'
import { RecordContext } from '../../contexts/RecordContext'
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { ModalContext } from '../../contexts/ModalContext'
import HoneyPotIcon from '../../assets/honeyPotIcon.png'

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
          icon={<Image w="48px" h="48px" src={HoneyPotIcon} />}
          onClick={onOpen}
        />
        <Text>Word Count: {wordCount}</Text>
      </Flex>
      <Text>Longest Word: {longestWord}</Text>
    </Flex>
  )
}

export default StatusCard
