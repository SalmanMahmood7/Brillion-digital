# Split-Screen Scroll Effect - "What We Do" Section

This guide explains how to implement the MNP Digital-style split-screen scroll effect with detailed code examples and best practices.

## 🎯 Overview

The split-screen scroll effect features:
- **Left side**: Sticky content (heading, description, CTAs)
- **Right side**: Scrolling service blocks that animate in/out
- **Intersection Observer**: Detects which service is currently in view
- **Responsive design**: Adapts to mobile with stacked layout

## 📁 File Structure

```
components/
├── WhatWeDoSection.tsx    # Main component
├── Services.tsx           # Wrapper component
└── ui/                   # Shadcn UI components
```

## 🏗️ Implementation Breakdown

### 1. Semantic HTML Structure

```tsx
<section className="what-we-do-section" aria-labelledby="what-we-do-heading">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
    
    {/* Left Side - Sticky Content */}
    <aside className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
      <h2 id="what-we-do-heading">...</h2>
      <p>...</p>
      <div>{/* CTAs */}</div>
      <div>{/* Active service indicator */}</div>
    </aside>

    {/* Right Side - Scrolling Service Blocks */}
    <main className="lg:col-span-7 space-y-32">
      {services.map((service) => (
        <article data-service-id={service.id} className="service-block">
          {/* Service content */}
        </article>
      ))}
    </main>
    
  </div>
</section>
```

### 2. CSS Grid & Sticky Positioning

```css
/* Main container */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Desktop layout */
@media (min-width: 1024px) {
  .lg\:grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  
  .lg\:col-span-5 {
    grid-column: span 5 / span 5;
  }
  
  .lg\:col-span-7 {
    grid-column: span 7 / span 7;
  }
  
  /* Sticky positioning */
  .lg\:sticky {
    position: sticky;
    top: 6rem; /* Adjust based on header height */
    align-self: flex-start;
    height: fit-content;
  }
}

/* Mobile: Remove sticky behavior */
@media (max-width: 1023px) {
  .lg\:sticky {
    position: static !important;
  }
}
```

### 3. Scroll-Triggered Animations

```tsx
// Intersection Observer setup
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const serviceId = entry.target.getAttribute('data-service-id');
        
        if (entry.isIntersecting && serviceId) {
          setActiveService(serviceId);
          entry.target.classList.add('animate-in');
        } else {
          entry.target.classList.remove('animate-in');
        }
      });
    },
    {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when 20% visible
      threshold: 0.1
    }
  );

  // Observe all service blocks
  const serviceBlocks = document.querySelectorAll('[data-service-id]');
  serviceBlocks.forEach((block) => observer.observe(block));

  return () => observer.disconnect();
}, []);
```

### 4. Animation CSS Classes

```css
/* Initial state */
.service-block {
  opacity: 0;
  transform: translateY(4rem);
  transition: all 0.7s ease-out;
}

/* Animated state */
.service-block.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .service-block,
  .transition-all {
    transition: none !important;
  }
}
```

## 📱 Responsive Design Guidelines

### Desktop (≥1024px)
- **Grid**: 5/7 column split (left/right)
- **Sticky**: Left content sticks to top
- **Spacing**: Large gaps between service blocks
- **Indicators**: Show active service tracker

### Tablet (768px - 1023px)
- **Layout**: Stacked vertically
- **Sticky**: Disabled (static positioning)
- **Spacing**: Reduced gaps
- **Indicators**: Hidden

### Mobile (<768px)
- **Layout**: Single column
- **Cards**: Full width with padding
- **Text**: Smaller font sizes
- **Buttons**: Stack vertically

```tsx
// Responsive classes example
<div className="
  text-4xl lg:text-5xl xl:text-6xl     // Responsive typography
  space-y-8 lg:space-y-16              // Responsive spacing
  lg:sticky lg:top-24                  // Conditional sticky
  grid-cols-1 lg:grid-cols-12          // Responsive grid
">
```

## ⚡ Performance Optimizations

