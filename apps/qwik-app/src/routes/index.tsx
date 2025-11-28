import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/hero";

export default component$(() => {
  return (
    <Hero
      title="Building the Future"
      subtitle="Modern web applications with Qwik and Tailwind CSS"
      mobileBackgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=768&h=1024&fit=crop"
      desktopBackgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
      ctaText="Explore Features"
      ctaUrl="#features"
    />
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
