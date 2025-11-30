import type { Meta, StoryObj } from 'storybook-framework-qwik'
import { ResponsiveImage } from './ResponsiveImage'

const meta: Meta<typeof ResponsiveImage> = {
  title: 'Primitives/ResponsiveImage',
  component: ResponsiveImage,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ResponsiveImage>

export const Default: Story = {
  args: {
    sources: [
      {
        srcset: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=400&fit=crop',
        media: '(min-width: 1024px)',
      },
      {
        srcset: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=300&h=300&fit=crop',
        media: '(min-width: 768px) and (max-width: 1023px)',
      },
      {
        srcset: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=200&h=200&fit=crop',
        media: '(max-width: 767px)',
      },
    ],
    src: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=400&fit=crop',
    alt: 'Gaming laptop with RGB keyboard',
    width: 400,
    height: 400,
    class: 'rounded-lg shadow-md',
    pictureProps: {
      class: 'block'
    }
  }
}