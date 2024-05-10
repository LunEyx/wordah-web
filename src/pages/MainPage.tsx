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
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      bg={`url(${BackgroundImg})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Flex w="100%" h="80%" p={4}>
        <Flex as="nav" w="250px" minW="250px">
          <SideMenu />
        </Flex>
        <Flex flex={1} justify="center">
          <Flex flexDir="column" maxW="1200px" p={4}>
            <Box as="header">
              <ProgressContainer />
            </Box>

            <Flex
              flexDir="column"
              align="center"
              justify="center"
              rowGap={4}
              w="100%"
              flex={1}
              py={4}
            >
              <CharacterContainer />
              <DialogueProvider>
                <DialogueContainer />
                <InputCard />
              </DialogueProvider>
            </Flex>
          </Flex>
        </Flex>

        <Box as="aside" w="250px" minW="250px">
          <StatusCard />
        </Box>
      </Flex>

      <Box as="footer" w="100%" h="20%">
        <RecentWordCard />
      </Box>

      <Box position="fixed" bottom="0" right="0" p={4}>
        v1.0.1
      </Box>

      <AchievementModal />
      <WordRecordModal />
    </Flex>
  )
}

export default MainPage
