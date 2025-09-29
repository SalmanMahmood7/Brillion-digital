"use client";

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackSession, trackConversion, trackBusinessMetrics } from '@/lib/analytics';

// Hook for automatic page view tracking
export const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    const pageName = pathname === '/' ? 'home' : pathname.replace('/', '').replace(/\//g, '_');
    const pageCategory = pathname.split('/')[1] || 'home';
    
    trackPageView(pageName, pageCategory, {
      path: pathname,
      timestamp: new Date().toISOString()
    });
  }, [pathname]);
};

// Hook for session tracking
export const useSessionTracking = () => {
  useEffect(() => {
    // Track session start
    trackSession.start();

    // Track engagement time
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const engagementTime = Date.now() - startTime;
      trackSession.engagement(engagementTime);
    };

    // Track engagement on page unload
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Track engagement every 30 seconds for active sessions
    const engagementInterval = setInterval(() => {
      const engagementTime = Date.now() - startTime;
      trackSession.engagement(engagementTime);
    }, 30000);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(engagementInterval);
      
      // Final engagement tracking
      const engagementTime = Date.now() - startTime;
      trackSession.engagement(engagementTime);
    };
  }, []);
};

// Hook for form tracking
export const useFormTracking = () => {
  const trackFormSubmission = useCallback((formType: string, formData: Record<string, any> = {}) => {
    switch (formType) {
      case 'contact':
        trackConversion.contactForm(formData);
        break;
      case 'newsletter':
        trackConversion.newsletterSignup(formData.email, formData.source);
        break;
      case 'quote':
        trackConversion.quoteRequest(formData.serviceType, formData.contactMethod);
        break;
      case 'consultation':
        trackConversion.consultationRequest(formData.serviceType, formData.urgency);
        break;
      default:
        console.warn(`Unknown form type: ${formType}`);
    }
  }, []);

  const trackFormStart = useCallback((formType: string) => {
    trackConversion.ctaClick(`${formType}_form_start`, 'form_interaction');
  }, []);

  const trackFormAbandonment = useCallback((formType: string, fieldsCompleted: number) => {
    trackConversion.ctaClick(`${formType}_form_abandoned`, 'form_interaction', undefined);
  }, []);

  return {
    trackFormSubmission,
    trackFormStart,
    trackFormAbandonment
  };
};

// Hook for CTA tracking
export const useCTATracking = () => {
  const trackCTAClick = useCallback((ctaText: string, location: string, destination?: string) => {
    trackConversion.ctaClick(ctaText, location, destination);
  }, []);

  const trackButtonClick = useCallback((buttonText: string, buttonType: string, section?: string) => {
    trackConversion.buttonClick(buttonText, buttonType, section);
  }, []);

  return {
    trackCTAClick,
    trackButtonClick
  };
};

// Hook for webinar tracking
export const useWebinarTracking = () => {
  const trackWebinarStart = useCallback((webinarId: string, webinarTitle: string) => {
    trackConversion.webinarStart(webinarId, webinarTitle);
  }, []);

  const trackWebinarProgress = useCallback((webinarId: string, progressPercent: number) => {
    // Only track at 25%, 50%, 75%, and 100%
    const milestones = [25, 50, 75, 100];
    if (milestones.includes(progressPercent)) {
      trackConversion.webinarProgress(webinarId, progressPercent);
    }
  }, []);

  const trackWebinarComplete = useCallback((webinarId: string, webinarTitle: string, watchTime?: number) => {
    trackConversion.webinarComplete(webinarId, webinarTitle, watchTime);
  }, []);

  return {
    trackWebinarStart,
    trackWebinarProgress,
    trackWebinarComplete
  };
};

// Hook for service page tracking
export const useServiceTracking = () => {
  const trackServiceView = useCallback((serviceName: string, serviceCategory: string) => {
    trackConversion.serviceView(serviceName, serviceCategory);
  }, []);

  const trackServiceInterest = useCallback((serviceName: string, interactionType: string) => {
    trackConversion.serviceInterest(serviceName, interactionType);
  }, []);

  return {
    trackServiceView,
    trackServiceInterest
  };
};

// Hook for download tracking
export const useDownloadTracking = () => {
  const trackDownload = useCallback((fileName: string, fileType: string, section?: string) => {
    if (fileType === 'pdf') {
      trackConversion.pdfDownload(fileName, section);
    } else {
      trackConversion.resourceDownload(fileName, fileType);
    }
  }, []);

  return {
    trackDownload
  };
};

// Hook for business metrics
export const useBusinessTracking = () => {
  const trackLeadQualification = useCallback((leadScore: number, source: string, serviceInterest: string) => {
    trackBusinessMetrics.qualifyLead(leadScore, source, serviceInterest);
  }, []);

  const trackCustomerJourney = useCallback((stage: string, previousStage?: string) => {
    trackBusinessMetrics.journeyStage(stage, previousStage);
  }, []);

  const trackCampaignAttribution = useCallback((campaignName: string, medium: string, source: string) => {
    trackBusinessMetrics.campaignAttribution(campaignName, medium, source);
  }, []);

  return {
    trackLeadQualification,
    trackCustomerJourney,
    trackCampaignAttribution
  };
};

// Main analytics hook that combines common functionality
export const useAnalytics = () => {
  const { trackCTAClick, trackButtonClick } = useCTATracking();
  const { trackFormSubmission } = useFormTracking();
  const { trackDownload } = useDownloadTracking();

  return {
    trackCTAClick,
    trackButtonClick,
    trackFormSubmission,
    trackDownload
  };
};

export default useAnalytics;