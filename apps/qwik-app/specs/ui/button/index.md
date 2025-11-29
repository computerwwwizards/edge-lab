# Button Component Specification

## Overview
Create a reusable Button component that supports three distinct visual variants as shown in the reference images. The component must use `tailwind-variants/lite` for type-safe variant management and follow all constitution rules.

## Required Variants

### Primary Appearance
- Blue background
- White text
- Rounded full corners
- Hover and focus states

### Secondary Appearance  
- White background with blue border
- Blue text color
- Rounded full corners
- Hover states with appropriate feedback

## Technical Requirements

### Component Structure
- Use `export default component$(() => {})` pattern
- Implement with TypeScript strict mode
- Create variants using `tv()` from `tailwind-variants/lite`
- Support responsive design (mobile-first approach)

### Props Interface
```typescript
interface ButtonProps extends Omit<JSX.IntrinsicElements['button'], 'children'> {
  appearance?: 'primary' | 'secondary'
  fullWidth?: boolean
  children: string
  as?: 'button' | 'a'
}
```

### Default Values
- `appearance`: `'primary'`
- `fullWidth`: `false`
- `as`: `'button'`

### Variant Definitions
- Use `tv()` function to define base styles and variant-specific overrides
- Include `fullWidth` variant for width control (`w-full` vs `w-auto`)
- Implement hover, focus, and disabled states for all variants
- Ensure accessibility with proper contrast ratios
- Include smooth transitions for interactive states
- Support polymorphic rendering (button or anchor element)

### File Structure
- Component: `src/components/ui/button/index.tsx`
- Story: `src/components/ui/button/button.stories.tsx`

## Acceptance Criteria
- [ ] Component supports primary and secondary appearance variants
- [ ] Supports fullWidth prop (default: false) for width control
- [ ] Default appearance is primary
- [ ] Polymorphic component supports button and anchor elements
- [ ] Accepts all native button/anchor props via prop spreading
- [ ] Proper TypeScript typing with strict mode
- [ ] Responsive design works on all screen sizes  
- [ ] Accessible with keyboard navigation
- [ ] Single Storybook story demonstrating usage
- [ ] No comments in code (self-documenting)
- [ ] Uses tailwind-variants/lite for variant management 