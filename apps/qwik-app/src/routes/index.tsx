import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Benefits from "~/components/benefits";
import MostWanted from "~/components/most-wanted";
import Promotion from "~/components/promotion";

export default component$(() => {
  return (
    <>
      <Hero
        title="New Products Available"
        subtitle="At FastStore you can shop the best tech of 2023. Enjoy and get 10% off on your first purchase!"
        mobileBackgroundImage="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=768&h=512&fit=crop"
        desktopBackgroundImage="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=960&h=1080&fit=crop"
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
            image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=200&h=200&fit=crop',
            title: 'Wireless Controller for Video Game',
            price: 'US$ 60',
            backgroundColor: '#8B5CF6'
          },
          {
            id: '2',
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=200&h=200&fit=crop',
            title: 'Bluetooth Speaker',
            price: 'US$ 22',
            originalPrice: 'US$ 45',
            discount: '51% OFF',
            backgroundColor: '#FDE68A'
          },
          {
            id: '3',
            image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200&h=200&fit=crop',
            title: 'Mirrorless Camera with FE 28-70mm',
            price: 'US$ 1.050',
            backgroundColor: '#FB923C'
          },
          {
            id: '4',
            image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop',
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
