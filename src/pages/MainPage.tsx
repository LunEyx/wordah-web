import { Box, Container, Flex } from '@chakra-ui/react'
import SideMenu from '../components/menu/SideMenu'
import StatusCard from '../components/statusRegion/StatusCard'
import InputCard from '../components/inputRegion/InputCard'
import RecentWordCard from '../components/recentRegion/RecentWordCard'
import CharacterContainer from '../components/character/CharacterContainer'
import DialogueContainer from '../components/character/DialogueContainer'
import AchievementModal from '../components/modals/AchievementModal'
import WordRecordModal from '../components/recordRegion/WordRecordModal'
import ProgressContainer from '../components/main/ProgressContainer'
import { DialogueProvider } from '../contexts/DialogueContext'
import BackgroundImg from '../assets/background.png'

const MainPage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg={`url(${BackgroundImg})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Box position="absolute" top="0" left="0" p={4}>
        <SideMenu />
      </Box>
      <Box position="absolute" top="0" right="0" p={4}>
        <StatusCard />
      </Box>

      <Container maxW="container.lg" pt={16}>
        <Flex
          flexDir="column"
          align="center"
          justify="center"
          rowGap={4}
          w="100%"
        >
          <ProgressContainer />
          <CharacterContainer />
          <DialogueProvider>
            <DialogueContainer />
            <InputCard />
          </DialogueProvider>
          <Box w="100%" h="20%" pos="fixed" bottom={0}>
            <RecentWordCard />
          </Box>
        </Flex>
        <Box position="absolute" bottom="0" right="0" p={4}>
          v1.0.1
        </Box>
      </Container>

      <AchievementModal />
      <WordRecordModal />
    </Box>
  )
}

export default MainPage
