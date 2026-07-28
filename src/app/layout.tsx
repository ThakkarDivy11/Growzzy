import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CursorGlow } from '@/components/ui/CursorGlow';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const fontClash = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-clash',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Growzzy | Digital Marketing Agency Ahmedabad | Meta Ads, SEO & Brand Growth',
  description:
    'Growzzy is an ultra-premium digital marketing agency in Ahmedabad. We help businesses generate high quality leads, scale sales, and dominate digital through Meta Ads, Google Ads, SEO & 4K video reel production.',
  keywords: [
    'Digital Marketing Agency Ahmedabad',
    'Growzzy',
    'Growzzy Digital',
    'Meta Ads Agency Gujarat',
    'Google Ads Specialist Ahmedabad',
    'SEO Agency Ahmedabad',
    'Performance Marketing Agency India',
    'Social Media Management Ahmedabad',
  ],
  authors: [{ name: 'Growzzy Digital Agency' }],
  openGraph: {
    title: 'Growzzy | Grow Faster. Scale Smarter. Dominate Digital.',
    description:
      'We help businesses generate more leads, increase sales, and build unforgettable brands.',
    url: 'https://growzzy.in',
    siteName: 'Growzzy Digital Marketing',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fontClash.variable} scroll-smooth`}>
      <body className="antialiased bg-[#F8FAFC] text-[#071B3B] selection:bg-[#FF4D4D] selection:text-white">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