### 1. Intersection Observer Configuration
```tsx
{
  root: null,                    // Use viewport as root
  rootMargin: '-20% 0px -60% 0px', // Early trigger
  threshold: 0.1                 // 10% visibility required
}
```

### 2. Efficient Re-renders
```tsx
// Memoize services array to prevent unnecessary re-renders
const services = useMemo(() => [
  { id: 'service-1', ... },
  // ...
], []);

// Use callbacks for event handlers
const handleIntersection = useCallback((entries) => {
  // Handle intersection
}, []);
```

### 3. Lazy Loading Images
```tsx
// If using images in service blocks
<img 
  src={service.image} 
  alt={service.title}
  loading="lazy"          // Native lazy loading
  decoding="async"        // Async image decoding
/>
```

## ♿ Accessibility Best Practices

### 1. Semantic HTML
```tsx
<section aria-labelledby="what-we-do-heading">
  <aside>                          {/* Complementary content */}
    <h2 id="what-we-do-heading">   {/* Proper heading hierarchy */}
  </aside>
  <main>                          {/* Main content area */}
    <article>                     {/* Individual service blocks */}
      <h3 id="service-title">     {/* Unique IDs */}
    </article>
  </main>
</section>
```

### 2. Focus Management
```tsx
// Ensure focusable elements are accessible
<Button 
  className="focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
  aria-describedby="service-description"
>
  Learn more
</Button>
```

### 3. Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .service-block,
  .transition-all {
    transition: none !important;
    animation: none !important;
  }
}
```

### 4. Screen Reader Support
```tsx
// Announce active service changes
<div aria-live="polite" aria-atomic="true" className="sr-only">
  Currently viewing: {activeService}
</div>

// Proper labeling
<article 
  aria-labelledby={`service-${service.id}-title`}
  role="article"
>
```

## 🚀 Advanced Features

### 1. Smooth Scroll Navigation
```tsx
const scrollToService = (serviceId: string) => {
  const element = document.querySelector(`[data-service-id="${serviceId}"]`);
  element?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'center'
  });
};
```

### 2. Progress Indicator
```tsx
const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const section = sectionRef.current;
    if (!section) return;
    
    const { top, height } = section.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)));
    setScrollProgress(progress);
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### 3. Parallax Effects
```tsx
// Subtle parallax for background elements
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Apply transform
<div 
  style={{
    transform: `translateY(${scrollY * 0.1}px)`
  }}
  className="absolute inset-0 bg-gradient-to-br from-primary/3"
/>
```

## 🔧 Customization Options

### 1. Animation Timing
```css
.service-block {
  transition-duration: 0.7s;        /* Animation speed */
  transition-timing-function: ease-out; /* Easing function */
  transition-delay: 0.1s;            /* Stagger delay */
}
```

### 2. Intersection Thresholds
```tsx
// Adjust when animations trigger
rootMargin: '-10% 0px -70% 0px'  // Earlier trigger
rootMargin: '-30% 0px -50% 0px'  // Later trigger
```

### 3. Grid Proportions
```tsx
// Adjust left/right split
<aside className="lg:col-span-4">  {/* Narrower left */}
<main className="lg:col-span-8">   {/* Wider right */}
```

## 🎨 Styling Variations

### 1. Different Card Styles
```css
/* Glassmorphism variant */
.service-card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Minimal variant */
.service-card-minimal {
  background: transparent;
  border-left: 4px solid var(--accent);
  padding-left: 2rem;
}
```

### 2. Alternative Layouts
```tsx
// Horizontal scroll variant
<div className="flex overflow-x-auto space-x-8 pb-8">
  {services.map(service => (
    <div className="flex-none w-80">
      {/* Service content */}
    </div>
  ))}
</div>
```

## 📊 Performance Metrics

### Recommended Benchmarks
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Monitoring
```tsx
// Performance monitoring
useEffect(() => {
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      console.log(`${entry.name}: ${entry.duration}ms`);
    });
  });
  
  observer.observe({ entryTypes: ['measure'] });
  
  return () => observer.disconnect();
}, []);
```

This implementation provides a smooth, accessible, and performant split-screen scroll effect that matches the MNP Digital design while being fully responsive and customizable.