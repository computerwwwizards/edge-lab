import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";
import Benefits from "~/components/benefits";

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
