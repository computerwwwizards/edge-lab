import { component$ } from '@builder.io/qwik'

export interface SecuredShieldProps {
  width?: number
  height?: number
  strokeWidth?: number
  class?: string
}

export default component$<SecuredShieldProps>(({
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
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4"/>
    </svg>
  )
})