import { useToast } from '@chakra-ui/react'

export const useAchievementToast = () =>
  useToast({
    position: 'bottom-right',
    status: 'success',
    duration: 5000,
    isClosable: true,
  })
