import { Flex } from '@chakra-ui/react'
import AchievementButton from './AchievementButton'
import ShopButton from './ShopButton'
import SettingsButton from './SettingsButton'
import PromptButton from './PromptButton'
import HoneyPotButton from './HoneyPotButton'

const SideMenu = () => {
  return (
    <Flex flexDir="column" align="center" rowGap={2}>
      <SettingsButton />
      <AchievementButton />
      <ShopButton />
      <PromptButton />
      <HoneyPotButton />
    </Flex>
  )
}

export default SideMenu
