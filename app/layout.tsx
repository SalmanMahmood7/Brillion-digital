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
});

export const metadata: Metadata = {
  title: "BRILLION Digital",
  description: "Digital transformation and technology consulting services",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%238B5CF6'/><stop offset='100%25' stop-color='%2306B6D4'/></linearGradient></defs><rect width='32' height='32' rx='4' fill='url(%23g)'/><text x='16' y='23' text-anchor='middle' font-family='system-ui' font-size='18' font-weight='900' fill='white' letter-spacing='-0.5'>BD</text></svg>",
        type: "image/svg+xml",
      }
    ],
    shortcut: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%25' stop-color='%238B5CF6'/><stop offset='100%25' stop-color='%2306B6D4'/></linearGradient></defs><rect width='32' height='32' rx='4' fill='url(%23g)'/><text x='16' y='23' text-anchor='middle' font-family='system-ui' font-size='18' font-weight='900' fill='white' letter-spacing='-0.5'>BD</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}