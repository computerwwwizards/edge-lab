import { component$ } from '@builder.io/qwik'
import Badge from '../ui/badge'
import { ResponsiveImage } from '../primitives/ResponsiveImage'

export interface ProductCardProps {
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
}

export default component$<ProductCardProps>(({
  image,
  title,
  price,
  originalPrice,
  discount
}) => {
  return (
    <div class="w-full max-w-sm bg-white rounded-lg overflow-hidden shadow-sm">
      <div class="relative bg-gradient-to-br from-pink-300 via-pink-200 to-orange-300 aspect-square flex items-center justify-center p-8 md:p-12">
        {discount && (
          <div class="absolute bottom-4 left-4 md:bottom-auto md:left-auto md:top-4 md:right-4">
            <Badge appearance="green">
              {discount}
            </Badge>
          </div>
        )}
        <ResponsiveImage
          sources={[
            {
              srcset: image.desktop || image.tablet || image.mobile,
              media: '(min-width: 1024px)',
            },
            {
              srcset: image.tablet || image.mobile,
              media: '(min-width: 768px) and (max-width: 1023px)',
            },
            {
              srcset: image.mobile,
              media: '(max-width: 767px)',
            },
          ]}
          src={image.mobile}
          alt={image.alt}
          width="280"
          height="280"
          class="max-w-[70%] md:max-w-[80%] max-h-[70%] md:max-h-[80%] object-contain drop-shadow-lg"
          pictureProps={{
            class: "w-full h-full flex items-center justify-center"
          }}
        />
      </div>

      <div class="p-4 md:p-5">
        <h3 class="font-medium text-gray-900 mb-2 text-base md:text-lg">
          {title}
        </h3>

        <div class="flex items-baseline gap-2">
          {originalPrice && (
            <span class="text-sm text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
          <span class="text-lg md:text-xl font-bold text-gray-900">
            {price}
          </span>
        </div>
      </div>
    </div>
  )
})
