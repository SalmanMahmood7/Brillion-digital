"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePageTracking, useSessionTracking } from '@/hooks/useAnalytics';
import { analytics } from '@/lib/firebase';
import { trackEvent } from '@/lib/analytics';

interface AnalyticsContextType {
  isInitialized: boolean;
  isEnabled: boolean;
  trackingId: string | null;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  isInitialized: false,
  isEnabled: false,
  trackingId: null
});

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [trackingId, setTrackingId] = useState<string | null>(null);

  // Initialize analytics
  useEffect(() => {
    const initializeAnalytics = async () => {
      try {
        // Check if we're in browser environment
        if (typeof window === 'undefined') {
          return;
        }

        // Check for user consent (implement cookie consent logic here if needed)
        const hasConsent = true; // You can implement cookie consent logic here

        if (!hasConsent) {
          console.log('🔒 Analytics disabled: User consent not given');
          return;
        }

        // Wait for analytics to be available
        let attempts = 0;
        const maxAttempts = 10;
        
        const waitForAnalytics = () => {
          return new Promise<void>((resolve, reject) => {
            const checkAnalytics = () => {
              attempts++;
              
              if (analytics) {
                setIsInitialized(true);
                setIsEnabled(true);
                setTrackingId(process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-3WK4KKYKYC');
                console.log('✅ Analytics initialized and ready');
                resolve();
              } else if (attempts < maxAttempts) {
                setTimeout(checkAnalytics, 500);
              } else {
                console.log('⚠️ Analytics initialization timeout');
                reject(new Error('Analytics initialization timeout'));
              }
            };
            
            checkAnalytics();
          });
        };

        await waitForAnalytics();

        // Track app initialization
        trackEvent('app_initialized', {
          timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          viewport: `${window.innerWidth}x${window.innerHeight}`,
          referrer: document.referrer || 'direct'
        });

      } catch (error) {
        console.error('❌ Analytics initialization failed:', error);
        setIsInitialized(false);
        setIsEnabled(false);
      }
    };

    initializeAnalytics();
  }, []);

  // Enable automatic page and session tracking
  usePageTracking();
  useSessionTracking();

  // Track scroll depth
  useEffect(() => {
    if (!isEnabled) return;

    let maxScrollDepth = 0;
    const scrollMilestones = [25, 50, 75, 100];
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 100;

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent;
      }

      // Track milestone events
      scrollMilestones.forEach(milestone => {
        if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone);
          trackEvent('scroll_milestone', {
            event_category: 'engagement',
            scroll_depth: milestone,
            page_url: window.location.href,
            value: milestone / 25 // Weight deeper scrolls more
          });
        }
      });
    };

    const handleBeforeUnload = () => {
      if (maxScrollDepth > 0) {
        trackEvent('max_scroll_depth', {
          event_category: 'engagement',
          scroll_depth: maxScrollDepth,
          page_url: window.location.href,
          value: Math.floor(maxScrollDepth / 10)
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isEnabled]);

  // Track click events globally
  useEffect(() => {
    if (!isEnabled) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // Track external links
      if (target.tagName === 'A') {
        const link = target as HTMLAnchorElement;
        const isExternal = link.hostname !== window.location.hostname;
        
        if (isExternal) {
          trackEvent('external_link_click', {
            event_category: 'outbound_link',
            destination_url: link.href,
            link_text: link.textContent || 'Unknown',
            value: 1
          });
        }
      }

      // Track button clicks with data attributes
      if (target.dataset.analyticsEvent) {
        trackEvent(target.dataset.analyticsEvent, {
          event_category: target.dataset.analyticsCategory || 'user_interaction',
          event_label: target.dataset.analyticsLabel || target.textContent || 'Unknown',
          button_type: target.tagName.toLowerCase(),
          value: parseInt(target.dataset.analyticsValue || '1')
        });
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isEnabled]);

  const contextValue: AnalyticsContextType = {
    isInitialized,
    isEnabled,
    trackingId
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;