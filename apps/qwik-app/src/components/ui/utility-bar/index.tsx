import { component$ } from '@builder.io/qwik'
import { tv } from 'tailwind-variants/lite'

const utilityBarVariants = tv({
  base: 'bg-white rounded-lg border border-gray-200 shadow-sm md:rounded-none md:border-0 md:border-b md:shadow-none'
})

interface UtilityBarProps {
  class?: string
}

export default component$<UtilityBarProps>(({
  class: className
}: Readonly<UtilityBarProps>) => {
  return (
    <div class={utilityBarVariants({ class: className })}>
      <div class="flex items-center justify-between md:justify-start md:gap-4 px-4 py-3 md:py-4">
        <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors md:flex-initial flex-1">
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span class="font-medium">
            <span class="md:hidden">Set your location</span>
            <span class="hidden md:inline">Set Your Location</span>
          </span>
        </a>

        <div class="hidden md:block w-px h-4 bg-gray-300" />

        <nav class="hidden md:flex items-center gap-2">
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors text-sm">Electronics</a>
          <span class="text-gray-400 text-sm">→</span>
          <a href="#" class="text-gray-600 hover:text-gray-900 transition-colors text-sm">Headphones</a>
        </nav>

        <svg
          class="w-5 h-5 md:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  )
})
