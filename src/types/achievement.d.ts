import { ReactNode } from 'react'

export type Achievement = {
  id: number
  title: ReactNode
  description: ReactNode
  isCompleted: boolean
}
