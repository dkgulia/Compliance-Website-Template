import { Metadata } from 'next';
import integrationsData from './constants/integrationsData';

const { pageTitle, pageDescription, keywords } = integrationsData;

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords.join(', '),
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: '/images/og-integrations.jpg',
                width: 1200,
                height: 630,
                alt: 'Hexafort Integrations',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: pageDescription,
        images: ['/images/og-integrations.jpg'],
    },
};

export default metadata;