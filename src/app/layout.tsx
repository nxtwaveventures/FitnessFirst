import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anamikafitness.com'),
  title: 'Anamika Fitness - Revolutionary Bhangra Aerobics Fusion',
  description: 'Transform your fitness journey with Bhangra Aerobics - a unique fusion of high-energy Bhangra dance and modern aerobics. Join certified instructor Anamika for a cultural fitness experience.',
  keywords: ['Bhangra Aerobics', 'Fitness Classes', 'Dance Workout', 'Cultural Fitness', 'Aerobics', 'Bhangra Dance', 'Fitness Fusion'],
  authors: [{ name: 'Anamika' }],
  creator: 'Anamika',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://anamikafitness.com',
    siteName: 'Anamika Fitness',
    title: 'Anamika Fitness - Revolutionary Bhangra Aerobics Fusion',
    description: 'Transform your fitness journey with Bhangra Aerobics - a unique fusion of high-energy Bhangra dance and modern aerobics.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anamika Fitness - Bhangra Aerobics Fusion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anamika Fitness - Revolutionary Bhangra Aerobics Fusion',
    description: 'Transform your fitness journey with Bhangra Aerobics',
    images: ['/images/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FF4B2B',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
