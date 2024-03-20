import type { StoryObj, Meta } from '@storybook/react'
import { fn } from '@storybook/test'

import AnswerInput from '../../components/inputRegion/AnswerInput'

const meta = {
  title: 'VocabTest/InputRegion/AnswerInput',
  component: AnswerInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<typeof AnswerInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
