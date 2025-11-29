# Hero Component

## Overview
Create a reusable hero component that matches the responsive designs shown in the reference images:
- Mobile design: [mobile.png](./mobile.png)
- Desktop design: [desktop.png](./desktop.png)

## Requirements

### Visual Design
- Implement responsive layout matching both mobile and desktop designs
- Use mobile-first approach with breakpoint-specific adaptations
- Ensure seamless experience across all device sizes
- Use Tailwind CSS utility classes only

### Component Structure
- Create as `src/components/hero/index.tsx`
- Export interface `HeroProps` with typed properties
- Component should accept: title, subtitle, mobileBackgroundImage, desktopBackgroundImage, ctaText, ctaUrl
- Import and use Button component from `../ui/button` for call-to-action functionality

### Functionality  
- Display hero content with customizable text and responsive backgrounds
- Show mobile background on small screens, desktop background on larger screens
- Include call-to-action using the Button component from `src/components/ui/button`
- Implement proper image optimization and responsive behavior
- Use Button component with appropriate appearance variant for the hero CTA

### Technical Standards
- Follow [constitution](../../constitution.md) rules strictly
- Component must be resumable (Qwik-compliant)
- Use TypeScript with explicit types
- No inline comments, use descriptive naming

### Documentation
- Create a Storybook story at `src/components/hero/hero.stories.tsx`
- Story should demonstrate component usage with realistic content
- Include different variants showcasing mobile and desktop backgrounds
- Show component with various title lengths and CTA text examples