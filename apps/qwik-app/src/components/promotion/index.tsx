import { component$ } from '@builder.io/qwik'
import Button from '../ui/button'

export interface PromotionProps {
  title: string
  description: string
  buttonText: string
  buttonUrl: string
  variant?: 'blue' | 'purple' | 'green'
}

export default component$<PromotionProps>(({ title, description, buttonText, buttonUrl, variant = 'blue' }) => {
  const variantClasses = {
    blue: 'bg-gradient-to-r from-blue-500 to-blue-600',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
    green: 'bg-gradient-to-r from-green-500 to-green-600'
  }

  return (
    <section class={`w-full py-12 md:py-16 lg:py-20 px-4 ${variantClasses[variant]} rounded-lg md:rounded-xl`}>
      <div class="max-w-4xl mx-auto text-center">
        <div class="mb-6 md:mb-8">
          <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
            {title}
          </h2>

          {description && (
            <p class="text-base md:text-lg text-white/95 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <Button
          as="a"
          href={buttonUrl}
          appearance="secondary"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  )
})