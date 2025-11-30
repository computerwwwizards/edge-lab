import type { Meta, StoryObj } from 'storybook-framework-qwik'
import Badge from '../ui/badge'
import { ResponsiveImage } from '../primitives/ResponsiveImage'

const meta: Meta = {
  title: 'Patterns/ProductCard',
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj

const headphoneData = {
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

const controllerData = {
  image: {
    mobile: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=280&h=280&fit=crop',
    tablet: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=320&h=320&fit=crop',
    desktop: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=380&h=380&fit=crop',
    alt: 'Wireless Controller for Video Game'
  },
  title: 'Wireless Controller for Video Game',
  price: 'US$ 60'
}

export const Compact: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  render: () => (
    <div class="w-full max-w-sm">
      <ResponsiveImage
        sources={[
          {
            srcset: headphoneData.image.desktop,
            media: '(min-width: 1024px)',
          },
          {
            srcset: headphoneData.image.tablet,
            media: '(min-width: 768px) and (max-width: 1023px)',
          },
          {
            srcset: headphoneData.image.mobile,
            media: '(max-width: 767px)',
          },
        ]}
        src={headphoneData.image.mobile}
        alt={headphoneData.image.alt}
        width="280"
        height="280"
        class="w-full h-auto"
      />

      <div class="pt-3">
        <h3 class="font-medium text-gray-900 mb-1 text-base">
          {headphoneData.title}
        </h3>

        <div class="flex items-baseline gap-2 mb-2">
          <span class="text-sm text-gray-500 line-through">
            {headphoneData.originalPrice}
          </span>
          <span class="text-lg font-bold text-gray-900">
            {headphoneData.price}
          </span>
        </div>

        <Badge appearance="green">
          {headphoneData.discount}
        </Badge>
      </div>
    </div>
  ),
}

export const Expanded: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  render: () => (
    <div class="w-full max-w-sm">
      <ResponsiveImage
        sources={[
          {
            srcset: headphoneData.image.desktop,
            media: '(min-width: 1024px)',
          },
          {
            srcset: headphoneData.image.tablet,
            media: '(min-width: 768px) and (max-width: 1023px)',
          },
          {
            srcset: headphoneData.image.mobile,
            media: '(max-width: 767px)',
          },
        ]}
        src={headphoneData.image.mobile}
        alt={headphoneData.image.alt}
        width="380"
        height="380"
        class="w-full h-auto"
      />

      <div class="pt-4 flex items-start justify-between">
        <div>
          <h3 class="font-medium text-gray-900 mb-1 text-base">
            {headphoneData.title}
          </h3>

          <div class="flex items-baseline gap-2">
            <span class="text-sm text-gray-500 line-through">
              {headphoneData.originalPrice}
            </span>
            <span class="text-lg font-bold text-gray-900">
              {headphoneData.price}
            </span>
          </div>
        </div>

        <Badge appearance="green">
          {headphoneData.discount}
        </Badge>
      </div>
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <div class="w-full max-w-sm">
      <ResponsiveImage
        sources={[
          {
            srcset: headphoneData.image.desktop,
            media: '(min-width: 1024px)',
          },
          {
            srcset: headphoneData.image.tablet,
            media: '(min-width: 768px) and (max-width: 1023px)',
          },
          {
            srcset: headphoneData.image.mobile,
            media: '(max-width: 767px)',
          },
        ]}
        src={headphoneData.image.mobile}
        alt={headphoneData.image.alt}
        width="280"
        height="280"
        class="w-full h-auto"
      />

      <div class="pt-3 md:pt-4 md:flex md:items-start md:justify-between">
        <div>
          <h3 class="font-medium text-gray-900 mb-1 text-base">
            {headphoneData.title}
          </h3>

          <div class="flex items-baseline gap-2 mb-2 md:mb-0">
            <span class="text-sm text-gray-500 line-through">
              {headphoneData.originalPrice}
            </span>
            <span class="text-lg font-bold text-gray-900">
              {headphoneData.price}
            </span>
          </div>
        </div>

        <Badge appearance="green" class="md:ml-4">
          {headphoneData.discount}
        </Badge>
      </div>
    </div>
  ),
}

export const WithoutBadge: Story = {
  render: () => (
    <div class="w-full max-w-sm">
      <ResponsiveImage
        sources={[
          {
            srcset: controllerData.image.desktop,
            media: '(min-width: 1024px)',
          },
          {
            srcset: controllerData.image.tablet,
            media: '(min-width: 768px) and (max-width: 1023px)',
          },
          {
            srcset: controllerData.image.mobile,
            media: '(max-width: 767px)',
          },
        ]}
        src={controllerData.image.mobile}
        alt={controllerData.image.alt}
        width="280"
        height="280"
        class="w-full h-auto"
      />

      <div class="pt-3">
        <h3 class="font-medium text-gray-900 mb-1 text-base">
          {controllerData.title}
        </h3>

        <div class="text-lg font-bold text-gray-900">
          {controllerData.price}
        </div>
      </div>
    </div>
  ),
}
