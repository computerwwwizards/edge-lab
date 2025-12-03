import { component$ } from '@builder.io/qwik'
import Badge from '~/components/ui/badge'
import { ResponsiveImage } from '~/components/primitives/ResponsiveImage'

export interface Product {
  id: string
  image: {
    mobile: string
    tablet?: string
    desktop?: string
    alt: string
  }
  title: string
  price: string
  originalPrice?: string
  discount?: string
  backgroundColor: string
}

export interface MostWantedProps {
  title: string
  products: Product[]
}

export default component$<MostWantedProps>(({ title, products }) => {
  return (
    <section class="w-full py-6 md:py-8 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          {title}
        </h2>

        <div class="flex overflow-x-auto gap-3 md:gap-4 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible pb-2">
          {products.map((product) => (
            <div
              key={product.id}
              class="flex-none w-64 md:w-auto bg-white rounded-lg overflow-hidden"
            >
              <div
                class="relative h-44 md:h-48 flex items-center justify-center p-4 md:p-6"
                style={{ backgroundColor: product.backgroundColor }}
              >
                <ResponsiveImage
                  sources={[
                    {
                      srcset: product.image.desktop || product.image.tablet || product.image.mobile,
                      media: '(min-width: 1024px)',
                    },
                    {
                      srcset: product.image.tablet || product.image.mobile,
                      media: '(min-width: 768px) and (max-width: 1023px)',
                    },
                    {
                      srcset: product.image.mobile,
                      media: '(max-width: 767px)',
                    },
                  ]}
                  src={product.image.mobile}
                  alt={product.image.alt}
                  width="180"
                  height="180"
                  class="w-full h-full object-cover"
                  pictureProps={{
                    class: "w-full h-full"
                  }}
                />
              </div>

              <div class="p-3 md:p-4">
                <h3 class="font-medium text-gray-900 mb-1 md:mb-2 line-clamp-2 leading-tight text-sm md:text-base">
                  {product.title}
                </h3>

                <div class="flex items-baseline gap-1.5 md:gap-2 flex-wrap">
                  {product.originalPrice && (
                    <span class="text-xs md:text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                  <span class="text-base md:text-lg font-bold text-gray-900">
                    {product.price}
                  </span>
                </div>

                {product.discount && (
                  <div class="mt-2">
                    <Badge appearance="pink">
                      {product.discount}
                    </Badge>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})