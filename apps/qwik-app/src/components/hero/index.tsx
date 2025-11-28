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
    <section class="min-h-screen flex flex-col md:flex-row">
      <div class="md:hidden w-full h-64">
        <picture class="w-full h-full block">
          <source media="(max-width: 767px)" srcset={mobileBackgroundImage} />
          <img
            src={mobileBackgroundImage}
            alt="Hero product"
            width="768"
            height="512"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>

      <div class="flex-1 bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center px-6 py-12 md:py-24">
        <div class="max-w-md text-white">
          <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p class="text-lg mb-8 opacity-90 leading-relaxed">
            {subtitle}
          </p>

          <a
            href={ctaUrl}
            class="inline-flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300"
          >
            {ctaText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="stroke-current">
              <path d="M6 12L10 8L6 4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <div class="hidden md:block flex-1">
        <picture class="w-full h-full block">
          <source media="(min-width: 1024px)" srcset={desktopBackgroundImage} />
          <img
            src={desktopBackgroundImage}
            alt="Hero product"
            width="960"
            height="1080"
            class="w-full h-full object-cover"
          />
        </picture>
      </div>
    </section>
  )
})