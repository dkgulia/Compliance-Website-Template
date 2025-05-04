import { Metadata } from 'next';
import { riskManagementData } from './constants/riskManagementData';

export const metadata: Metadata = {
    title: riskManagementData.pageTitle,
    description: riskManagementData.pageDescription.join(' '),
    keywords: riskManagementData.keywords,
};