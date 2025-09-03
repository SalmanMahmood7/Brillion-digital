'use client';

import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { useScrollReveal } from "@/lib/scroll-reveal";

export default function Home() {
  // Initialize scroll reveal animations
  useEffect(() => {
    const cleanup = useScrollReveal();
    return cleanup;
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Page Content */}
        <div className="relative z-10">
          <Hero />
          <WhatWeDoSection />
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(10px) translateX(-5px); }
          }
          
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-800px); }
          }
          
          .animate-float-slow {
            animation: float-slow ease-in-out infinite;
          }
          
          .animate-wave {
            animation: wave 20s linear infinite;
          }
        `}</style>
      </div>
    </PageLayout>
  );
}