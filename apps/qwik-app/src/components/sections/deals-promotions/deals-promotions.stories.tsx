import type { Meta, StoryObj } from 'storybook-framework-qwik'
import DealsPromotions from './index'

const meta: Meta<typeof DealsPromotions> = {
  title: 'Sections/DealsPromotions',
  component: DealsPromotions,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof DealsPromotions>

export const Default: Story = {
  args: {
    products: [
      {
        id: '1',
        name: 'Gaming Laptop',
        image: {
          mobile: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=280&h=280&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=320&h=320&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=380&h=380&fit=crop',
          alt: 'Gaming Laptop'
        },
        price: 1065.9
      },
      {
        id: '2',
        name: 'Video Game Console',
        image: {
          mobile: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=280&h=280&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=320&h=320&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=380&h=380&fit=crop',
          alt: 'Video Game Console'
        },
        price: 350,
        originalPrice: 500,
        discountPercentage: 30
      },
      {
        id: '3',
        name: 'Digital Camera for Content Creator',
        image: {
          mobile: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=280&h=280&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=320&h=320&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=380&h=380&fit=crop',
          alt: 'Digital Camera for Content Creator'
        },
        price: 2080
      },
      {
        id: '4',
        name: 'Mini Bluetooth Speaker',
        image: {
          mobile: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=280&h=280&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=320&h=320&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=380&h=380&fit=crop',
          alt: 'Mini Bluetooth Speaker'
        },
        price: 21.6,
        originalPrice: 50,
        discountPercentage: 57
      },
      {
        id: '5',
        name: 'Wireless Controller for Video Game',
        image: {
          mobile: 'https://images.unsplash.com/photo-1585857188971-9d3552c9e169?w=280&h=280&fit=crop',
          tablet: 'https://images.unsplash.com/photo-1585857188971-9d3552c9e169?w=320&h=320&fit=crop',
          desktop: 'https://images.unsplash.com/photo-1585857188971-9d3552c9e169?w=380&h=380&fit=crop',
          alt: 'Wireless Controller for Video Game'
        },
        price: 62.78
      }
    ]
  }
}
