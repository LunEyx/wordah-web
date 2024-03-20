import { Container, Flex } from '@chakra-ui/react'
import InputCard from './components/inputRegion/InputCard'
// import RecentWordCard from './components/recentRegion/RecentWordCard'
import RecordCard from './components/recordRegion/WordRecordCard'
import StatusCard from './components/statusRegion/StatusCard'
import { useRecordContext } from './contexts/RecordContext'

function App() {
  const { isLoading } = useRecordContext()
  return (
    !isLoading && (
      <Container maxW="container.lg" mt={16}>
        <Flex flexDir="column" justify="center" rowGap={4} w="100%">
          <StatusCard />
          <InputCard />
          <RecordCard />
        </Flex>
      </Container>
    )
  )
}

export default App
