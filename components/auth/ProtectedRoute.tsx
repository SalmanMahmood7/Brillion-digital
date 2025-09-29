"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import LoginModal from './LoginModal';
import { Shield, Lock } from 'lucide-react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  showModal?: boolean;
  requireAuth?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  fallback,
  showModal = true,
  requireAuth = true
}) => {
  const { user, loading } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (!loading && !user && requireAuth && showModal) {
      setShowLoginModal(true);
    }
  }, [user, loading, requireAuth, showModal]);

  // Show loading spinner while checking auth state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            {/* Outer rotating ring */}
            <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" style={{animationDuration: '1.5s'}}></div>
            {/* Middle rotating ring (opposite direction) */}
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-500 border-l-blue-500 animate-spin" style={{animationDuration: '1s', animationDirection: 'reverse'}}></div>
            {/* Inner pulsing core */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 animate-pulse opacity-80" style={{animationDuration: '2s'}}></div>
            {/* Center dot */}
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
          </div>
          <p className="text-gray-600 animate-pulse font-medium text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // If user is authenticated or auth is not required, show children
  if (user || !requireAuth) {
    return (
      <>
        {children}
        {showModal && (
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onSuccess={() => setShowLoginModal(false)}
          />
        )}
      </>
    );
  }

  // If custom fallback is provided, show it
  if (fallback) {
    return (
      <>
        {fallback}
        {showModal && (
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onSuccess={() => setShowLoginModal(false)}
          />
        )}
      </>
    );
  }

  // Default unauthorized view
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Authentication Required
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            You need to sign in to access this content. Join our community to explore exclusive insights, 
            career opportunities, and connect with our team.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => setShowLoginModal(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Sign In to Continue
            </button>
            
            <div className="flex items-center text-sm text-gray-500">
              <Shield className="w-4 h-4 mr-2" />
              <span>Secure authentication powered by Firebase</span>
            </div>
          </div>
        </div>
      </div>
      
      {showModal && (
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={() => setShowLoginModal(false)}
        />
      )}
    </>
  );
};

export default ProtectedRoute;