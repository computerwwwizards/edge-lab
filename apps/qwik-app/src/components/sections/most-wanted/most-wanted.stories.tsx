import type { Meta, StoryObj } from 'storybook-framework-qwik'
import MostWanted from './index'

const meta: Meta<typeof MostWanted> = {
  title: 'Sections/MostWanted',
  component: MostWanted,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof MostWanted>

export const Default: Story = {
  args: {
    title: 'Most Wanted',
    products: [
      {
        id: '1',
        image: {
          mobile: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=180&h=180&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=220&h=220&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=280&h=280&fit=crop',
          alt: 'Wireless Controller for Video Game'
        },
        title: 'Wireless Controller for Video Game',
        price: 'US$ 60',
        backgroundColor: '#8B5CF6'
      },
      {
        id: '2',
        image: {
          mobile: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=180&h=180&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=220&h=220&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=280&h=280&fit=crop',
          alt: 'Bluetooth Speaker'
        },
        title: 'Bluetooth Speaker',
        price: 'US$ 22',
        originalPrice: 'US$ 45',
        discount: '51% OFF',
        backgroundColor: '#F3E8A6'
      },
      {
        id: '3',
        image: {
          mobile: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=180&h=180&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=220&h=220&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=280&h=280&fit=crop',
          alt: 'Mirrorless Camera with FE 28-70mm'
        },
        title: 'Mirrorless Camera with FE 28-70mm',
        price: 'US$ 1.050',
        backgroundColor: '#FF9500'
      },
      {
        id: '4',
        image: {
          mobile: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=180&h=180&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=220&h=220&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=280&h=280&fit=crop',
          alt: 'Mechanical Keyboard'
        },
        title: 'Mechanical Keyboard',
        price: 'US$ 90',
        originalPrice: 'US$ 100',
        discount: '10% OFF',
        backgroundColor: '#E5E7EB'
      },
      {
        id: '5',
        image: {
          mobile: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=180&h=180&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=220&h=220&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=280&h=280&fit=crop',
          alt: 'Gaming Laptop'
        },
        title: 'Gaming Laptop',
        price: 'US$ 1.299',
        originalPrice: 'US$ 1.499',
        discount: '15% OFF',
        backgroundColor: '#1F2937'
      }
    ]
  }
}