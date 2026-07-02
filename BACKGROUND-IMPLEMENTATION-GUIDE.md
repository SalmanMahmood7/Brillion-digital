# Next.js Background System Implementation Guide

## Overview

This guide provides comprehensive instructions for implementing the three-concept background system in your Next.js application. The system includes gradient mesh + particles, abstract grid + waves, and layered gradients + geometric patterns with full page-specific variations.

## Quick Start

### 1. Install Dependencies (if needed)

```bash
npm install next@^14.2.0 react@^18 react-dom@^18
```

### 2. Import Background Styles

Add to your `app/globals.css` or main CSS file:

```css
@import url('./styles/backgrounds/inline-snippets.css');
```

### 3. Basic Implementation

```tsx
// app/layout.tsx
import { BackgroundProvider } from '@/components/ui/backgrounds/BackgroundProvider';
import GlobalBackground from '@/components/ui/backgrounds/GlobalBackground';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BackgroundProvider>
          <GlobalBackground />
          {children}
        </BackgroundProvider>
      </body>
    </html>
  );
}
```

## File Structure

```
├── components/ui/backgrounds/
│   ├── GlobalBackground.tsx      # Main background component
│   ├── BackgroundProvider.tsx    # Context provider
│   └── PageVariations.tsx        # Page-specific configurations
├── styles/backgrounds/
│   └── inline-snippets.css       # All background CSS
└── public/backgrounds/
    ├── concept-a-4k.svg          # High-res gradient mesh
    ├── concept-b-4k.svg          # Grid + waves
    └── concept-c-4k.svg          # Layered gradients
```

## Background Concepts

### Concept A: Gradient Mesh + Particles
- **Best for**: Homepage, contact pages, engaging sections
- **Style**: Animated particle dots with flowing gradient mesh
- **Performance**: Medium complexity with smooth animations

### Concept B: Abstract Grid + Waves  
- **Best for**: Services, work/portfolio, technical pages
- **Style**: Professional grid patterns with wave overlays
- **Performance**: Higher complexity due to SVG animations

### Concept C: Layered Gradients + Geometric
- **Best for**: About, insights/blog, sophisticated content
- **Style**: Subtle geometric patterns with elegant gradients
- **Performance**: Lower complexity, content-focused

## Implementation Methods

### Method 1: Automatic Page-Based (Recommended)

The system automatically selects backgrounds based on URL patterns:

```tsx
// No configuration needed - automatically works
export default function HomePage() {
  return (
    <div>
      {/* Content - background automatically applied */}
    </div>
  );
}
```

**Default Mappings**:
- `/` → Concept A (bold intensity)
- `/services/*` → Concept B (medium intensity)  
- `/about` → Concept C (medium intensity)
- `/contact` → Concept A (subtle intensity)
- `/work/*` → Concept B (medium intensity)
- `/insights/*` → Concept C (subtle intensity)

### Method 2: Manual Override

```tsx
// app/special-page/page.tsx
import GlobalBackground from '@/components/ui/backgrounds/GlobalBackground';

export default function SpecialPage() {
  return (
    <>
      <GlobalBackground concept="concept-c" forceStatic={false} />
      <div>Special page content</div>
    </>
  );
}
```

### Method 3: Context-Based Control

```tsx
'use client';
import { useBackground, useBackgroundTransition } from '@/components/ui/backgrounds/BackgroundProvider';

export default function InteractivePage() {
  const { concept, setConcept } = useBackground();
  const { transitionTo } = useBackgroundTransition();

  const handleConceptChange = async () => {
    await transitionTo('concept-b', 500);
  };

  return (
    <div>
      <button onClick={handleConceptChange}>
        Switch to Concept B
      </button>
    </div>
  );
}
```

## Page-Specific Customization

### Adding New Page Configurations

Edit `components/ui/backgrounds/PageVariations.tsx`:

```tsx
export const PAGE_BACKGROUND_CONFIGS: Record<string, PageBackgroundConfig> = {
  // Add your custom page
  '/my-custom-page': {
    concept: 'concept-b',
    intensity: 'bold',
    animations: true,
    customClasses: 'hue-rotate-20 brightness-110'
  },
  
  // Pattern-based matching handled in generatePageVariation()
};
```

### Available Configuration Options

```tsx
interface PageBackgroundConfig {
  concept: 'concept-a' | 'concept-b' | 'concept-c';
  intensity: 'subtle' | 'medium' | 'bold';
  staticMode?: boolean;           // Disable animations
  customClasses?: string;         // CSS filter/transform classes
  animations?: boolean;           // Enable/disable animations
}
```

## CSS Customization

### Intensity Levels

```css
.intensity-subtle { opacity: 0.4; }
.intensity-medium { opacity: 0.6; }  
.intensity-bold { opacity: 0.8; }
```

### Custom Filter Effects

```css
/* Warmer tone for brand pages */
.page-about .bg-concept-c-inline {
  filter: hue-rotate(-10deg) brightness(0.95) contrast(1.1);
}

/* High-tech feel for services */  
.page-services .bg-concept-b-inline {
  filter: hue-rotate(15deg) brightness(1.05) saturate(1.1);
}
```

### Creating New Concepts

