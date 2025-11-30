import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Benefits from "~/components/benefits";
import MostWanted from "~/components/most-wanted";
import JustArrived from "~/components/sections/just-arrived";
import Promotion from "~/components/promotion";

export default component$(() => {
  return (
    <>
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
              mobile: 'https://images.unsplash.com/photo-1606933248010-ef1f0eb0484b?w=280&h=280&fit=crop',
              tablet: 'https://images.unsplash.com/photo-1606933248010-ef1f0eb0484b?w=320&h=320&fit=crop',
              desktop: 'https://images.unsplash.com/photo-1606933248010-ef1f0eb0484b?w=380&h=380&fit=crop',
              alt: 'Mirrorless Camera with FE 24-120mm'
            },
            title: 'Mirrorless Camera with FE 24-120mm',
            price: 'US$ 960',
            discount: '2% OFF'
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
