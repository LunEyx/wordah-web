import type { StoryObj, Meta } from '@storybook/react'
import { fn } from '@storybook/test'

import AnswerSubmitButton from '../../components/inputRegion/AnswerSubmitButton'

const meta = {
  title: 'VocabTest/InputRegion/AnswerSubmitButton',
  component: AnswerSubmitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof AnswerSubmitButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
