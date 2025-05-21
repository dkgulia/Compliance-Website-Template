
import React from 'react';
import { Metadata } from 'next';
import Iso27001HeroSection from './components/Iso27001HeroSection';
import Iso27001FeaturesSection from './components/Iso27001FeaturesSection';
import Iso27001ControlsSection from './components/Iso27001ControlsSection';
import Iso27001FaqSection from './components/Iso27001FaqSection';

import { iso27001Data } from './constants/iso27001Data';
import Head from 'next/head';

import Iso27001Banner from './components/Iso27001Banner';
import Iso27001ComplianceHub from './components/Iso27001ComplianceHub';
import Iso27001ComplianceWorkflow from './components/Iso27001ComplianceWorkflow';

export const metadata: Metadata = {
  title: `${iso27001Data.pageTitle} | Hexafort`,
  description: iso27001Data.pageDescription.join(' '),
  keywords: iso27001Data.keywords,
};

const Page = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ISO 27001 Compliance Services',
    description: iso27001Data.pageDescription.join(' '),
    brand: 'Hexafort',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: 50,
    },
  };

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main style={{ backgroundColor: '#000000' }}>
        <Iso27001HeroSection />
        <Iso27001FeaturesSection />
        <Iso27001ComplianceHub />
        <Iso27001ComplianceWorkflow />
        <Iso27001ControlsSection />
        <Iso27001Banner />
        <Iso27001FaqSection />
      </main>
    </>
  );
};

export default Page;
