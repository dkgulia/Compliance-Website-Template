'use client';

import React from 'react';
import { riskManagementData } from './constants/riskManagementData';

const RiskManagementLayout = ({ children }: { children: React.ReactNode }) => {
    // Add structured data for SEO
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'HexaFort Risk Management',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web-based',
        description: riskManagementData.pageDescription.join(' '),
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            description: 'Free trial available'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '38',
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            {children}
        </>
    );
};

export default RiskManagementLayout;