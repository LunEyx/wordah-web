import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { ACHIEVEMENTS_DATA } from '../constants/achievements'
import { Achievement } from '../types/achievement'
import { useDisclosure } from '@chakra-ui/react'
import { useAchievementToast } from '../hooks/useAchievementToast'

interface AchievementContextType {
  achievements: Achievement[]
  completeAchievement: (id: number) => void

  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

const initialState = {
  achievements: [],
  completeAchievement: () => {},

  isOpen: false,
  onOpen: () => {},
  onClose: () => {},
}

export const AchievementContext =
  createContext<AchievementContextType>(initialState)

interface AchievementProviderType {
  children: ReactNode
}

export const AchievementProvider = (props: AchievementProviderType) => {
  const { children } = props
  const [achievements, setAchievements] = useState<{
    [key: number]: Achievement
  }>({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const achievementToast = useAchievementToast()

  const completeAchievement = useCallback(
    (id: number) => {
      setAchievements((prev) => {
        prev[id].isCompleted = true

        return { ...prev }
      })

      achievementToast({
        title: ACHIEVEMENTS_DATA[id].title,
        description: ACHIEVEMENTS_DATA[id].description,
      })
    },
    [achievementToast],
  )

  useEffect(() => {
    const result: { [key: number]: Achievement } = {}
    for (const achievement of ACHIEVEMENTS_DATA) {
      result[achievement.id] = {
        ...achievement,
        isCompleted: false,
      }
    }
    setAchievements(result)
  }, [])

  useEffect(() => {
    if (achievements[1] && !achievements[1].isCompleted) {
      completeAchievement(1)
    }
  }, [achievements, completeAchievement])

  const value = {
    achievements: Object.values(achievements),
    completeAchievement,

    isOpen,
    onOpen,
    onClose,
  }

  return (
    <AchievementContext.Provider value={value}>
      {children}
    </AchievementContext.Provider>
  )
}
