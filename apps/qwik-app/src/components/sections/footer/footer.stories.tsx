import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Footer from './index'

const meta: Meta<typeof Footer> = {
  title: 'Sections/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {
    companyName: 'FastStore',
    description: 'Your trusted partner for the latest tech products and innovations.',
    socialLinks: {
      facebook: 'https://facebook.com/faststore',
      twitter: 'https://twitter.com/faststore',
      instagram: 'https://instagram.com/faststore',
      linkedin: 'https://linkedin.com/company/faststore'
    },
    links: [
      {
        title: 'Products',
        items: [
          { label: 'Smartphones', href: '/products/smartphones' },
          { label: 'Laptops', href: '/products/laptops' },
          { label: 'Accessories', href: '/products/accessories' },
          { label: 'Sale', href: '/products/sale' }
        ]
      },
      {
        title: 'Support',
        items: [
          { label: 'Help Center', href: '/support' },
          { label: 'Contact Us', href: '/contact' },
          { label: 'Shipping Info', href: '/shipping' },
          { label: 'Returns', href: '/returns' }
        ]
      }
    ],
    newsletter: {
      title: 'Stay Updated',
      placeholder: 'Enter your email',
      buttonText: 'Subscribe'
    }
  },
}

export const Minimal: Story = {
  args: {
    companyName: 'FastStore',
    description: 'Your trusted partner for the latest tech products and innovations.',
  },
}

export const WithoutNewsletter: Story = {
  args: {
    companyName: 'FastStore',
    description: 'Your trusted partner for the latest tech products and innovations.',
    socialLinks: {
      facebook: 'https://facebook.com/faststore',
      twitter: 'https://twitter.com/faststore',
      instagram: 'https://instagram.com/faststore'
    },
    links: [
      {
        title: 'Products',
        items: [
          { label: 'Smartphones', href: '/products/smartphones' },
          { label: 'Laptops', href: '/products/laptops' },
          { label: 'Accessories', href: '/products/accessories' }
        ]
      }
    ]
  },
}