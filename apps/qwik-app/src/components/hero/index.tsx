import { component$ } from '@builder.io/qwik'

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
    <section class="w-full min-h-screen flex flex-col lg:flex-row">
      <div class="w-full lg:w-1/2 bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 flex items-center justify-start px-8 py-16 lg:py-24 lg:px-16 order-2 lg:order-1">
        <div class="w-full max-w-lg text-white">
          <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p class="text-lg lg:text-xl mb-10 text-white/90 leading-relaxed">
            {subtitle}
          </p>

          <a
            href={ctaUrl}
            class="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {ctaText}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="ml-1">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div class="w-full lg:w-1/2 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 order-1 lg:order-2">
        <picture class="block w-full h-full">
          <source media="(max-width: 767px)" srcset={mobileBackgroundImage} />
          <source media="(min-width: 768px)" srcset={desktopBackgroundImage} />
          <img
            src={desktopBackgroundImage}
            alt="Hero product"
            width="658"
            height="484"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  )
})