import { Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { RecordContext } from '../../contexts/RecordContext'

const LongestWordContainer = () => {
  const { longestWord } = useContext(RecordContext)

  return <Text pt={2}>Best Honey: {longestWord}</Text>
}

export default LongestWordContainer
