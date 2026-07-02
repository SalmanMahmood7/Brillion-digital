"use client";

import { logEvent, Analytics } from 'firebase/analytics';
import { analytics } from './firebase';

// Analytics event types for better type safety
export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

// Conversion tracking events
export const CONVERSION_EVENTS = {
  // Form submissions
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  QUOTE_REQUEST: 'quote_request',
  CONSULTATION_REQUEST: 'consultation_request',
  WEBINAR_REGISTRATION: 'webinar_registration',
  
  // CTA interactions
  CTA_CLICK: 'cta_click',
  BUTTON_CLICK: 'button_click',
  LINK_CLICK: 'link_click',
  
  // Webinar interactions
  WEBINAR_START: 'webinar_start',
  WEBINAR_COMPLETE: 'webinar_complete',
  WEBINAR_PROGRESS: 'webinar_progress',
  
  // Service interactions
  SERVICE_VIEW: 'service_view',
  SERVICE_INTEREST: 'service_interest',
  CASE_STUDY_VIEW: 'case_study_view',
  
  // User engagement
  PAGE_VIEW: 'page_view',
  SESSION_START: 'session_start',
  USER_ENGAGEMENT: 'user_engagement',
  
  // Downloads
  RESOURCE_DOWNLOAD: 'resource_download',
  PDF_DOWNLOAD: 'pdf_download',
  GUIDE_DOWNLOAD: 'guide_download'
} as const;

// Helper function to safely track events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  try {
    // Only track in browser environment
    if (typeof window === 'undefined') {
      console.log(`🔍 Analytics (SSR): ${eventName}`, parameters);
      return;
    }

    // Check if analytics is available
    if (!analytics) {
      console.log(`🔍 Analytics (Not initialized): ${eventName}`, parameters);
      return;
    }

    // Log the event
    logEvent(analytics, eventName, {
      timestamp: new Date().toISOString(),
      page_url: window.location.href,
      page_title: document.title,
      user_agent: navigator.userAgent,
      ...parameters
    });

    console.log(`📊 Analytics Event: ${eventName}`, parameters);
  } catch (error) {
    console.error('❌ Analytics tracking error:', error);
  }
};

// Conversion tracking functions
export const trackConversion = {
  // Form submissions
  contactForm: (formData?: Record<string, any>) => {
    trackEvent(CONVERSION_EVENTS.CONTACT_FORM_SUBMIT, {
      event_category: 'form_submission',
      event_label: 'contact_form',
      value: 1,
      ...formData
    });
  },

  newsletterSignup: (email?: string, source?: string) => {
    trackEvent(CONVERSION_EVENTS.NEWSLETTER_SIGNUP, {
      event_category: 'form_submission',
      event_label: 'newsletter',
      value: 1,
      source: source || 'website',
      email_domain: email ? email.split('@')[1] : undefined
    });
  },

  quoteRequest: (serviceType?: string, contactMethod?: string) => {
    trackEvent(CONVERSION_EVENTS.QUOTE_REQUEST, {
      event_category: 'lead_generation',
      event_label: 'quote_request',
      value: 5,
      service_type: serviceType,
      contact_method: contactMethod
    });
  },

  consultationRequest: (serviceType?: string, urgency?: string) => {
    trackEvent(CONVERSION_EVENTS.CONSULTATION_REQUEST, {
      event_category: 'lead_generation',
      event_label: 'consultation',
      value: 10,
      service_type: serviceType,
      urgency: urgency
    });
  },

  // CTA interactions
  ctaClick: (ctaText: string, ctaLocation: string, destination?: string) => {
    trackEvent(CONVERSION_EVENTS.CTA_CLICK, {
      event_category: 'engagement',
      event_label: ctaText,
      cta_location: ctaLocation,
      destination: destination,
      value: 1
    });
  },

  buttonClick: (buttonText: string, buttonType: string, section?: string) => {
    trackEvent(CONVERSION_EVENTS.BUTTON_CLICK, {
      event_category: 'user_interaction',
      event_label: buttonText,
      button_type: buttonType,
      section: section,
      value: 1
    });
  },

  // Webinar interactions
  webinarStart: (webinarId: string, webinarTitle: string) => {
    trackEvent(CONVERSION_EVENTS.WEBINAR_START, {
      event_category: 'webinar_engagement',
      event_label: webinarTitle,
      webinar_id: webinarId,
      value: 3
    });
  },

  webinarProgress: (webinarId: string, progressPercent: number) => {
    trackEvent(CONVERSION_EVENTS.WEBINAR_PROGRESS, {
      event_category: 'webinar_engagement',
      event_label: `${progressPercent}% progress`,
      webinar_id: webinarId,
      progress_percent: progressPercent,
      value: 1
    });
  },

  webinarComplete: (webinarId: string, webinarTitle: string, watchTime?: number) => {
    trackEvent(CONVERSION_EVENTS.WEBINAR_COMPLETE, {
      event_category: 'webinar_engagement',
      event_label: webinarTitle,
      webinar_id: webinarId,
      watch_time: watchTime,
      value: 5
    });
  },

  // Service interactions
  serviceView: (serviceName: string, serviceCategory: string) => {
    trackEvent(CONVERSION_EVENTS.SERVICE_VIEW, {
      event_category: 'service_engagement',
      event_label: serviceName,
      service_category: serviceCategory,
      value: 1
    });
  },

  serviceInterest: (serviceName: string, interactionType: string) => {
    trackEvent(CONVERSION_EVENTS.SERVICE_INTEREST, {
      event_category: 'service_engagement',
      event_label: serviceName,
      interaction_type: interactionType,
      value: 2
    });
  },

  // Downloads
  resourceDownload: (resourceName: string, resourceType: string) => {
    trackEvent(CONVERSION_EVENTS.RESOURCE_DOWNLOAD, {
      event_category: 'content_engagement',
      event_label: resourceName,
      resource_type: resourceType,
      value: 3
    });
  },

  pdfDownload: (fileName: string, section?: string) => {
    trackEvent(CONVERSION_EVENTS.PDF_DOWNLOAD, {
      event_category: 'content_engagement',
      event_label: fileName,
      section: section,
      value: 2
    });
  }
};

