import { component$, SVGAttributes } from '@builder.io/qwik'

export interface DeliveryProps {
  width?: number
  height?: number
  strokeWidth?: number
  class?: string
}

export default component$<DeliveryProps>(({
  width = 32,
  height = 32,
  strokeWidth = 16,
  class: className = ''
}) => {
  return (
    <svg
      data-fs-icon="true"
      data-testid="fs-icon"
      width={width}
      height={height}
      stroke-width={strokeWidth}
      data-fs-incentive-icon="true"
      class={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 3h15v13H1z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8h4l3 3v5h-3"/>
      <circle cx="5.5" cy="18.5" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <circle cx="18.5" cy="18.5" r="2.5" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 16h8"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 8h15"/>
    </svg>
  )
})