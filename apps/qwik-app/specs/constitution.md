
## Tools

### Styling solution

- **Tailwind CSS v4** - Use utility-first CSS framework exclusively for all styling [docs](https://tailwindcss.com/docs/styling-with-utility-classes)

- **Tailwind Variants Lite** - Use `tailwind-variants/lite` for component variations and conditional styling. Import with `import { tv } from 'tailwind-variants/lite'` to keep bundle size minimal while providing type-safe variant management [docs](https://www.tailwind-variants.org/docs/config)

### Framework

- **Qwik** - Use Qwik for component development and resumability [docs](https://qwik.dev/docs/getting-started/) 
- **Qwik City** - Use Qwik City for routing and SSR capabilities [docs](https://qwik.dev/docs/qwikcity/)

### Build tool

- **Vite** - Use Vite as the build tool and development server [docs](https://vite.dev/llms-full.txt)

### Programming language

- **TypeScript** - Use TypeScript with strict mode enabled for all code [docs](https://www.typescriptlang.org/docs/)

---

## Rules

- **No comments in code** - Write self-documenting code using descriptive names instead of explanatory comments

- **TypeScript strict mode** - All files must use TypeScript with strict type checking, explicit return types for functions

- **Composition over inheritance** - Structure components using composition patterns, avoid class-based inheritance, prefer functional components with clear prop interfaces

- **Keep features minimalist** - Develop only essential functionality, avoid feature bloat, prioritize simplicity over complexity

- **Export default component$** - Always use `export default component$(() => {})` for Qwik components, avoid separate function declarations

- **Responsive design required** - All components must be responsive and work seamlessly across mobile, tablet, and desktop devices using mobile-first approach

- **Responsive images with picture element** - Use `<picture>` with `<source>` elements for responsive images. Define media queries in `<source>` tags to load appropriate image sizes: mobile images for `(max-width: 767px)`, tablet images for `(min-width: 768px) and (max-width: 1023px)`, desktop images for `(min-width: 1024px)`. Always include fallback `<img>` element. **Why picture is important**: The `<picture>` element enables browsers to download only the appropriate image for the current viewport, reducing bandwidth usage and improving performance. It provides art direction (different crops/compositions for different screens) and format selection (WebP with JPEG fallback). This prevents loading unnecessary large desktop images on mobile devices, significantly improving page load times and user experience, especially on slower connections

- **Single component story required** - Every component must have exactly one Storybook story that demonstrates its usage with realistic props. Keep stories simple and focused, avoid multiple variants or states

- **Use tailwind-variants for component variations** - Create component variants using `tailwind-variants/lite` instead of conditional className logic. Define variants with the `tv()` function to ensure type safety and maintainable styling patterns. Always import from `tailwind-variants/lite` to maintain optimal bundle size