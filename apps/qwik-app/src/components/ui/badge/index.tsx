import { component$, Slot } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const badgeVariants = tv({
  base: 'inline-flex items-center justify-center rounded-[16px] px-2 py-0.5 text-center font-semibold text-xs',
  variants: {
    appearance: {
      pink: 'bg-[#fde8e8] text-[#c0152e]',
      green: 'bg-[#d1fae5] text-[#065f46]'
    }
  }
})

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
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
