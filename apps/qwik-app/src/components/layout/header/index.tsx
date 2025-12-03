import { component$ } from '@builder.io/qwik'
import { tv } from 'tailwind-variants/lite'
import Input, { InputWrapper } from '~/components/ui/input'

const headerVariants = tv({
  base: 'w-full border-b border-[#E5E5E5] bg-white'
})

const containerVariants = tv({
  base: 'flex items-center justify-between px-4 py-4 lg:px-8'
})

const logoVariants = tv({
  base: 'text-xl font-bold text-[#1A1A1A] lg:text-2xl'
})

const searchWrapperVariants = tv({
  base: 'hidden lg:flex lg:flex-1 lg:mx-8 lg:max-w-2xl'
})

const actionsVariants = tv({
  base: 'flex items-center gap-4 lg:gap-6'
})

const iconButtonVariants = tv({
  base: 'flex items-center justify-center p-2 text-[#1A1A1A] hover:text-[#2563EB] transition-colors'
})

const cartBadgeVariants = tv({
  base: 'absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 bg-[#2563EB] text-white text-xs font-semibold rounded-full'
})

interface HeaderProps {
  cartItemCount?: number
}

export default component$<HeaderProps>(({ cartItemCount = 0 }) => {
  return (
    <header class={headerVariants()}>
      <div class={containerVariants()}>
        <button
          class={`${iconButtonVariants()} lg:hidden`}
          aria-label="Open menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <a
          href="#"
          class={logoVariants()}
        >
          Brandless
        </a>

        <div class={searchWrapperVariants()}>
          <InputWrapper fullWidth>
            <svg
              class="w-5 h-5 ml-3 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <Input placeholder="Search products..." />
          </InputWrapper>
        </div>

        <div class={actionsVariants()}>
          <button
            class={`${iconButtonVariants()} lg:hidden`}
            aria-label="Search"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          <a
            href="#"
            class="hidden lg:flex items-center gap-2 text-sm text-[#1A1A1A] hover:text-[#2563EB] transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Sign In</span>
          </a>

          <button
            class={`${iconButtonVariants()} relative`}
            aria-label="Cart"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span class={cartBadgeVariants()}>
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
})
