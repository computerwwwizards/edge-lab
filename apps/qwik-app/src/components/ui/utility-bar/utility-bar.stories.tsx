import type { Meta, StoryObj } from 'storybook-framework-qwik'
import UtilityBar from './index'

const meta: Meta<typeof UtilityBar> = {
  title: 'UI/UtilityBar',
  component: UtilityBar,
  parameters: {
    layout: 'fullwidth',
  }
}

export default meta
type Story = StoryObj<typeof UtilityBar>

export const Default: Story = {
  args: {
    layout: 'desktop',
  },
  render: (args) => (
    <UtilityBar {...args} />
  ),
}

export const Mobile: Story = {
  args: {
    layout: 'mobile',
  },
  render: (args) => (
    <div class="max-w-md">
      <UtilityBar {...args} />
    </div>
  ),
}
