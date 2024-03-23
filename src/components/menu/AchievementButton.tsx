import { useContext } from 'react'
import { IconButton } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { AchievementContext } from '../../contexts/AchievementContext'

const AchievementButton = () => {
  const { onOpen } = useContext(AchievementContext)

  return <IconButton aria-label="menu" icon={<StarIcon />} onClick={onOpen} />
}

export default AchievementButton
