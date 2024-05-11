import { useContext } from 'react'
import { IconButton, Image } from '@chakra-ui/react'
import { AchievementContext } from '../../contexts/AchievementContext'
import AchievementIcon from '../../assets/icons/achievement.png'

const AchievementButton = () => {
  const { onOpen } = useContext(AchievementContext)

  return (
    <IconButton
      aria-label="achievement"
      icon={<Image src={AchievementIcon} w="48px" />}
      onClick={onOpen}
    />
  )
}

export default AchievementButton
