import { component$ } from '@builder.io/qwik'
import Badge from '../../ui/badge'
import { ResponsiveImage } from '../../primitives/ResponsiveImage'

export default component$(() => {
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

  const cameraData = {
    image: {
      mobile: 'https://images.unsplash.com/photo-1606933248010-ef1f0eb0484b?w=280&h=280&fit=crop',
      tablet: 'https://images.unsplash.com/photo-1606933248010-ef1f0eb0484b?w=320&h=320&fit=crop',
      desktop: 'https://images.unsplash.com/photo-1606933248010-ef1f0eb0484b?w=380&h=380&fit=crop',
      alt: 'Mirrorless Camera with FE 24-120mm'
    },
    title: 'Mirrorless Camera with FE 24-120mm',
    price: 'US$ 960',
    discount: '2% OFF'
  }

  return (
    <section class="px-4 py-8 md:px-6 lg:px-8 lg:py-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 lg:text-3xl lg:mb-8">
        Just Arrived
      </h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-6xl">
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

        <div class="w-full max-w-sm">
          <ResponsiveImage
            sources={[
              {
                srcset: cameraData.image.desktop,
                media: '(min-width: 1024px)',
              },
              {
                srcset: cameraData.image.tablet,
                media: '(min-width: 768px) and (max-width: 1023px)',
              },
              {
                srcset: cameraData.image.mobile,
                media: '(max-width: 767px)',
              },
            ]}
            src={cameraData.image.mobile}
            alt={cameraData.image.alt}
            width="280"
            height="280"
            class="w-full h-auto"
          />

          <div class="pt-3 md:pt-4 md:flex md:items-start md:justify-between">
            <div>
              <h3 class="font-medium text-gray-900 mb-1 text-base">
                {cameraData.title}
              </h3>

              <div class="text-lg font-bold text-gray-900 mb-2 md:mb-0">
                {cameraData.price}
              </div>
            </div>

            <Badge appearance="green" class="md:ml-4">
              {cameraData.discount}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
})
