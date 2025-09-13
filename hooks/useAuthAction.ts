"use client";

import { useState, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';

interface UseAuthActionReturn {
  executeAction: (action: () => void | Promise<void>) => Promise<void>;
  showLoginModal: boolean;
  setShowLoginModal: (show: boolean) => void;
  isLoading: boolean;
}

export const useAuthAction = (): UseAuthActionReturn => {
  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const executeAction = useCallback(async (action: () => void | Promise<void>) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    setIsLoading(true);
    try {
      await action();
    } catch (error) {
      console.error('Action failed:', error);
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  return {
    executeAction,
    showLoginModal,
    setShowLoginModal,
    isLoading
  };
};