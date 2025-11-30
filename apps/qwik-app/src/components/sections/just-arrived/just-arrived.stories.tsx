import type { Meta, StoryObj } from 'storybook-framework-qwik'
import JustArrived from './index'

const meta: Meta = {
  title: 'Sections/JustArrived',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  render: () => <JustArrived />,
}
