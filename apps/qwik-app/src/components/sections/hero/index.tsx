import { component$ } from '@builder.io/qwik'
import Button from '~/components/ui/button'
import { ResponsiveImage } from '~/components/primitives/ResponsiveImage'

export interface HeroProps {
  title: string
  subtitle: string
  mobileBackgroundImage: string
  desktopBackgroundImage: string
  ctaText: string
  ctaUrl: string
}

export default component$<HeroProps>(({ title, subtitle, mobileBackgroundImage, desktopBackgroundImage, ctaText, ctaUrl }) => {
  return (
    <section class="w-full h-auto">
      <article class="max-w-7xl mx-auto px-4">
      <div 
      class="flex flex-col md:flex-row md:h-[480px]"
      >
        <div class="w-full md:w-1/2 bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center px-8 py-12 md:py-8 md:px-12 order-2 md:order-1">
          <div class="w-full max-w-md">
            <h1 class="text-3xl md:text-4xl  lg:text-5xl font-bold mb-4 text-white leading-tight">
              {title}
            </h1>

            <p class="text-sm md:text-base mb-6 text-white opacity-90 leading-relaxed">
              {subtitle}
            </p>

            <Button
              appearance="secondary"
              as="a"
              href={ctaUrl}
              >
              <span 
              class="flex items-center gap-2"
              >
                {ctaText}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
        <div class="w-full md:w-1/2 order-1  md:order-2 h-[250px] md:h-full overflow-hidden ">
          <ResponsiveImage
            sources={[
              { media: '(max-width: 767px)', srcset: mobileBackgroundImage },
              { media: '(min-width: 768px)', srcset: desktopBackgroundImage }
            ]}
            alt="Hero product"
            src={desktopBackgroundImage}
            width={658}
            height={484}
            pictureProps={{
              class: "w-full h-full"
            }}
            class="w-full h-full object-cover"
            />
        </div>
      </div>
      </article>
    </section>
  )
})