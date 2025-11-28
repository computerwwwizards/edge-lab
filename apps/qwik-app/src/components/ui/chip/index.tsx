import { component$ } from '@builder.io/qwik'

export interface ChipProps {
  variant: 'success' | 'warning' | 'info' | 'error'
  text: string
  size?: 'sm' | 'md'
}

export default component$<ChipProps>(({ variant, text, size = 'sm' }) => {
  const variantClasses = {
    success: 'bg-green-500 text-white',
    warning: 'bg-pink-500 text-white',
    info: 'bg-blue-500 text-white',
    error: 'bg-red-500 text-white'
  }

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm'
  }

  return (
    <span class={`inline-flex items-center rounded-md font-semibold shadow-sm ${variantClasses[variant]} ${sizeClasses[size]}`}>
      {text}
    </span>
  )
})