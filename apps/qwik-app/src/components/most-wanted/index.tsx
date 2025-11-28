import { component$ } from '@builder.io/qwik'
import Chip from '../ui/chip'

export interface Product {
  id: string
  image: string
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
              class="flex-none w-64 md:w-auto bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-100"
            >
              <div
                class="relative h-44 md:h-48 flex items-center justify-center p-4 md:p-6"
                style={{ backgroundColor: product.backgroundColor }}
              >
                <picture class="w-full h-full flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    width="180"
                    height="180"
                    class="max-w-full max-h-full object-contain drop-shadow-sm"
                  />
                </picture>

                {product.discount && (
                  <div class="absolute top-2 left-2 md:top-3 md:left-3">
                    <Chip variant="warning" size="sm" text={product.discount} />
                  </div>
                )}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})