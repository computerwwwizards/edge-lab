import { component$ } from '@builder.io/qwik'
import Button from '~/components/ui/button'

export interface PromotionProps {
  title: string
  description: string
  buttonText: string
  buttonUrl: string
  variant?: 'blue' | 'purple' | 'green'
}

export default component$<PromotionProps>(({ title, description, buttonText, buttonUrl, variant = 'blue' }) => {
  const variantClasses = {
    blue: 'bg-[#0366dd]',
    purple: 'bg-gradient-to-r from-purple-500 to-purple-600',
    green: 'bg-gradient-to-r from-green-500 to-green-600'
  }

  return (
    <section class="w-full overflow-hidden">
      <div class="max-w-[1320px] mx-auto">
        <div class={`${variantClasses[variant]}`}>
          <div class="px-8 md:px-[132px] py-16 text-center">
            <h2 class="text-lg md:text-[18px] lg:text-[28px] font-bold text-white leading-tight mb-2">
              {title}
            </h2>

            {description && (
              <p class="text-sm md:text-base text-white/95 leading-relaxed mb-6">
                {description}
              </p>
            )}

            <div class="mt-8 flex justify-center">
              <Button as="a" href={buttonUrl} appearance="secondary">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