1. **Add CSS classes** in `styles/backgrounds/inline-snippets.css`:

```css
.bg-concept-d-inline {
  background: 
    /* Your custom background layers */
    radial-gradient(/* ... */),
    linear-gradient(/* ... */);
  animation: conceptDFlow 20s ease-in-out infinite;
}

@keyframes conceptDFlow {
  0%, 100% { /* start/end state */ }
  50% { /* mid animation */ }
}
```

2. **Update TypeScript types** in `GlobalBackground.tsx`:

```tsx
export type BackgroundConcept = 'concept-a' | 'concept-b' | 'concept-c' | 'concept-d';
```

3. **Add to page mappings** as needed.

## Performance Optimization

### Automatic Optimizations Included

- **Reduced complexity on mobile** (larger patterns, slower animations)
- **Respects user motion preferences** (`prefers-reduced-motion`)
- **High contrast mode support** (reduces opacity)
- **Print-friendly** (removes backgrounds for printing)

### Manual Performance Tuning

```tsx
// Disable animations for specific pages
<GlobalBackground concept="concept-a" forceStatic={true} />

// Custom intensity for performance
const config = usePageVariation(pathname, { 
  intensity: 'subtle',
  animations: false 
});
```

### Bundle Size Considerations

- **CSS-only approach**: No JavaScript animations, minimal bundle impact
- **Inline SVG**: Base64 encoded, no additional HTTP requests  
- **Conditional rendering**: Only loads necessary background elements

## Accessibility Features

### Motion Sensitivity
- Automatically detects `prefers-reduced-motion` 
- Gracefully disables animations while maintaining visual design
- Provides static alternatives for all concepts

### High Contrast Support
- Reduces opacity in high contrast mode
- Maintains readability over background patterns
- Provides sufficient color contrast ratios

### Screen Reader Compatibility  
- Backgrounds are purely decorative (no alt text needed)
- Does not interfere with content accessibility
- Uses semantic HTML structure

## Troubleshooting

### Common Issues

**1. Backgrounds not appearing**
- Check CSS import in `globals.css`
- Verify `BackgroundProvider` wraps your app
- Ensure no conflicting `z-index` values

**2. Animations not working**
- Check browser motion preferences
- Verify `forceStatic` is not enabled
- Test in different browsers for compatibility

**3. Performance issues**
- Reduce animation complexity on mobile
- Use `intensity: 'subtle'` for content-heavy pages
- Consider `staticMode: true` for slower devices

**4. TypeScript errors**
- Update concept types if adding new ones
- Ensure pathname matching is accurate
- Check interface definitions match usage

### Browser Support

- **Modern browsers**: Full support with animations
- **Older browsers**: Graceful degradation to static backgrounds
- **Mobile browsers**: Optimized animations and reduced complexity

## Examples

### E-commerce Site
```tsx
const SHOP_BACKGROUNDS = {
  '/': 'concept-a',           // Engaging homepage
  '/products': 'concept-b',   // Clean product grid
  '/product/*': 'concept-c',  // Focused product pages  
  '/checkout': 'concept-a'    // Welcoming checkout
};
```

### Portfolio Site
```tsx
const PORTFOLIO_BACKGROUNDS = {
  '/': 'concept-c',           // Sophisticated intro
  '/work': 'concept-b',       // Technical showcase
  '/about': 'concept-a',      // Personal/engaging
  '/contact': 'concept-a'     // Approachable
};
```

### Corporate Site
```tsx
const CORPORATE_BACKGROUNDS = {
  '/': 'concept-b',           // Professional homepage
  '/services': 'concept-b',   // Consistent branding
  '/about': 'concept-c',      // Executive sophistication
  '/news': 'concept-c'        // Clean content focus
};
```

## Advanced Usage

### Dynamic Theme Switching

```tsx
'use client';
export default function ThemeControls() {
  const { transitionTo } = useBackgroundTransition();
  
  const themes = [
    { name: 'Energetic', concept: 'concept-a' },
    { name: 'Professional', concept: 'concept-b' }, 
    { name: 'Sophisticated', concept: 'concept-c' }
  ];

  return (
    <div>
      {themes.map(theme => (
        <button 
          key={theme.name}
          onClick={() => transitionTo(theme.concept, 800)}
        >
          {theme.name}
        </button>
      ))}
    </div>
  );
}
```

### Scroll-Based Concept Changes

```tsx
'use client';
import { useEffect } from 'react';
import { useBackgroundTransition } from '@/components/ui/backgrounds/BackgroundProvider';

export default function ScrollBasedBackgrounds() {
  const { transitionTo } = useBackgroundTransition();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const concept = entry.target.getAttribute('data-bg-concept');
          if (concept) transitionTo(concept as BackgroundConcept);
        }
      });
    });

    document.querySelectorAll('[data-bg-concept]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [transitionTo]);

  return (
    <div>
      <section data-bg-concept="concept-a">Hero Section</section>
      <section data-bg-concept="concept-b">Services</section>
      <section data-bg-concept="concept-c">About</section>
    </div>
  );
}
```

This comprehensive system provides a modern, performant, and accessible background solution that enhances your site's visual identity while maintaining excellent user experience across all devices and user preferences.