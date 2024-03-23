import { StoryObj, Meta } from '@storybook/react'
import SideMenu from '../../components/menu/SideMenu'

const meta = {
  title: 'VocabTest/Menu/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SideMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
