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
    <section class="w-full overflow-hidden">
      <div>
        <div class="bg-[#0366dd] max-w-[1320px] mx-auto relative lg:h-[496px]">

          <div class="w-full lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full overflow-hidden">
            <ResponsiveImage
              sources={[
                { media: '(max-width: 1023px)', srcset: mobileBackgroundImage },
                { media: '(min-width: 1024px)', srcset: desktopBackgroundImage }
              ]}
              alt="Hero product"
              src={desktopBackgroundImage}
              width={660}
              height={496}
              fetchPriority="high"
              loading="eager"
              decoding="sync"
              pictureProps={{ class: "w-full h-full" }}
              class="w-full h-full object-cover"
            />
          </div>

          <div class="relative lg:w-1/2 px-8 py-10 lg:py-16 xl:py-24 text-white">
            <h1 class="text-3xl md:text-4xl lg:text-[36px] xl:text-[56px] font-bold mb-4 lg:mb-6 leading-tight">
              {title}
            </h1>
            <p class="text-sm md:text-base lg:text-[18px] xl:text-[20px] mb-8 lg:mb-10 text-white/90 leading-relaxed">
              {subtitle}
            </p>
            <Button appearance="secondary" as="a" href={ctaUrl}>
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
