import { component$ } from '@builder.io/qwik'

export interface Benefit {
  icon: string
  title: string
  description: string
}

export interface BenefitsProps {
  benefits: Benefit[]
}

export default component$<BenefitsProps>(({ benefits }) => {
  return (
    <section class="w-full py-6 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="flex overflow-x-auto gap-0 scrollbar-hide md:grid md:grid-cols-5 md:gap-0 md:overflow-visible">
          {benefits.map((benefit, index) => (
            <div
              key={`benefit-${index}`}
              class="flex-none w-56 flex items-center justify-center gap-3 px-4 py-4 md:w-auto md:flex-1 md:flex-col md:items-center md:text-center md:px-6 md:py-6 relative"
            >
              <div class="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 md:mb-3 shrink-0">
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  width="32"
                  height="32"
                  class="w-8 h-8 md:w-12 md:h-12 object-contain"
                />
              </div>

              <div class="flex-1 md:flex-none">
                <h3 class="font-medium text-gray-900 mb-1 text-sm md:text-base leading-tight">
                  {benefit.title}
                </h3>

                <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {index < benefits.length - 1 && (
                <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-8 md:h-12 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})