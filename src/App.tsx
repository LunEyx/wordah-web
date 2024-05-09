import { useContext } from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'
import InputCard from './components/inputRegion/InputCard'
import RecentWordCard from './components/recentRegion/RecentWordCard'
import StatusCard from './components/statusRegion/StatusCard'
import { RecordContext } from './contexts/RecordContext'
import AchievementModal from './components/modals/AchievementModal'
import SideMenu from './components/menu/SideMenu'
import CharacterContainer from './components/character/CharacterContainer'
import DialogueContainer from './components/character/DialogueContainer'
import { DialogueProvider } from './contexts/DialogueContext'
import WordRecordModal from './components/recordRegion/WordRecordModal'

function App() {
  const { isLoading } = useContext(RecordContext)
  return (
    !isLoading && (
      <>
        <Box position="absolute" top="0" left="0" p={4}>
          <SideMenu />
        </Box>
        <Box position="absolute" top="0" right="0" p={4}>
          <StatusCard />
        </Box>

        <Container maxW="container.lg" mt={16}>
          <Flex
            flexDir="column"
            align="center"
            justify="center"
            rowGap={4}
            w="100%"
          >
            <CharacterContainer />
            <DialogueProvider>
              <DialogueContainer />
              <InputCard />
            </DialogueProvider>
            <Box w="100%">
              <RecentWordCard />
            </Box>
          </Flex>
          <Box position="absolute" bottom="0" right="0" p={4}>
            v1.0.1
          </Box>
        </Container>

        <AchievementModal />
        <WordRecordModal />
      </>
    )
  )
}

export default App
