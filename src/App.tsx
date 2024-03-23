import { Box, Container, Flex } from '@chakra-ui/react'
import InputCard from './components/inputRegion/InputCard'
import RecentWordCard from './components/recentRegion/RecentWordCard'
import RecordCard from './components/recordRegion/WordRecordCard'
import StatusCard from './components/statusRegion/StatusCard'
import { useRecordContext } from './contexts/RecordContext'
import AchievementModal from './components/modals/AchievementModal'
import SideMenu from './components/menu/SideMenu'

function App() {
  const { isLoading } = useRecordContext()
  return (
    !isLoading && (
      <>
        <Box position="absolute" top="0" right="0" p={4}>
          <StatusCard />
        </Box>
        <Container maxW="container.lg" mt={16}>
          <Flex flexDir="column" justify="center" rowGap={4} w="100%">
            <RecentWordCard />
            <InputCard />
            <RecordCard />
          </Flex>
          <Box position="absolute" bottom="0" right="0" p={4}>
            v1.0.1
          </Box>
        </Container>

        <Box position="absolute" top="0" left="0" p={4}>
          <SideMenu />
        </Box>

        <AchievementModal />
      </>
    )
  )
}

export default App
