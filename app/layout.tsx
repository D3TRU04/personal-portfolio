// Imports global styles, must be at the top
import '../styles/globals.css';

// Component imports for consistent page structure
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Font and analytics imports
import { Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import localFont from 'next/font/local';

// Type import for metadata
import type { Metadata } from 'next';

// Metadata for SEO purposes. This is the information that will be used by search engines.
export const metadata: Metadata = {
  title: 'dan truong | portfolio',
  description: "Dan Truong's Personal Portfolio.",
  keywords: [
    'Dan',
    'Truong',
    'Dan Truong',
    'dan',
    'truong',
    'dantruong',
    'd3tru04',
    'portfolio',
    'developer',
    'software engineer',
  ],
  creator: 'Dan Truong',
};

// Styles for LaTeX rendering
import 'katex/dist/katex.min.css';

// Font configuration for Roboto Mono
const roboto = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

// Root layout component that wraps every page
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} flex flex-col min-h-screen`}
    >
      <head>
        {/* Favicon for the site */}
        <link rel="icon" type="image/x-icon" href="/images/AP.png" />
      </head>
      {/* Body with flex column to push footer to the bottom */}
      <body className="flex flex-col min-h-screen text-foreground">
        <Header />
        {/* Main content area where page components are rendered */}
        <main className="flex-grow px-6">{children}</main>
        {/* Vercel Analytics component for tracking page views */}
        <Analytics />
      </body>
    </html>
  );
}
