import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'DigiFootprint — From idea to brand in 60 seconds',
  description:
    'Enter your business idea and get a complete brand kit — name, colors, fonts, copy, SEO keywords, and a logo prompt. All powered by AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${plusJakarta.variable} ${inter.variable} font-sans bg-[#0A0A0B] text-gray-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
