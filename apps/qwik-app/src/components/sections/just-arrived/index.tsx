import { component$ } from '@builder.io/qwik'
import Badge from '~/components/ui/badge'
import { ResponsiveImage } from '~/components/primitives/ResponsiveImage'

interface ProductImage {
  mobile: string
  tablet: string
  desktop: string
  alt: string
}

export interface Product {
  image: ProductImage
  title: string
  price: string
  originalPrice?: string
  discount?: string
}

export interface JustArrivedProps {
  products: Product[]
}

export default component$<JustArrivedProps>(({ products }) => {
  return (
    <section class="py-8 lg:py-12">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 lg:text-3xl lg:mb-8">
          Just Arrived
        </h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 max-w-6xl">
          {products.map((product) => (
            <div key={product.title} class="w-full max-w-sm">
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
                class="w-full h-auto"
              />

              <div class="pt-3 md:pt-4 md:flex md:items-start md:justify-between">
                <div>
                  <h3 class="font-medium text-gray-900 mb-1 text-base">
                    {product.title}
                  </h3>

                  {product.originalPrice ? (
                    <div class="flex items-baseline gap-2 mb-2 md:mb-0">
                      <span class="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                      <span class="text-lg font-bold text-gray-900">
                        {product.price}
                      </span>
                    </div>
                  ) : (
                    <div class="text-lg font-bold text-gray-900 mb-2 md:mb-0">
                      {product.price}
                    </div>
                  )}
                </div>

                {product.discount && (
                  <Badge appearance="green" class="md:ml-4">
                    {product.discount}
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
