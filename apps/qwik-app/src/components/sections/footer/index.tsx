import { component$ } from '@builder.io/qwik'
import Delivery from '~/components/ui/delivery'
import Calendar from '~/components/ui/calendar'
import SecuredShield from '~/components/ui/secured-shield'
import Market from '~/components/ui/market'
import Facebook from '~/components/ui/facebook'
import Instagram from '~/components/ui/instagram'
import Pinterest from '~/components/ui/pinterest'
import XTwitter from '~/components/ui/x-twitter'

export interface FooterProps {
  companyName?: string
  description?: string
}

export default component$<FooterProps>(({ 
  companyName = "Brandless",
  description = "This website uses VTEX technology. In-store price may vary. Prices and offers are subject to change. 2023 Brandless Store. All rights reserved. Store is a trademark of Store and its affiliated companies. Mount St, 000, New York / NY - 00000."
}) => {
  return (
    <footer class="w-full bg-white">
      <div class="border-b border-gray-200 py-8">
        <div class="max-w-7xl mx-auto px-8">
          <div class="grid grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center">
            <div class="flex flex-col items-center text-center">
              <Delivery width={32} height={32} class="mb-2 text-gray-700" />
              <span class="text-sm font-medium text-gray-700">Free</span>
              <span class="text-sm text-gray-700">Shipping</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <Calendar width={32} height={32} class="mb-2 text-gray-700" />
              <span class="text-sm font-medium text-gray-700">Free</span>
              <span class="text-sm text-gray-700">Return</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <Market width={32} height={32} class="mb-2 text-gray-700" />
              <span class="text-sm font-medium text-gray-700">Pickup</span>
              <span class="text-sm text-gray-700">Options</span>
            </div>
            <div class="flex flex-col items-center text-center">
              <SecuredShield width={32} height={32} class="mb-2 text-gray-700" />
              <span class="text-sm font-medium text-gray-700">Trusted</span>
              <span class="text-sm text-gray-700">by Safecon</span>
            </div>
          </div>
        </div>
      </div>

      <div class="py-12">
        <div class="max-w-7xl mx-auto px-8">
          <div class="hidden xl:grid xl:grid-cols-5 xl:gap-8">
            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Our company</h4>
              <ul class="space-y-3">
                <li><a href="/about" class="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="/blog" class="text-sm text-gray-600 hover:text-gray-900">Our Blog</a></li>
                <li><a href="/stores" class="text-sm text-gray-600 hover:text-gray-900">Stores</a></li>
                <li><a href="/work" class="text-sm text-gray-600 hover:text-gray-900">Work With Us</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Orders and Purchases</h4>
              <ul class="space-y-3">
                <li><a href="/returns" class="text-sm text-gray-600 hover:text-gray-900">Returns and Exchanges</a></li>
                <li><a href="/recall" class="text-sm text-gray-600 hover:text-gray-900">Product Recall</a></li>
                <li><a href="/gift-cards" class="text-sm text-gray-600 hover:text-gray-900">Gift Cards</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Support & Services</h4>
              <ul class="space-y-3">
                <li><a href="/support" class="text-sm text-gray-600 hover:text-gray-900">Support Center</a></li>
                <li><a href="/services" class="text-sm text-gray-600 hover:text-gray-900">Support & Services</a></li>
                <li><a href="/contact" class="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Partnerships</h4>
              <ul class="space-y-3">
                <li><a href="/affiliate" class="text-sm text-gray-600 hover:text-gray-900">Affiliate Program</a></li>
                <li><a href="/marketplace" class="text-sm text-gray-600 hover:text-gray-900">Marketplace</a></li>
              </ul>
            </div>

            <div>
              <h4 class="text-sm font-semibold text-gray-900 mb-6">Follow Us</h4>
              <div class="flex gap-4 mb-8">
                <a href="#" aria-label="Facebook" class="text-gray-600 hover:text-gray-900">
                  <Facebook width={24} height={24} />
                </a>
                <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-gray-900">
                  <Instagram width={24} height={24} />
                </a>
                <a href="#" aria-label="Pinterest" class="text-gray-600 hover:text-gray-900">
                  <Pinterest width={24} height={24} />
                </a>
                <a href="#" aria-label="Twitter" class="text-gray-600 hover:text-gray-900">
                  <XTwitter width={24} height={24} />
                </a>
              </div>
              
              <div>
                <h5 class="text-sm font-semibold text-gray-900 mb-4">Payment Methods</h5>
                <div class="flex gap-2 flex-wrap">
                  <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png" alt="Elo Card" class="w-full h-full object-contain" />
                  </div>
                  
                  <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" alt="Visa" class="w-full h-full object-contain" />
                  </div>
                  
                  <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="w-full h-full object-contain" />
                  </div>
                  
                  <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                    <img src="https://cdn.worldvectorlogo.com/logos/google-pay-2.svg" alt="Google Pay" class="w-full h-full object-contain" />
                  </div>
                  
                  <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                    <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" class="w-full h-full object-contain" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="xl:hidden space-y-4">
            <details class="group">
              <summary class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer">
                <h4 class="text-sm font-semibold text-gray-900">Our company</h4>
                <svg class="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul class="space-y-3 py-4">
                <li><a href="/about" class="text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
                <li><a href="/blog" class="text-sm text-gray-600 hover:text-gray-900">Our Blog</a></li>
                <li><a href="/stores" class="text-sm text-gray-600 hover:text-gray-900">Stores</a></li>
                <li><a href="/work" class="text-sm text-gray-600 hover:text-gray-900">Work With Us</a></li>
              </ul>
            </details>

            <details class="group">
              <summary class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer">
                <h4 class="text-sm font-semibold text-gray-900">Orders and Purchases</h4>
                <svg class="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul class="space-y-3 py-4">
                <li><a href="/returns" class="text-sm text-gray-600 hover:text-gray-900">Returns and Exchanges</a></li>
                <li><a href="/recall" class="text-sm text-gray-600 hover:text-gray-900">Product Recall</a></li>
                <li><a href="/gift-cards" class="text-sm text-gray-600 hover:text-gray-900">Gift Cards</a></li>
              </ul>
            </details>

            <details class="group open">
              <summary class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer">
                <h4 class="text-sm font-semibold text-gray-900">Support & Services</h4>
                <svg class="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul class="space-y-3 py-4">
                <li><a href="/support" class="text-sm text-gray-600 hover:text-gray-900">Support Center</a></li>
                <li><a href="/services" class="text-sm text-gray-600 hover:text-gray-900">Support & Services</a></li>
                <li><a href="/contact" class="text-sm text-gray-600 hover:text-gray-900">Contact Us</a></li>
              </ul>
            </details>

            <details class="group">
              <summary class="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer">
                <h4 class="text-sm font-semibold text-gray-900">Partnerships</h4>
                <svg class="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <ul class="space-y-3 py-4">
                <li><a href="/affiliate" class="text-sm text-gray-600 hover:text-gray-900">Affiliate Program</a></li>
                <li><a href="/marketplace" class="text-sm text-gray-600 hover:text-gray-900">Marketplace</a></li>
              </ul>
            </details>

            <div class="py-4">
              <h4 class="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
              <div class="flex gap-4 justify-center mb-8">
                <a href="#" aria-label="Facebook" class="text-gray-600 hover:text-gray-900">
                  <Facebook width={32} height={32} />
                </a>
                <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-gray-900">
                  <Instagram width={32} height={32} />
                </a>
                <a href="#" aria-label="Pinterest" class="text-gray-600 hover:text-gray-900">
                  <Pinterest width={32} height={32} />
                </a>
                <a href="#" aria-label="Twitter" class="text-gray-600 hover:text-gray-900">
                  <XTwitter width={32} height={32} />
                </a>
              </div>
            </div>
          </div>

          <div class="border-t border-gray-200 pt-8 mt-8">
            <div class="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6">
              <div class="flex flex-col xl:flex-row xl:items-center gap-6">
                <h3 class="text-xl font-bold text-gray-900">{companyName}</h3>
                <div class="xl:hidden">
                  <h5 class="text-sm font-semibold text-gray-900 mb-4">Payment Methods</h5>
                  <div class="flex gap-2 flex-wrap">
                    <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Elo_card_association_logo_-_black_text.svg/1200px-Elo_card_association_logo_-_black_text.svg.png" alt="Elo Card" class="w-full h-full object-contain" />
                    </div>
                    
                    <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png" alt="Visa" class="w-full h-full object-contain" />
                    </div>
                    
                    <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="w-full h-full object-contain" />
                    </div>
                    
                    <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                      <img src="https://cdn.worldvectorlogo.com/logos/google-pay-2.svg" alt="Google Pay" class="w-full h-full object-contain" />
                    </div>
                    
                    <div class="w-10 h-6 bg-white border border-gray-200 rounded flex items-center justify-center p-1">
                      <img src="https://cdn.worldvectorlogo.com/logos/paypal-3.svg" alt="PayPal" class="w-full h-full object-contain" />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            <p class="text-xs text-gray-500 mt-6 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
})