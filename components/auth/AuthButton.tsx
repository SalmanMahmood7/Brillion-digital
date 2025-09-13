"use client";

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';
import Link from 'next/link';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  requireAuth?: boolean;
  onAuthSuccess?: () => void;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  children: React.ReactNode;
  className?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  href,
  requireAuth = false,
  onAuthSuccess,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  className,
  onClick,
  ...props
}) => {
  const { user } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (requireAuth && !user) {
      e.preventDefault();
      setShowLoginModal(true);
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  const handleAuthSuccess = () => {
    setShowLoginModal(false);
    onAuthSuccess?.();
    
    // If there's an href, navigate after successful auth
    if (href) {
      window.location.href = href;
    }
  };

  // If it's a link and user is authenticated (or auth not required), render as Link
  if (href && (!requireAuth || user)) {
    if (asChild) {
      return (
        <>
          <Link href={href}>
            <Button 
              variant={variant} 
              size={size} 
              className={className}
              {...props}
            >
              {children}
            </Button>
          </Link>
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onSuccess={handleAuthSuccess}
          />
        </>
      );
    }
    
    return (
      <>
        <Button 
          asChild 
          variant={variant} 
          size={size} 
          className={className}
          {...props}
        >
          <Link href={href}>
            {children}
          </Link>
        </Button>
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={handleAuthSuccess}
        />
      </>
    );
  }

  // Render as button
  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={className}
        onClick={handleClick}
        {...props}
      >
        {children}
      </Button>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleAuthSuccess}
      />
    </>
  );
};

export default AuthButton;