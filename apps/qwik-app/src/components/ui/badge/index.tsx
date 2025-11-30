import { component$, Slot } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const badgeVariants = tv({
  base: 'inline-flex items-center justify-center rounded-[16px] px-3 py-1 text-center font-medium text-sm',
  variants: {
    appearance: {
      pink: 'bg-[#f7d1d1] text-gray-900',
      green: 'bg-[#e9fce3] text-gray-900'
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
