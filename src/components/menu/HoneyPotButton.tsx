import { Image } from '@chakra-ui/react'
import HoneyPotIcon from '../../assets/icons/honeyPot.png'
import MenuButton from './MenuButton'

const PromptButton = () => {
  return (
    <MenuButton
      aria-label="shop"
      icon={<Image src={HoneyPotIcon} w="64px" />}
    />
  )
}

export default PromptButton
