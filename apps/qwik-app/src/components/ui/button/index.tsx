import { component$, Slot } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

const buttonVariants = tv({
  base: 'cursor-pointer inline-flex items-center justify-center rounded-full px-6 py-3 font-medium text-sm transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    appearance: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-white text-blue-600 border border-gray-300'
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

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  as?: 'button' | 'a'
  [key: string]: any
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