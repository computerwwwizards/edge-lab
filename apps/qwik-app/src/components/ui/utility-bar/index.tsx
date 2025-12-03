import { component$ } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const utilityBarVariants = tv({
  slots: {
    container: 'bg-white',
    content: '',
    locationButton: 'flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors',
    locationIcon: 'w-5 h-5',
    locationText: 'font-medium',
    separator: 'bg-gray-300',
    breadcrumbs: 'flex items-center gap-2',
    breadcrumbLink: 'text-gray-600 hover:text-gray-900 transition-colors text-sm',
    breadcrumbSeparator: 'text-gray-400 text-sm',
    chevronIcon: 'w-5 h-5'
  },
  variants: {
    layout: {
      desktop: {
        container: 'border-b border-gray-200',
        content: 'flex items-center gap-4 px-4 py-4',
        locationButton: '',
        separator: 'w-px h-4',
        breadcrumbs: 'flex',
        chevronIcon: 'hidden'
      },
      mobile: {
        container: 'rounded-lg border border-gray-200 shadow-sm',
        content: 'flex items-center justify-between px-4 py-3',
        locationButton: 'flex-1',
        separator: 'hidden',
        breadcrumbs: 'hidden',
        chevronIcon: 'block'
      }
    }
  },
  defaultVariants: {
    layout: 'desktop'
  }
})

interface UtilityBarProps extends VariantProps<typeof utilityBarVariants> {
  class?: string
}

export default component$<UtilityBarProps>(({
  layout,
  class: className
}: Readonly<UtilityBarProps>) => {
  const styles = utilityBarVariants({ layout })

  return (
    <div class={styles.container({ class: className })}>
      <div class={styles.content()}>
        <a href="#" class={styles.locationButton()}>
          <svg
            class={styles.locationIcon()}
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
          <span class={styles.locationText()}>
            {layout === 'mobile' ? 'Set your location' : 'Set Your Location'}
          </span>
        </a>

        <div class={styles.separator()} />

        <nav class={styles.breadcrumbs()}>
          <a href="#" class={styles.breadcrumbLink()}>Electronics</a>
          <span class={styles.breadcrumbSeparator()}>→</span>
          <a href="#" class={styles.breadcrumbLink()}>Headphones</a>
        </nav>

        <svg
          class={styles.chevronIcon()}
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
