import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Benefits from './index'

const meta: Meta<typeof Benefits> = {
  title: 'Components/Benefits',
  component: Benefits,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Benefits>

export const Default: Story = {
  args: {
    benefits: [
      {
        icon: 'https://api.iconify.design/mdi/truck-delivery.svg?color=%23374151',
        title: 'Buy online',
        description: 'Get Free Shipping'
      },
      {
        icon: 'https://api.iconify.design/mdi/calendar-check.svg?color=%23374151',
        title: 'Free return',
        description: '30 days to return'
      },
      {
        icon: 'https://api.iconify.design/mdi/gift.svg?color=%23374151',
        title: 'Gift cards',
        description: '$20/$30/$40'
      },
      {
        icon: 'https://api.iconify.design/mdi/store.svg?color=%23374151',
        title: 'Physical Stores',
        description: '+40 Stores in Brazil'
      },
      {
        icon: 'https://api.iconify.design/mdi/shield-check.svg?color=%23374151',
        title: 'Trusted by Safecon',
        description: 'Safety guaranteed'
      }
    ]
  }
}