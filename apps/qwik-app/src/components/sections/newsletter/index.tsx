import { component$ } from '@builder.io/qwik'
import Button from '~/components/ui/button'
import Input, { InputWrapper } from '~/components/ui/input'

export default component$(() => {
  return (
    <section class="w-full py-12 md:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <div class="mb-4 md:mb-6 flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 md:w-12 md:h-12"
            >
              <path
                d="M8 12C8 10.8954 8.89543 10 10 10H38C39.1046 10 40 10.8954 40 12V36C40 37.1046 39.1046 38 38 38H10C8.89543 38 8 37.1046 8 36V12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12L24 26L40 12"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
            Get News and Special Offers!
          </h2>

          <p class="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed">
            Receive our news and promotions in advance. Enjoy and get 10% off your first purchase. For more information{' '}
            <a href="#" class="text-blue-600 hover:underline">
              click here
            </a>
            .
          </p>

          <form class="space-y-4 mb-4">
            <InputWrapper fullWidth>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                class="w-full"
              />
            </InputWrapper>

            <InputWrapper fullWidth>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                class="w-full"
              />
            </InputWrapper>

            <p class="text-xs md:text-sm text-gray-600 text-center">
              By subscribing to our newsletter you agree to to our{' '}
              <a href="#" class="text-blue-600 hover:underline">
                Privacy Policy
              </a>
            </p>

            <Button
              appearance="secondary"
              fullWidth
              type="button"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
})
