import { component$ } from '@builder.io/qwik'
import Badge from '~/components/ui/badge'
import { ResponsiveImage } from '~/components/primitives/ResponsiveImage'

interface ProductImage {
  mobile: string
  tablet: string
  desktop: string
  alt: string
}

export interface DealProduct {
  id: string
  name: string
  image: ProductImage
  price: number
  originalPrice?: number
  discountPercentage?: number
}

export interface DealsPromotionsProps {
  products: DealProduct[]
}

export default component$<DealsPromotionsProps>(({ products }) => {
  const formatPrice = (price: number) => `US$ ${price.toFixed(2).replace('.', ',')}`

  const formatDiscount = (percentage: number) => `${percentage}% OFF`

  return (
    <section class="w-full py-6 md:py-8 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
          Deals & Promotions
        </h2>

        <div class="flex overflow-x-auto gap-3 md:gap-4 scrollbar-hide lg:grid lg:grid-cols-5 lg:overflow-visible pb-2 scroll-smooth snap-x snap-mandatory">
          {products.map((product) => (
            <div
              key={product.id}
              class="flex-none w-56 md:w-64 lg:w-auto bg-white rounded-lg overflow-hidden snap-start"
            >
              <div class="relative aspect-square bg-gray-100 flex items-center justify-center p-4">
                <ResponsiveImage
                  sources={[
                    {
                      srcset: product.image.desktop,
                      media: '(min-width: 1024px)',
                    },
                    {
                      srcset: product.image.tablet,
                      media: '(min-width: 768px) and (max-width: 1023px)',
                    },
                    {
                      srcset: product.image.mobile,
                      media: '(max-width: 767px)',
                    },
                  ]}
                  src={product.image.mobile}
                  alt={product.image.alt}
                  width="280"
                  height="280"
                  class="max-w-full max-h-full object-contain"
                  pictureProps={{
                    class: "w-full h-full flex items-center justify-center"
                  }}
                />
              </div>

              <div class="p-3 md:p-4">
                <h3 class="font-medium text-gray-900 mb-1 md:mb-2 line-clamp-2 leading-tight text-sm md:text-base">
                  {product.name}
                </h3>

                <div class="flex items-baseline gap-1.5 md:gap-2 flex-wrap">
                  {product.originalPrice && (
                    <span class="text-xs md:text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                  <span class="text-base md:text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                </div>

                {product.discountPercentage && (
                  <div class="mt-2">
                    <Badge appearance="green">
                      {formatDiscount(product.discountPercentage)}
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
