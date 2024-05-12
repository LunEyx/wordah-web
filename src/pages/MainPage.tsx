import { Box, Flex } from '@chakra-ui/react'
import SideMenu from '../components/menu/SideMenu'
import InputCard from '../components/inputRegion/InputCard'
import RecentWordCard from '../components/recentRegion/RecentWordCard'
import TitleContainer from '../components/main/TitleContainer'
import DialogueContainer from '../components/character/DialogueContainer'
import AchievementModal from '../components/modals/achievement/AchievementModal'
import WordRecordModal from '../components/recordRegion/WordRecordModal'
import TargetProgressContainer from '../components/main/TargetProgressContainer'
import { DialogueProvider } from '../contexts/DialogueContext'
import SettingsModal from '../components/modals/settings/SettingsModal'
import { useAppSelector } from '../hooks/redux'
import { backgroundImages } from '../constants/background'
import LongestWordContainer from '../components/main/LongestWordContainer'
import VerticalProgress from '../components/progress/VerticalProgress'

const MainPage = () => {
  const backgroundIndex = useAppSelector((state) => state.user.backgroundIndex)

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDir="column"
      bg={`url(${backgroundImages[backgroundIndex]})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
    >
      <Flex w="100%" h="80%" p={4}>
        {/* <Show above="md"> */}
        <Flex
          as="nav"
          w={{ base: '64px', md: '64px', lg: '130px', xl: '250px' }}
          minW={{ base: '64px', md: '64px', lg: '130px' }}
        >
          <SideMenu />
        </Flex>
        {/* </Show>
        <Hide above="md">
          <Box as="nav" w="32px" minW="32px">
            <IconButton aria-label="menu" icon={<HamburgerIcon />} />
          </Box>
        </Hide> */}
        <Flex flex={1} justify="center">
          <Flex
            flexDir="column"
            minW={{ base: 'calc(100vw-200px)', md: '500px', lg: '600px' }}
            maxW="1200px"
            py={4}
            px={2}
          >
            <Box as="header" textAlign="center">
              <TargetProgressContainer />
              <LongestWordContainer />
            </Box>

            <Flex
              flexDir="column"
              align="center"
              justify="center"
              rowGap={4}
              w="100%"
              flex={1}
            >
              <TitleContainer />
              <DialogueProvider>
                <DialogueContainer />
                <InputCard />
              </DialogueProvider>
            </Flex>
          </Flex>
        </Flex>

        <Box as="aside" w="130px" minW={{ base: '130px', xs: '250px' }}>
          <Flex w="100%" h="100%" justify="end">
            <VerticalProgress value={50} />
          </Flex>
        </Box>
      </Flex>

      <Box as="footer" w="100%" h="20%">
        <RecentWordCard />
      </Box>

      <Box position="fixed" bottom="0" right="0" p={4}>
        v1.0.1
      </Box>

      <SettingsModal />
      <AchievementModal />
      <WordRecordModal />
    </Flex>
  )
}

export default MainPage
