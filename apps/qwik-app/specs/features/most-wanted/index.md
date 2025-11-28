# Most Wanted Component

## Overview
Create a reusable most wanted products section component that showcases popular items with improved mobile experience. The component should extract a reusable Chip component for status badges:
- Mobile design: [mobile.png](./mobile.png) 
- Desktop design: [desktop.png](./desktop.png)
- **Product card detail**: [product-sample.png](./product-sample.png) - Shows detailed product card structure and layout
- Chip variants: [green-chip.png](./green-chip.png), [pink-chip.png](./pink-chip.png)

## Requirements

### Visual Design
- **CRITICAL**: Improve mobile layout with horizontal scroll approach instead of cramped grid
- Mobile: Horizontal scrollable layout with proper spacing between product cards
- Desktop: Grid layout displaying products in organized rows
- Use mobile-first approach with breakpoint-specific adaptations
- Use Tailwind CSS utility classes only

### Component Structure
- Create main component as `src/components/most-wanted/index.tsx`
- Extract reusable Chip component as `src/components/ui/chip/index.tsx` (UI category for generic elements)
- Export interfaces `MostWantedProps` and `ChipProps` with typed properties
- Most wanted component should accept: products array with image, title, price, chip status for each product

### Product Card Structure
- **Reference**: [product-sample.png](./product-sample.png) shows the detailed layout of each product card
- **Image area**: Colored background container with centered product image
- **Product info**: Title, pricing (original price + current price), discount chip positioning
- **Card styling**: Clean borders, rounded corners, proper spacing as shown in sample
- **Discount chip**: Positioned in top-left corner of image area when applicable
- **Price layout**: Strike-through original price followed by current price in larger font

### Chip Component Requirements
- Create separate reusable Chip component for status badges
- Support different variants: success (green), warning (pink), info, etc.
- Accept props: variant, children/text, size (optional)
- Use semantic color mapping for different status types
- Component should be flexible for use across different sections

### Functionality
- Display products in horizontal scrollable container on mobile with generous spacing
- Display products in responsive grid layout on desktop (2-4 columns based on screen size)
- Each product card should contain exactly as shown in [product-sample.png](./product-sample.png):
  - **Product image** on colored background (different colors per product)
  - **Product title** with proper text truncation for long titles
  - **Pricing structure**: original price (strikethrough) + current price
  - **Discount chip** (when applicable) in top-left corner of image area
- Smooth horizontal scrolling behavior on mobile devices
- Proper touch/swipe interaction support
- **ESSENTIAL**: Match the exact visual structure and spacing shown in product sample image

### Technical Standards
- Follow [constitution](../../constitution.md) rules strictly
- Components must be resumable (Qwik-compliant)
- Use TypeScript with explicit types
- No inline comments, use descriptive naming
- Export both components with proper interfaces

### Documentation
- Create Storybook story for MostWanted at `src/components/most-wanted/most-wanted.stories.tsx`
- Create Storybook story for Chip at `src/components/ui/chip/chip.stories.tsx`
- Stories should demonstrate realistic product data and different chip variants
- Show horizontal scrolling behavior on mobile viewport