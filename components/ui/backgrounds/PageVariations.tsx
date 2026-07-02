"use client";

import React, { useEffect } from 'react';
import { BackgroundConcept } from './GlobalBackground';

export interface PageBackgroundConfig {
  concept: BackgroundConcept;
  intensity: 'subtle' | 'medium' | 'bold';
  staticMode?: boolean;
  customClasses?: string;
  animations?: boolean;
}

// Comprehensive page-specific background configurations
export const PAGE_BACKGROUND_CONFIGS: Record<string, PageBackgroundConfig> = {
  // Homepage - Maximum impact, engaging
  '/': {
    concept: 'concept-a',
    intensity: 'bold',
    animations: true,
    customClasses: 'brightness-110 saturate-120'
  },
  
  // Services - Professional, trustworthy
  '/services': {
    concept: 'concept-b',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate-15 brightness-105'
  },
  
  // About - Sophisticated, story-focused
  '/about': {
    concept: 'concept-c',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate--10 brightness-95 contrast-110'
  },
  
  // Contact - Welcoming but subtle
  '/contact': {
    concept: 'concept-a',
    intensity: 'subtle',
    animations: true,
    customClasses: 'brightness-105 saturate-90'
  },
  
  // Work/Portfolio - Technical showcase
  '/work': {
    concept: 'concept-b',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate-25 brightness-100 contrast-105'
  },
  
  // Insights/Blog - Content-focused, clean
  '/insights': {
    concept: 'concept-c',
    intensity: 'subtle',
    animations: false,
    customClasses: 'brightness-90 saturate-80'
  },
  
  // Individual service pages
  '/services/digital-advisory': {
    concept: 'concept-a',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate-5 brightness-108'
  },
  
  '/services/applied-data-analytics': {
    concept: 'concept-b',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate-20 saturate-110'
  },
  
  '/services/application-development': {
    concept: 'concept-c',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate--5 contrast-105'
  },
  
  '/services/digital-platforms': {
    concept: 'concept-b',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate-30 brightness-102'
  },
  
  '/services/cyber-security': {
    concept: 'concept-c',
    intensity: 'bold',
    animations: true,
    customClasses: 'hue-rotate--15 saturate-120 contrast-110'
  },
  
  '/services/cloud-services': {
    concept: 'concept-a',
    intensity: 'medium',
    animations: true,
    customClasses: 'hue-rotate-10 brightness-110'
  }
};

// Dynamic page variation generator
export const generatePageVariation = (pathname: string): PageBackgroundConfig => {
  // Check for exact match first
  if (PAGE_BACKGROUND_CONFIGS[pathname]) {
    return PAGE_BACKGROUND_CONFIGS[pathname];
  }
  
  // Check for pattern matches
  if (pathname.startsWith('/services/')) {
    return {
      concept: 'concept-b',
      intensity: 'medium',
      animations: true,
      customClasses: 'hue-rotate-15 brightness-105'
    };
  }
  
  if (pathname.startsWith('/insights/')) {
    return {
      concept: 'concept-c',
      intensity: 'subtle',
      animations: false,
      customClasses: 'brightness-90 saturate-80'
    };
  }
  
  if (pathname.startsWith('/work/')) {
    return {
      concept: 'concept-b',
      intensity: 'medium',
      animations: true,
      customClasses: 'hue-rotate-25 contrast-105'
    };
  }
  
  // Default fallback
  return {
    concept: 'concept-a',
    intensity: 'medium',
    animations: true,
    customClasses: ''
  };
};

// Hook for using page variations
export const usePageVariation = (pathname: string, override?: Partial<PageBackgroundConfig>) => {
  const baseConfig = generatePageVariation(pathname);
  
  return {
    ...baseConfig,
    ...override
  };
};

// Component for applying page-specific background
interface PageVariationBackgroundProps {
  pathname: string;
  override?: Partial<PageBackgroundConfig>;
  children?: React.ReactNode;
}

export const PageVariationBackground: React.FC<PageVariationBackgroundProps> = ({
  pathname,
  override,
  children
}) => {
  const config = usePageVariation(pathname, override);
  
  const backgroundClasses = [
    `bg-${config.concept}-inline`,
    `intensity-${config.intensity}`,
    config.staticMode || !config.animations ? 'static' : '',
    config.customClasses || ''
  ].filter(Boolean).join(' ');
  
  return (
    <>
      <div className={backgroundClasses} />
      {children}
    </>
  );
};

// Intensity modifier classes
const INTENSITY_CLASSES = `
  .intensity-subtle { opacity: 0.4; }
  .intensity-medium { opacity: 0.6; }
  .intensity-bold { opacity: 0.8; }
  
  /* Page-specific intensity adjustments */
  .page-home .intensity-bold { opacity: 0.9; }
  .page-services .intensity-medium { opacity: 0.7; }
  .page-insights .intensity-subtle { opacity: 0.3; }
  
  /* Responsive intensity scaling */
  @media (max-width: 768px) {
    .intensity-subtle { opacity: 0.3; }
    .intensity-medium { opacity: 0.45; }
    .intensity-bold { opacity: 0.6; }
  }
  
  @media (max-width: 480px) {
    .intensity-subtle { opacity: 0.25; }
    .intensity-medium { opacity: 0.4; }
    .intensity-bold { opacity: 0.55; }
  }
`;

// Performance monitoring hook
export const useBackgroundPerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let rafId: number;
    let frameCount = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      const now = performance.now();
      frameCount++;
      
      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        
        // If FPS drops below 30, reduce animation complexity
        if (fps < 30) {
          document.documentElement.style.setProperty('--bg-animation-duration', '60s');
          document.documentElement.style.setProperty('--bg-opacity-scale', '0.7');
        }
        
        frameCount = 0;
        lastTime = now;
      }
      
      rafId = requestAnimationFrame(measureFPS);
    };
    
    // Only monitor performance on animated pages
    const hasAnimatedBg = document.querySelector('.bg-concept-a-inline, .bg-concept-b-inline, .bg-concept-c-inline');
    if (hasAnimatedBg) {
      rafId = requestAnimationFrame(measureFPS);
    }
    
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
};

// Inject intensity styles with performance optimizations
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = INTENSITY_CLASSES + `
    /* CSS Custom Properties for dynamic performance adjustments */
    :root {
      --bg-animation-duration: 30s;
      --bg-opacity-scale: 1;
    }
    
    .bg-concept-a-inline { 
      animation-duration: var(--bg-animation-duration);
      opacity: calc(0.6 * var(--bg-opacity-scale));
    }
    .bg-concept-b-inline { 
      animation-duration: calc(var(--bg-animation-duration) * 0.83);
      opacity: calc(0.6 * var(--bg-opacity-scale));
    }
    .bg-concept-c-inline { 
      animation-duration: calc(var(--bg-animation-duration) * 1.33);
      opacity: calc(0.6 * var(--bg-opacity-scale));
    }
  `;
  document.head.appendChild(styleSheet);
}