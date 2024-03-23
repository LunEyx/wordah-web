import { Flex } from '@chakra-ui/react'
import DrawerMenu from './DrawerMenu'
import AchievementButton from './AchievementButton'
import ChallengeButton from './ChallengeButton'

const SideMenu = () => {
  return (
    <Flex flexDir="column" align="center" rowGap={2}>
      <DrawerMenu />
      <AchievementButton />
      <ChallengeButton />
    </Flex>
  )
}

export default SideMenu
