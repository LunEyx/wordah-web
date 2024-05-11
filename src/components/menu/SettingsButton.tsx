import { IconButton, Image } from '@chakra-ui/react'
import SettingsIcon from '../../assets/icons/settings.png'

const SettingsButton = () => {
  return (
    <IconButton
      aria-label="settings"
      icon={<Image src={SettingsIcon} w="48px" />}
    />
  )
}

export default SettingsButton
