import { useMemo } from 'react'
import { useHover } from 'react-use'
import { Image } from '@chakra-ui/react'
import PromptIcon from '../../assets/icons/prompt.png'
import AnimatedPromptIcon from '../../assets/icons/prompt.gif'
import MenuButton from './MenuButton'

const PromptButton = () => {
  const menuButton = (hovered: boolean) => (
    <MenuButton
      aria-label="shop"
      icon={<Image src={hovered ? AnimatedPromptIcon : PromptIcon} w="64px" />}
    />
  )

  const [hoverable] = useHover(menuButton)

  return <>{hoverable}</>
}

export default PromptButton
