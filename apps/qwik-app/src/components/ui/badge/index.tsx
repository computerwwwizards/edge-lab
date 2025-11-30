import { component$, Slot } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const badgeVariants = tv({
  base: 'inline-flex items-center justify-center rounded-[16px] px-4 py-2 text-center font-medium text-sm',
  variants: {
    appearance: {
      pink: 'bg-[#FFC0CB] text-gray-900',
      green: 'bg-[#90EE90] text-gray-900'
    }
  }
})

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  appearance: 'pink' | 'green'
  [key: string]: any
}

export default component$<BadgeProps>(({
  appearance,
  class: className,
  ...restProps
}: Readonly<BadgeProps>) => {
  return (
    <span
      class={badgeVariants({
        appearance,
        class: className
      })}
      {...restProps}
    >
      <Slot />
    </span>
  )
})
