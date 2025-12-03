import { component$ } from '@builder.io/qwik'

export interface XTwitterProps {
  width?: number
  height?: number
  strokeWidth?: number
  class?: string
}

export default component$<XTwitterProps>(({
  width = 24,
  height = 24,
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
      class={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  )
})