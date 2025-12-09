import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Hero from './index'

const meta: Meta<typeof Hero> = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    title: 'New Products Available',
    subtitle: 'At FastStore you can shop the best tech of 2023. Enjoy and get 10% off on your first purchase!',
    mobileBackgroundImage: '/images/hero-mobile.webp',
    desktopBackgroundImage: '/images/hero-desktop.webp',
    ctaText: 'See all',
    ctaUrl: '/products',
  },
}