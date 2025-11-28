import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Chip from './index'

const meta: Meta<typeof Chip> = {
  title: 'UI/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    variant: 'warning',
    text: '51% OFF',
    size: 'sm'
  }
}