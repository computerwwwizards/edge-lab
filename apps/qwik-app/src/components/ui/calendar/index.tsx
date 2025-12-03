import { component$ } from '@builder.io/qwik'

export interface CalendarProps {
  width?: number
  height?: number
  strokeWidth?: number
  class?: string
}

export default component$<CalendarProps>(({
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" stroke-width="1.5" fill="none"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" stroke-width="1.5"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" stroke-width="1.5"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="1.5"/>
      <line x1="8" y1="14" x2="8" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="12" y1="14" x2="12" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="16" y1="14" x2="16" y2="14" stroke="currentColor" stroke-width="2"/>
      <line x1="8" y1="18" x2="8" y2="18" stroke="currentColor" stroke-width="2"/>
      <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" stroke-width="2"/>
    </svg>
  )
})