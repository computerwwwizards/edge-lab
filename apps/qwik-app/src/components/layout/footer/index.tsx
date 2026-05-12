import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <footer class="bg-[#f1f2f3] text-[#171a1c]">
      <div class="max-w-[1320px] mx-[auto] px-4 pt-10 pb-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">

          <div>
            <h3 class="font-semibold text-[#171a1c] mb-4 text-sm">Our company</h3>
            <ul class="space-y-2 list-none p-0 m-0">
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">About Us</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Our Blog</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Stores</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Work With Us</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-[#171a1c] mb-4 text-sm">Orders and Purchases</h3>
            <ul class="space-y-2 list-none p-0 m-0">
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Returns and Exchanges</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Product Recall</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-[#171a1c] mb-4 text-sm">Support & Services</h3>
            <ul class="space-y-2 list-none p-0 m-0">
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Support Center</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Support & Services</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-[#171a1c] mb-4 text-sm">Partnerships</h3>
            <ul class="space-y-2 list-none p-0 m-0">
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Affiliate Program</a></li>
              <li><a href="#" class="text-gray-500 hover:text-[#171a1c] text-sm transition-colors">Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold text-[#171a1c] mb-4 text-sm">Follow Us</h3>
            <div class="flex items-center gap-3 mb-6">
              <a href="#" class="text-gray-500 hover:text-[#171a1c] transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-[#171a1c] transition-colors" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-[#171a1c] transition-colors" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-[#171a1c] transition-colors" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.97A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon fill="#f1f2f3" points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02"/>
                </svg>
              </a>
            </div>

            <h3 class="font-semibold text-[#171a1c] mb-3 text-sm">Payment Methods</h3>
            <ul class="space-y-1 list-none p-0 m-0">
              {['Diners Club', 'Visa', 'Mastercard', 'Elo Card', 'PayPal', 'GooglePay', 'Apple Pay'].map(p => (
                <li key={p} class="text-gray-500 text-xs">{p}</li>
              ))}
            </ul>
          </div>

        </div>

        <div class="border-t border-[#e5e7eb] pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p class="text-gray-400 text-xs leading-relaxed max-w-xl">
            This website uses VTEX technology. In-store price may vary. Prices and offers are subject to change.
            2023 Brandless Store. All rights reserved. Store is a trademark of Store and its affiliated companies.
            Mount St, 000, New York / NY - 00000.
          </p>
          <a href="#" class="text-xl font-bold text-[#171a1c] shrink-0">Brandless</a>
        </div>
      </div>
    </footer>
  )
})
