import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/layout/header";
import Footer from "~/components/layout/footer";
import UtilityBar from "~/components/ui/utility-bar";
import Hero from "~/components/sections/hero";
import Benefits from "~/components/sections/benefits";
import MostWanted from "~/components/sections/most-wanted";
import DealsPromotions from "~/components/sections/deals-promotions";
import JustArrived from "~/components/sections/just-arrived";
import Newsletter from "~/components/sections/newsletter";
import Promotion from "~/components/sections/promotion";

export default component$(() => {
  return (
    <>
      <Header cartItemCount={3} />
      <div class="pt-[56px]">
        <UtilityBar />
        <Hero
          title="New Products Available"
          subtitle="At FastStore you can shop the best tech of 2023. Enjoy and get 10% off on your first purchase!"
          mobileBackgroundImage="/images/hero-mobile.webp"
          desktopBackgroundImage="/images/hero-desktop.webp"
          ctaText="See all"
          ctaUrl="/products"
        />
        <Benefits
          benefits={[
            {
              icon: 'https://api.iconify.design/mdi/truck-delivery.svg?color=%23374151',
              title: 'Buy online',
              description: 'Get Free Shipping'
            },
            {
              icon: 'https://api.iconify.design/mdi/calendar-check.svg?color=%23374151',
              title: 'Free return',
              description: '30 days to return'
            },
            {
              icon: 'https://api.iconify.design/mdi/gift.svg?color=%23374151',
              title: 'Gift cards',
              description: '$20/$30/$40'
            },
            {
              icon: 'https://api.iconify.design/mdi/store.svg?color=%23374151',
              title: 'Physical Stores',
              description: '+40 Stores in Brazil'
            },
            {
              icon: 'https://api.iconify.design/mdi/shield-check.svg?color=%23374151',
              title: 'Trusted by Safecon',
              description: 'Safety guaranteed'
            }
          ]}
        />
        <MostWanted
          title="Most Wanted"
          products={[
            {
              id: '1',
              image: {
                mobile: '/images/ps4controllerwhite.webp',
                tablet: '/images/ps4controllerwhite.webp',
                desktop: '/images/ps4controllerwhite.webp',
                alt: 'Wireless Controller for Video Game'
              },
              title: 'Wireless Controller for Video Game',
              price: 'US$ 60',
              backgroundColor: '#8B5CF6'
            },
            {
              id: '2',
              image: {
                mobile: '/images/jblpro.webp',
                tablet: '/images/jblpro.webp',
                desktop: '/images/jblpro.webp',
                alt: 'Bluetooth Speaker'
              },
              title: 'Bluetooth Speaker',
              price: 'US$ 22',
              originalPrice: 'US$ 45',
              discount: '51% OFF',
              backgroundColor: '#FDE68A'
            },
            {
              id: '3',
              image: {
                mobile: '/images/canonpro.webp',
                tablet: '/images/canonpro.webp',
                desktop: '/images/canonpro.webp',
                alt: 'Mirrorless Camera with FE 28-70mm'
              },
              title: 'Mirrorless Camera with FE 28-70mm',
              price: 'US$ 1.050',
              backgroundColor: '#FB923C'
            },
            {
              id: '4',
              image: {
                mobile: '/images/keyboard.webp',
                tablet: '/images/keyboard.webp',
                desktop: '/images/keyboard.webp',
                alt: 'Mechanical Keyboard'
              },
              title: 'Mechanical Keyboard',
              price: 'US$ 90',
              originalPrice: 'US$ 100',
              discount: '10% OFF',
              backgroundColor: '#D1D5DB'
            }
          ]}
        />
        <Promotion
          title="Receive our news and promotions in advance. Enjoy and get 10% off your first purchase."
          description=""
          buttonText="Check it out"
          buttonUrl="/promotions"
        />
        <JustArrived
          products={[
            {
              image: {
                mobile: '/images/airpods.webp',
                tablet: '/images/airpods.webp',
                desktop: '/images/airpods.webp',
                alt: 'Headphone'
              },
              title: 'Headphone',
              price: 'US$ 136,62',
              originalPrice: 'US$ 200',
              discount: '32% OFF'
            },
            {
              image: {
                mobile: '/images/fujifilm.webp',
                tablet: '/images/fujifilm.webp',
                desktop: '/images/fujifilm.webp',
                alt: 'Mirrorless Camera with FE 24-120mm'
              },
              title: 'Mirrorless Camera with FE 24-120mm',
              price: 'US$ 960',
              originalPrice: 'US$ 978',
              discount: '2% OFF'
            }
          ]}
        />
        <DealsPromotions
          products={[
            {
              id: '1',
              name: 'Gaming Laptop',
              image: {
                mobile: '/images/notebook.webp',
                tablet: '/images/notebook.webp',
                desktop: '/images/notebook.webp',
                alt: 'Gaming Laptop'
              },
              price: 1065.9
            },
            {
              id: '2',
              name: 'Video Game Console',
              image: {
                mobile: '/images/xbox.webp',
                tablet: '/images/xbox.webp',
                desktop: '/images/xbox.webp',
                alt: 'Video Game Console'
              },
              price: 350,
              originalPrice: 500,
              discountPercentage: 30
            },
            {
              id: '3',
              name: 'Digital Camera for Content Creators',
              image: {
                mobile: '/images/canong7x.webp',
                tablet: '/images/canong7x.webp',
                desktop: '/images/canong7x.webp',
                alt: 'Digital Camera for Content Creators'
              },
              price: 2080
            },
            {
              id: '4',
              name: 'Mini Bluetooth Speaker',
              image: {
                mobile: '/images/jbl.webp',
                tablet: '/images/jbl.webp',
                desktop: '/images/jbl.webp',
                alt: 'Mini Bluetooth Speaker'
              },
              price: 21.6,
              originalPrice: 50,
              discountPercentage: 57
            },
            {
              id: '5',
              name: 'Wireless Controller for Video Game',
              image: {
                mobile: '/images/ps3controllerred.webp',
                tablet: '/images/ps3controllerred.webp',
                desktop: '/images/ps3controllerred.webp',
                alt: 'Wireless Controller for Video Game'
              },
              price: 62.78
            }
          ]}
        />
        <Newsletter />
      </div>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Brandless | FastStore",
  meta: [
    {
      name: "description",
      content: "Shop the best tech at Brandless. Free shipping, easy returns, and exclusive deals.",
    },
  ],
  links: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
  ],
};
