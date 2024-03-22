import { Card, CardBody, CardHeader } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface AchievementCardProps {
  title: ReactNode
  description: ReactNode
  isCompleted: boolean
}

const AchievementCard = (props: AchievementCardProps) => {
  const { title, description, isCompleted } = props

  const opacity = isCompleted ? '1' : '0.4'

  return (
    <Card>
      <CardHeader opacity={opacity}>{title}</CardHeader>
      <CardBody opacity={opacity}>{description}</CardBody>
    </Card>
  )
}

export default AchievementCard
