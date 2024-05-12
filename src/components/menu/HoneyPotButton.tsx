import { Image } from '@chakra-ui/react'
import HoneyPotIcon from '../../assets/icons/honeyPot.png'
import MenuButton from './MenuButton'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'

const PromptButton = () => {
  const {
    wordRecord: { onOpen },
  } = useContext(ModalContext)

  return (
    <MenuButton
      minW="64px"
      minH="64px"
      aria-label="shop"
      icon={<Image src={HoneyPotIcon} w="64px" />}
      onClick={onOpen}
    />
  )
}

export default PromptButton