// Enhanced tracking for specific business metrics
export const trackBusinessMetrics = {
  // Lead quality scoring
  qualifyLead: (leadScore: number, source: string, serviceInterest: string) => {
    trackEvent('lead_qualified', {
      event_category: 'lead_management',
      lead_score: leadScore,
      lead_source: source,
      service_interest: serviceInterest,
      value: leadScore
    });
  },

  // Customer journey tracking
  journeyStage: (stage: string, previousStage?: string) => {
    trackEvent('customer_journey', {
      event_category: 'user_journey',
      current_stage: stage,
      previous_stage: previousStage,
      value: 1
    });
  },

  // ROI tracking for marketing campaigns
  campaignAttribution: (campaignName: string, medium: string, source: string) => {
    trackEvent('campaign_attribution', {
      event_category: 'marketing',
      campaign_name: campaignName,
      campaign_medium: medium,
      campaign_source: source,
      value: 1
    });
  }
};

// Page view tracking with enhanced context
export const trackPageView = (pageName: string, pageCategory?: string, customData?: Record<string, any>) => {
  trackEvent(CONVERSION_EVENTS.PAGE_VIEW, {
    event_category: 'navigation',
    page_name: pageName,
    page_category: pageCategory,
    referrer: document.referrer,
    ...customData
  });
};

// Session tracking
export const trackSession = {
  start: () => {
    trackEvent(CONVERSION_EVENTS.SESSION_START, {
      event_category: 'engagement',
      session_start_time: Date.now()
    });
  },

  engagement: (engagementTime: number) => {
    trackEvent(CONVERSION_EVENTS.USER_ENGAGEMENT, {
      event_category: 'engagement',
      engagement_time_msec: engagementTime,
      value: Math.floor(engagementTime / 1000) // Convert to seconds
    });
  }
};

// Utility function to track external link clicks
export const trackExternalClick = (url: string, linkText: string) => {
  trackEvent('external_link_click', {
    event_category: 'outbound_link',
    event_label: linkText,
    destination_url: url,
    value: 1
  });
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string, errorLocation?: string) => {
  trackEvent('error_occurred', {
    event_category: 'error',
    error_type: errorType,
    error_message: errorMessage,
    error_location: errorLocation,
    value: 0
  });
};

// A/B testing support
export const trackExperiment = (experimentId: string, variantId: string, eventType: string) => {
  trackEvent('experiment_event', {
    event_category: 'ab_testing',
    experiment_id: experimentId,
    variant_id: variantId,
    event_type: eventType,
    value: 1
  });
};

export default {
  trackEvent,
  trackConversion,
  trackBusinessMetrics,
  trackPageView,
  trackSession,
  trackExternalClick,
  trackError,
  trackExperiment,
  CONVERSION_EVENTS
};