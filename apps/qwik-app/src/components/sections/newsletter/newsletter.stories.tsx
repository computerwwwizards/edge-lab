import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Newsletter from './index'

const meta: Meta<typeof Newsletter> = {
  title: 'Sections/Newsletter',
  component: Newsletter,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Newsletter>

export const Default: Story = {}
