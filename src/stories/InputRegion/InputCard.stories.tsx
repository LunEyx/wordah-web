import type { StoryObj, Meta } from '@storybook/react'
import InputCard from '../../components/inputRegion/InputCard'

const meta = {
  title: 'VocabTest/InputRegion/InputCard',
  component: InputCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof InputCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
