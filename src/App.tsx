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
import ProgressContainer from './components/main/ProgressContainer'
import { useAppSelector } from './hooks/redux'
import InitializePage from './pages/InitializePage'
import MainPage from './pages/MainPage'

function App() {
  // const { isLoading } = useContext(RecordContext)
  const isInitialized = useAppSelector((state) => state.game.isInitialized)

  return isInitialized ? <MainPage /> : <InitializePage />
}

export default App
