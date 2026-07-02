"use client";

import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { useCTATracking } from '@/hooks/useAnalytics';

interface AnalyticsButtonProps extends ButtonProps {
  trackingData: {
    ctaText: string;
    location: string;
    destination?: string;
    category?: string;
    customData?: Record<string, any>;
  };
  children: React.ReactNode;
}

export const AnalyticsButton: React.FC<AnalyticsButtonProps> = ({
  trackingData,
  children,
  onClick,
  ...buttonProps
}) => {
  const { trackCTAClick } = useCTATracking();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the CTA click
    trackCTAClick(
      trackingData.ctaText,
      trackingData.location,
      trackingData.destination
    );

    // Call the original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      {...buttonProps}
      onClick={handleClick}
      data-analytics-event="cta_click"
      data-analytics-category={trackingData.category || 'engagement'}
      data-analytics-label={trackingData.ctaText}
      data-analytics-location={trackingData.location}
    >
      {children}
    </Button>
  );
};

export default AnalyticsButton;