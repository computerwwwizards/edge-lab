import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Hero from './index'

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    title: 'New Products Available',
    subtitle: 'At FastStore you can shop the best tech of 2023. Enjoy and get 10% off on your first purchase!',
    mobileBackgroundImage: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=768&h=512&fit=crop',
    desktopBackgroundImage: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=960&h=1080&fit=crop',
    ctaText: 'See all',
    ctaUrl: '/products',
  },
}