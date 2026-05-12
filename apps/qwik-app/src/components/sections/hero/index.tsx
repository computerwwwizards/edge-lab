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
    <section class="w-full min-h-screen">
      <div class="max-w-7xl mx-auto px-4 min-h-screen flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 aspect-square lg:aspect-auto lg:min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
          <ResponsiveImage
            sources={[
              { media: '(max-width: 767px)', srcset: mobileBackgroundImage },
              { media: '(min-width: 768px)', srcset: desktopBackgroundImage }
            ]}
            alt="Hero product"
            src={desktopBackgroundImage}
            width={320}
            height={301}
            fetchPriority="high"
            loading="eager"
            pictureProps={{
              class: "w-full h-full"
            }}
            class="w-full h-full object-cover"
          />
        </div>

        <div class="w-full lg:w-1/2 lg:min-h-screen bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-start px-8 py-16 lg:py-24 lg:px-16 lg:order-first">
          <div class="w-full max-w-lg text-white">
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            <p class="text-lg lg:text-xl mb-10 text-white/90 leading-relaxed">
              {subtitle}
            </p>

            <Button
              appearance="secondary"
              as="a"
              href={ctaUrl}
            >
              <span class="flex items-center gap-2">
                {ctaText}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})