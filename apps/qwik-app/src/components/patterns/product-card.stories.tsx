import type { Meta, StoryObj } from 'storybook-framework-qwik'
import ProductCard from './index'

const meta: Meta<typeof ProductCard> = {
  title: 'Patterns/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof ProductCard>

const productData = {
  image: {
    mobile: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=280&h=280&fit=crop',
    tablet: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=320&h=320&fit=crop',
    desktop: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=380&h=380&fit=crop',
    alt: 'Headphone'
  },
  title: 'Headphone',
  price: 'US$ 136,62',
  originalPrice: 'US$ 200',
  discount: '32% OFF'
}

export const Compact: Story = {
  args: productData,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Expanded: Story = {
  args: productData,
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
}

export const Responsive: Story = {
  args: productData,
}
