# Benefits Component

## Overview
Create a reusable benefits section component that matches the responsive designs shown in the reference images:
- Mobile designs: [mobile-1.png](./mobile-1.png), [mobile-2.png](./mobile-2.png), [mobile-3.png](./mobile-3.png)
- Desktop design: [desktop.png](./desktop.png)
- **CRITICAL**: Divider design reference: [divider-between-benefits.png](./divider-between-benefits.png)

## Requirements

### Visual Design
- Implement responsive layout matching both mobile and desktop designs
- Mobile: Horizontal scroll layout (not swiper) showing benefit cards
- Desktop: Grid or flex layout displaying all benefits at once
- **ESSENTIAL**: Include visual dividers/separators between benefit items as shown in [divider-between-benefits.png](./divider-between-benefits.png)
- **CRITICAL**: The divider design is a core visual element and must not be omitted
- Use mobile-first approach with breakpoint-specific adaptations
- Use Tailwind CSS utility classes only

### Component Structure
- Create as `src/components/benefits/index.tsx`
- Export interface `BenefitsProps` with typed properties
- Component should accept: benefits array with title, description, icon/image for each benefit

### Functionality  
- Display benefits in horizontal scrollable container on mobile
- Display benefits in static grid/flex layout on desktop
- Each benefit card should contain icon, title, and description
- **MANDATORY**: Implement visual dividers between benefit items exactly as shown in divider reference image
- Dividers should be responsive and adapt to mobile/desktop layouts appropriately
- Smooth horizontal scrolling behavior on mobile devices

### Technical Standards
- Follow [constitution](../../constitution.md) rules strictly
- Component must be resumable (Qwik-compliant)
- Use TypeScript with explicit types
- No inline comments, use descriptive naming

### Documentation
- Create a Storybook story at `src/components/benefits/benefits.stories.tsx`
- Story should demonstrate component usage with realistic benefit data
- Show component with multiple benefit items to test scrolling behavior