import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Button from './index'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    appearance: 'primary',
    fullWidth: false,
  },
  render: (args) => (
    <Button {...args}>
      Check it out
    </Button>
  ),
}

export const WithRightIcon: Story = {
  args: {
    appearance: 'primary',
    fullWidth: false,
  },
  render: (args) => (
    <Button {...args}>
      <span class="flex items-center gap-2">
        See all
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
    </Button>
  ),
}

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    fullWidth: false,
  },
  render: (args) => (
    <Button {...args}>
      Subscribe
    </Button>
  ),
}

export const FullWidth: Story = {
  args: {
    appearance: 'primary',
    fullWidth: true,
  },
  render: (args) => (
    <div class="w-80">
      <Button {...args}>
        Full Width Button
      </Button>
    </div>
  ),
}