import { Image } from '@chakra-ui/react'
import SettingsIcon from '../../assets/icons/settings.png'
import MenuButton from './MenuButton'

const SettingsButton = () => {
  return (
    <MenuButton
      aria-label="settings"
      icon={<Image src={SettingsIcon} w="64px" />}
    />
  )
}

export default SettingsButton
