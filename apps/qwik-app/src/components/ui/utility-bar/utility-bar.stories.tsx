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
  render: () => (
    <UtilityBar />
  ),
}
