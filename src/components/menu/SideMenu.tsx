import { Flex } from '@chakra-ui/react'
import AchievementButton from './AchievementButton'
import ShopButton from './ShopButton'
import SettingsButton from './SettingsButton'

const SideMenu = () => {
  return (
    <Flex flexDir="column" align="center" rowGap={2}>
      <AchievementButton />
      <ShopButton />
      <SettingsButton />
    </Flex>
  )
}

export default SideMenu
