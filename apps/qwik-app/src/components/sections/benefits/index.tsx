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
    <section class="w-full bg-white">
      <div class="max-w-[1320px] mx-auto">
        <ul class="flex overflow-x-auto scrollbar-hide md:overflow-visible md:justify-center px-10 list-none m-0 p-0">
          {benefits.map((benefit, index) => (
            <li
              key={`benefit-${index}`}
              class="flex-none flex items-center gap-3 py-10 pr-10 md:flex-1 md:justify-center"
            >
              <div class="flex items-center justify-center w-8 h-8 shrink-0">
                <img
                  src={benefit.icon}
                  alt={`${benefit.title} icon`}
                  width="32"
                  height="32"
                  class="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <p class="font-semibold text-[#171a1c] text-sm leading-tight">{benefit.title}</p>
                <p class="text-gray-500 text-xs leading-tight">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
