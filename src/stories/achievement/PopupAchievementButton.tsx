import { Button } from '@chakra-ui/react'
import { useAchievementToast } from '../../hooks/useAchievementToast'

interface AchievementButtonProps {
  title: string
  description: string
}

const AchievementButton = (props: AchievementButtonProps) => {
  const { title, description } = props
  const achievementToast = useAchievementToast()

  return (
    <Button onClick={() => achievementToast({ title, description })}>
      Popup Achievement
    </Button>
  )
}

export default AchievementButton
