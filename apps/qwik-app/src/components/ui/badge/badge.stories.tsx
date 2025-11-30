import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Badge from './index'

const meta: Meta<typeof Badge> = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['pink', 'green']
    }
  }
}

export default meta
type Story = StoryObj<typeof Badge>

export const PinkBadge: Story = {
  args: {
    appearance: 'pink',
  },
  render: (args) => (
    <Badge {...args}>
      51% OFF
    </Badge>
  ),
}

export const GreenBadge: Story = {
  args: {
    appearance: 'green',
  },
  render: (args) => (
    <Badge {...args}>
      10% OFF
    </Badge>
  ),
}
