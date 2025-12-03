import { component$, Slot, useSignal, useContextProvider, useContext, createContextId, $, type Signal, type QRL } from '@builder.io/qwik'
import { tv, type VariantProps } from 'tailwind-variants/lite'

interface InputContextState {
  isFocused: Signal<boolean>
  onFocus: QRL<() => void>
  onBlur: QRL<() => void>
}

const InputContext = createContextId<InputContextState>('input-context')

const wrapperVariants = tv({
  base: 'flex items-center rounded-lg transition-all',
  variants: {
    focused: {
      true: 'border-2 border-[#2563EB]',
      false: 'border border-[#E5E5E5]'
    },
    fullWidth: {
      true: 'w-full',
      false: 'w-auto'
    }
  },
  defaultVariants: {
    focused: false,
    fullWidth: false
  }
})

interface InputWrapperProps extends Omit<VariantProps<typeof wrapperVariants>, 'focused'> {
  class?: string
}

export const InputWrapper = component$<InputWrapperProps>(({ fullWidth, class: className }) => {
  const isFocused = useSignal(false)

  const contextValue: InputContextState = {
    isFocused,
    onFocus: $(() => {
      isFocused.value = true
    }),
    onBlur: $(() => {
      isFocused.value = false
    })
  }

  useContextProvider(InputContext, contextValue)

  return (
    <div
      class={wrapperVariants({
        focused: isFocused.value,
        fullWidth,
        class: className
      })}
    >
      <Slot />
    </div>
  )
})

interface InputProps {
  placeholder?: string
  class?: string
  type?: string
  value?: string
  name?: string
  id?: string
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  [key: string]: any
}

export default component$<InputProps>(({ placeholder, class: className, ...restProps }) => {
  const context = useContext(InputContext)

  return (
    <input
      type="text"
      placeholder={placeholder}
      class={`flex-1 px-4 py-3 outline-none bg-transparent text-sm ${className || ''}`}
      onFocus$={context.onFocus}
      onBlur$={context.onBlur}
      {...restProps}
    />
  )
})
