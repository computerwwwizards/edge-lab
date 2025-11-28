# Promotion Banner Component

## Overview
Create a reusable promotion banner component that displays marketing messages with call-to-action functionality. The component features a vibrant blue gradient background with centered content layout:
- Mobile design: [mobile.png](./mobile.png) - Shows compact mobile layout
- Desktop design: [desktop.png](./desktop.png) - Shows full desktop banner layout

## Requirements

### Visual Design
- **Background**: Blue gradient background matching reference images exactly
- **Layout**: Centered content with proper text hierarchy and spacing
- **Typography**: Large, bold headline with supporting text and prominent CTA button
- **Responsive**: Mobile-first approach with optimized layouts for different screen sizes
- Use Tailwind CSS utility classes only

### Component Structure
- Create main component as `src/components/promotion/index.tsx`
- Export interface `PromotionProps` with typed properties
- Component should accept: title, description, buttonText, buttonUrl, variant (optional for different color schemes)

### Content Layout
- **Title**: Large, bold text as primary message (white text on blue background)
- **Description**: Supporting text with clear hierarchy and readability
- **CTA Button**: Prominent white button with blue text, rounded corners
- **Spacing**: Generous padding and margins for breathing room
- **Alignment**: Centered content both horizontally and vertically

### Responsive Behavior
- **Mobile**: Compact layout with appropriate text sizes and button proportions
- **Desktop**: Expanded layout with larger text and more generous spacing
- **Text scaling**: Responsive typography that adapts to screen size
- **Button sizing**: Touch-friendly on mobile, appropriate for desktop interaction

### Visual Specifications
- **Background gradient**: Blue gradient from lighter to darker blue (match reference images)
- **Text color**: White text for maximum contrast against blue background
- **Button style**: White background with blue text, rounded corners, hover effects
- **Padding**: Generous internal spacing for comfortable content consumption
- **Border radius**: Subtle rounded corners for modern appearance

### Functionality
- **Click handling**: CTA button should accept URL for navigation
- **Hover effects**: Smooth transitions for interactive elements
- **Accessibility**: Proper contrast ratios and semantic HTML structure
- **SEO-friendly**: Proper heading hierarchy and semantic markup

### Technical Standards
- Follow [constitution](../../constitution.md) rules strictly
- Component must be resumable (Qwik-compliant)
- Use TypeScript with explicit types
- No inline comments, use descriptive naming
- Export component with proper interface

### Documentation
- Create Storybook story at `src/components/promotion/promotion.stories.tsx`
- Story should demonstrate component with realistic promotional content
- Show different viewport sizes to test responsive behavior
- Include variant examples if multiple color schemes are supported