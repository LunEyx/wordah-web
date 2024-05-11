import { useContext } from 'react'
import { Image } from '@chakra-ui/react'
import { AchievementContext } from '../../contexts/AchievementContext'
import AchievementIcon from '../../assets/icons/achievement.png'
import MenuButton from './MenuButton'

const AchievementButton = () => {
  const { onOpen } = useContext(AchievementContext)

  return (
    <MenuButton
      aria-label="achievement"
      icon={<Image src={AchievementIcon} w="64px" />}
      onClick={onOpen}
    />
  )
}

export default AchievementButton
