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
        <ul class="flex overflow-x-auto scrollbar-hide md:overflow-visible md:justify-center list-none m-0 px-10 py-10">
          {benefits.map((benefit, index) => (
            <li
              key={`benefit-${index}`}
              class={`flex-none flex items-center gap-3 pr-10 mr-10 ${index < benefits.length - 1 ? 'border-r border-[#e3e6e8]' : 'pr-0 mr-0'}`}
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
                class="w-8 h-8 shrink-0"
              />
              <div>
                <p class="text-sm text-[#171a1c] leading-tight">{benefit.title}</p>
                <p class="text-sm text-[#171a1c] leading-tight">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
