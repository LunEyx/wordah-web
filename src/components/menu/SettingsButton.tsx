import { Image } from '@chakra-ui/react'
import SettingsIcon from '../../assets/icons/settings.png'
import MenuButton from './MenuButton'
import { useAppDispatch } from '../../hooks/redux'
import { toggleModal } from '../../features/modal/settingsSlice'

const SettingsButton = () => {
  const dispatch = useAppDispatch()

  return (
    <MenuButton
      minH="64px"
      aria-label="settings"
      icon={<Image src={SettingsIcon} w="64px" />}
      onClick={() => dispatch(toggleModal())}
    />
  )
}

export default SettingsButton
