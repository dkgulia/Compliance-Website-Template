import { Metadata } from 'next';
import evidenceCollectionData from './constants/evidenceCollectionData';

export const metadata: Metadata = {
  title: evidenceCollectionData.pageTitle,
  description: evidenceCollectionData.pageDescription,
  keywords: evidenceCollectionData.keywords.join(', '),
  openGraph: {
    title: evidenceCollectionData.pageTitle,
    description: evidenceCollectionData.pageDescription,
    type: 'website',
  },
};

export default metadata;
