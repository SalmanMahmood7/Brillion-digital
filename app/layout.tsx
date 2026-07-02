import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Providers } from "./providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
  adjustFontFallback: true,
  weight: ['400', '500', '600', '700'], // Only load needed weights
});

export const metadata: Metadata = {
  title: "BRILLION Digital",
  description: "Digital transformation and technology consulting services",
  icons: {
    icon: "/favicon-logo.jpg",
    shortcut: "/favicon-logo.jpg",
    apple: "/favicon-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://firestore.googleapis.com" />
        <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
        
        {/* Preload only the hero background image for LCP */}
        <link rel="preload" href="/digital-platforms-hero-bg.jpg" as="image" fetchPriority="high" />
        
        {/* Preload critical CSS */}
        <link rel="preload" href="/_next/static/css/app/layout.css" as="style" />
        
        {/* Minimal critical CSS */}
        <style>{`
          html{font-family:system-ui,sans-serif}
          body{margin:0;background:#fff}
          .animate-pulse{animation:pulse 2s infinite}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
        `}</style>
        
        {/* Defer non-critical resources */}
        <link rel="prefetch" href="/ai-solutions-background.jpg" />
        <link rel="prefetch" href="/cloud-hero-bg.jpg" />
        <link rel="prefetch" href="/cyber-hero-bg.jpg" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}