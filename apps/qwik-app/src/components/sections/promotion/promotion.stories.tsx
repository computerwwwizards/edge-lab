import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Promotion from './index'

const meta: Meta<typeof Promotion> = {
  title: 'Sections/Promotion',
  component: Promotion,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Promotion>

export const Default: Story = {
  args: {
    title: 'Receive our news and promotions in advance. Enjoy and get 10% off your first purchase.',
    description: '',
    buttonText: 'Check it out',
    buttonUrl: '/promotions',
    variant: 'blue'
  }
}