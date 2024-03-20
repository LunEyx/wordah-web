import type { StoryObj, Meta } from '@storybook/react'
import { fn } from '@storybook/test'

import RecordTag from '../../components/recordRegion/RecordTag'

const meta = {
  title: 'VocabTest/RecordRegion/RecordTag',
  component: RecordTag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: { word: { control: 'text' } },
  args: { onClose: fn() },
} satisfies Meta<typeof RecordTag>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { word: 'test' },
}
