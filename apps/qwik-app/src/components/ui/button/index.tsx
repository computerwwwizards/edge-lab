import { component$, Slot, type JSX } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const buttonVariants = tv({
  base: 'cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    appearance: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500'
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto'
    }
  },
  defaultVariants: {
    appearance: 'primary',
    fullWidth: false
  }
})

export interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], 'children'>, VariantProps<typeof buttonVariants> {
  as?: 'button' | 'a'
}

export default component$<ButtonProps>(({
  appearance,
  fullWidth,
  as = 'button',
  class: className,
  ...restProps
}: Readonly<ButtonProps>) => {
  const Element = as as any

  return (
    <Element
      class={buttonVariants({
        appearance,
        fullWidth,
        class: className
      })}
      {...restProps}
    >
      <Slot />
    </Element>
  )
})