import type { Meta, StoryObj } from 'storybook-framework-qwik'
import JustArrived, { type Product } from './index'

const meta: Meta = {
  title: 'Sections/JustArrived',
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj

const products: Product[] = [
  {
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
  },
  {
    image: {
      mobile: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=280&h=280&fit=crop',
      tablet: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=320&h=320&fit=crop',
      desktop: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=380&h=380&fit=crop',
      alt: 'Mirrorless Camera with FE 24-120mm'
    },
    title: 'Mirrorless Camera with FE 24-120mm',
    price: 'US$ 960',
    originalPrice: 'US$ 978',
    discount: '2% OFF'
  }
]

export const Default: Story = {
  render: () => <JustArrived products={products} />,
}
