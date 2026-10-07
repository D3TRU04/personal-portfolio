// Imports global styles, must be at the top
import '@/styles/globals.css';

import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE_NAME } from '@/data/site';

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
  creator: SITE_NAME,
};

const roboto = Roboto_Mono({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

// Root layout component that wraps every page
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${roboto.className} flex flex-col min-h-screen`}
    >
      {/* Body with flex column to push footer to the bottom */}
      <body className="flex flex-col min-h-screen text-foreground">
        <Header />
        <main className="flex-grow px-6">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
