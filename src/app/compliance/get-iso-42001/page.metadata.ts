import { iso42001Data } from './constants/iso42001Data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: iso42001Data.pageTitle,
    description: iso42001Data.pageDescription.join(' '),
    keywords: iso42001Data.keywords,
};