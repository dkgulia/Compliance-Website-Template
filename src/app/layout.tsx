import type { Metadata } from 'next';
import { Figtree, Atkinson_Hyperlegible } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '../themeRegistry';
import Footer from './components/Footer';
import AppBarB2B from './components/Navbar/AppBarB2B';
import CookieBanner from './components/CookieBanner';

const figtree = Figtree({
  variable: '--font-figtree-sans',
  subsets: ['latin'],
});

const atkinsonMono = Atkinson_Hyperlegible({
  variable: '--font-atkinson-mono',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ComplianceHub - AI-Powered Compliance & Security Platform',
  description: 'Automate compliance, streamline security operations, and achieve certifications faster with ComplianceHub. SOC 2, ISO 27001, HIPAA, GDPR and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${atkinsonMono.variable}`}>
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body>
        <ThemeRegistry>
          <AppBarB2B />
          {children}
          <CookieBanner/>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}