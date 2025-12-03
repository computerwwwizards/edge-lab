import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Header from "~/components/layout/header";
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
      <div class="pt-[72px]">
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
                mobile: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300&h=300&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
                alt: 'Wireless Controller for Video Game'
              },
              title: 'Wireless Controller for Video Game',
              price: 'US$ 60',
              backgroundColor: '#8B5CF6'
            },
            {
              id: '2',
              image: {
                mobile: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
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
                mobile: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=200&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=300&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=400&fit=crop',
                alt: 'Mirrorless Camera with FE 28-70mm'
              },
              title: 'Mirrorless Camera with FE 28-70mm',
              price: 'US$ 1.050',
              backgroundColor: '#FB923C'
            },
            {
              id: '4',
              image: {
                mobile: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop',
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
        <DealsPromotions
          products={[
            {
              id: '1',
              name: 'Gaming Laptop',
              image: {
                mobile: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=380&h=380&fit=crop',
                alt: 'Gaming Laptop'
              },
              price: 1065.9
            },
            {
              id: '2',
              name: 'Video Game Console',
              image: {
                mobile: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=380&h=380&fit=crop',
                alt: 'Video Game Console'
              },
              price: 350,
              originalPrice: 500,
              discountPercentage: 30
            },
            {
              id: '3',
              name: 'Digital Camera for Content Creator',
              image: {
                mobile: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=380&h=380&fit=crop',
                alt: 'Digital Camera for Content Creator'
              },
              price: 2080
            },
            {
              id: '4',
              name: 'Mini Bluetooth Speaker',
              image: {
                mobile: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=380&h=380&fit=crop',
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
                mobile: 'https://images.unsplash.com/photo-1585857188971-9d3552c9e169?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1585857188971-9d3552c9e169?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1585857188971-9d3552c9e169?w=380&h=380&fit=crop',
                alt: 'Wireless Controller for Video Game'
              },
              price: 62.78
            }
          ]}
        />
        <JustArrived
          products={[
            {
              image: {
                mobile: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=380&h=380&fit=crop',
                alt: 'Headphone'
              },
              title: 'Headphone',
              price: 'US$ 136,62',
              originalPrice: 'US$ 200',
              discount: '32% OFF'
            },
            {
              image: {
                mobile: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=280&h=280&fit=crop',
                tablet: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=320&h=320&fit=crop',
                desktop: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=380&h=380&fit=crop',
                alt: 'Mirrorless Camera with FE 24-120mm'
              },
              title: 'Mirrorless Camera with FE 24-120mm',
              price: 'US$ 960',
              originalPrice: 'US$ 978',
              discount: '2% OFF'
            }
          ]}
        />
        <Newsletter />
        <Promotion
          title="Receive our news and promotions in advance. Enjoy and get 10% off your first purchase."
          description=""
          buttonText="Check it out"
          buttonUrl="/promotions"
        />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Building the Future - Modern Web Platform",
  meta: [
    {
      name: "description",
      content: "Modern web applications built with Qwik and Tailwind CSS for optimal performance",
    },
  ],
};
