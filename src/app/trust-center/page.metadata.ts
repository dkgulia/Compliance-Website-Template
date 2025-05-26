import { Metadata } from 'next';
import { trustCenterPageData } from './constants/trustCenterPageData';

export const metadata: Metadata = {
  title: trustCenterPageData.pageTitle,
  description: trustCenterPageData.pageDescription.join(' '),
  keywords: trustCenterPageData.keywords,
};