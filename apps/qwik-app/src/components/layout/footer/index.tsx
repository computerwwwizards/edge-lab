import { component$ } from '@builder.io/qwik'

export default component$(() => {
  return (
    <footer class="bg-[#f1f2f3] text-[#171a1c]">

      <div class="max-w-[1320px] mx-auto border-b border-[#e5e7eb]">
        <ul class="flex overflow-x-auto scrollbar-hide md:overflow-visible md:justify-center list-none m-0 px-10 py-10">
          {[
            { icon: '/icons/Truck.svg', title: 'Free', sub: 'Shipping' },
            { icon: '/icons/Calendar.svg', title: 'Free', sub: 'Return' },
            { icon: '/icons/Storefront.svg', title: 'Pickup', sub: 'Options' },
            { icon: '/icons/ShieldCheck.svg', title: 'Trusted', sub: 'by Safecon' },
          ].map((b, i) => (
            <li key={i} class={`flex-none flex items-center gap-3 pr-10 mr-10 ${i < 3 ? 'border-r border-[#e3e6e8]' : 'pr-0 mr-0'}`}>
              <img src={b.icon} alt={b.title} width="32" height="32" class="w-8 h-8 shrink-0" />
              <div>
                <p class="text-sm text-[#171a1c] leading-tight">{b.title}</p>
                <p class="text-sm text-[#171a1c] leading-tight">{b.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div class="max-w-[1320px] mx-auto px-4 pt-10 pb-8">
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
              {[
                { icon: '/icons/Facebook.svg', label: 'Facebook' },
                { icon: '/icons/Instagram.svg', label: 'Instagram' },
                { icon: '/icons/Pinterest.svg', label: 'Pinterest' },
                { icon: '/icons/Twitter.svg', label: 'Twitter' },
              ].map(s => (
                <a key={s.label} href="#" class="text-gray-500 hover:text-[#171a1c] transition-colors" aria-label={s.label}>
                  <img src={s.icon} alt={s.label} width="20" height="20" class="w-5 h-5" />
                </a>
              ))}
            </div>

            <h3 class="font-semibold text-[#171a1c] mb-3 text-sm">Payment Methods</h3>
            <div class="flex flex-wrap gap-2">
              {[
                { icon: '/icons/Diners.svg', label: 'Diners Club' },
                { icon: '/icons/Visa.svg', label: 'Visa' },
                { icon: '/icons/Mastercard.svg', label: 'Mastercard' },
                { icon: '/icons/EloCard.svg', label: 'Elo Card' },
                { icon: '/icons/PayPal.svg', label: 'PayPal' },
                { icon: '/icons/GooglePay.svg', label: 'GooglePay' },
                { icon: '/icons/ApplePay.svg', label: 'Apple Pay' },
              ].map(p => (
                <img key={p.label} src={p.icon} alt={p.label} width="32" height="20" class="h-5 w-auto" title={p.label} />
              ))}
            </div>
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
