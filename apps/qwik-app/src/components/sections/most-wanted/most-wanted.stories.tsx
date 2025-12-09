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
         mobile: '/iwantend/ps4controllerwhite.webp',
         tablet: '/iwantend/ps4controllerwhite.webp',
         desktop: '/iwantend/ps4controllerwhite.webp',
          alt: 'Wireless Controller for Video Game'
        },
        title: 'Wireless Controller for Video Game',
        price: 'US$ 60',
      },
      {
        id: '2',
        image: {
        mobile: '/iwantend/jblpro.webp',
        tablet: '/iwantend/jblpro.webp',
        desktop: '/iwantend/jblpro.webp',
          alt: 'Bluetooth Speaker'
        },
        title: 'Bluetooth Speaker',
        price: 'US$ 22',
        originalPrice: 'US$ 45',
        discount: '51% OFF',
      },
      {
        id: '3',
        image: {
          mobile: '/iwantend/canonpro.webp',
          tablet: '/iwantend/canonpro.webp',
          desktop: '/iwantend/canonpro.webp',
          alt: 'Mirrorless Camera with FE 28-70mm'
        },
        title: 'Mirrorless Camera with FE 28-70mm',
        price: 'US$ 1.050',
      },
      {
        id: '4',
        image: {
          mobile: '/iwantend/keyboard.webp',
          tablet: '/iwantend/keyboard.webp',
          desktop: '/iwantend/keyboard.webp',
          alt: 'Mechanical Keyboard'
        },
        title: 'Mechanical Keyboard',
        price: 'US$ 90',
        originalPrice: 'US$ 100',
        discount: '10% OFF',
      },
      // {
      //   id: '5',
      //   image: {
      //     mobile: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=180&h=180&fit=crop',
      //     tablet: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=220&h=220&fit=crop',
      //     desktop: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=280&h=280&fit=crop',
      //     alt: 'Gaming Laptop'
      //   },
      //   title: 'Gaming Laptop',
      //   price: 'US$ 1.299',
      //   originalPrice: 'US$ 1.499',
      //   discount: '15% OFF',
      //   backgroundColor: '#1F2937'
      // }
    ]
  }
}