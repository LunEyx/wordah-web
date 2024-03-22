import { StoryObj, Meta } from '@storybook/react'
import PopupAchievementButton from './PopupAchievementButton'

const meta = {
  title: 'Achievement/PopupAchievement',
  component: PopupAchievementButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopupAchievementButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'First Time User',
    description: 'The first time you play the game!',
  },
}
