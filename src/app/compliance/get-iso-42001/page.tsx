'use client';
import React from 'react';
import Head from 'next/head';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import MetricsSection from './components/MetricsSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import { iso42001Data } from './constants/iso42001Data';
import BookADemo from '../components/BookADemo';

const Page = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'ISO 42001 Compliance Services',
    description: iso42001Data.pageDescription.join(' '),
    brand: 'Hexafort',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: 35,
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
        <HeroSection />
        <BenefitsSection />
        <MetricsSection />
        <ScreenshotsSection />
        <ProcessSection />
        <BookADemo/>
        <FAQSection />
      </main>
    </>
  );
};

export default Page;
