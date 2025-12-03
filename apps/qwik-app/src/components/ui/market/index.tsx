import { component$ } from '@builder.io/qwik'

export interface MarketProps {
  width?: number
  height?: number
  strokeWidth?: number
  class?: string
}

export default component$<MarketProps>(({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 9l3-6h14l3 6v2a3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 01-3 3 3 3 0 01-3-3V9z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 11v9h14v-9"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20v-6h4v6"/>
    </svg>
  )
})