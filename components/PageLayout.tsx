'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useEffect } from "react";
import { useScrollReveal } from "@/lib/scroll-reveal";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  // Initialize scroll reveal animations
  useEffect(() => {
    const cleanup = useScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-18">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PageLayout;