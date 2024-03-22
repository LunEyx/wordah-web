import { StoryObj, Meta } from '@storybook/react'
import AchievementCard from '../../components/achievement/AchievementCard'

const meta = {
  title: 'Achievement/AchievementCard',
  component: AchievementCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AchievementCard>

export default meta

type Story = StoryObj<typeof meta>

export const Completed: Story = {
  args: {
    title: 'First Time User',
    description: 'The first time you play the game!',
    isCompleted: true,
  },
}

export const Incomplete: Story = {
  args: {
    title: 'First Time User',
    description: 'The first time you play the game!',
    isCompleted: false,
  },
}
