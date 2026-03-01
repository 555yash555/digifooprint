import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans bg-gray-50 text-gray-900 antialiased selection:bg-indigo-500/30`}
      >
        {children}
      </body>
    </html>
  );
}
