import React from 'react';
import {
  Phone as PhoneIcon,
  Article as ArticleIcon,
  AssignmentInd as AssignmentInd,
  WorkspacePremium as WorkspacePremiumIcon,
} from '@mui/icons-material';

export interface AboutItem {
  href: string;
  icon: React.ReactNode;
  title: string;
}

import {
  CONTACT_US,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
} from '../../../constants/routes';

export const aboutItems: AboutItem[] = [
  {
    href: CONTACT_US || '/contact-us',
    icon: <PhoneIcon />,
    title: 'Contact Us',
  },
  {
    href: PRIVACY_POLICY || '/privacy-policy',
    icon: <WorkspacePremiumIcon />,
    title: 'Privacy Policy',
  },
  {
    href: TERMS_AND_CONDITIONS || '/terms-conditions',
    icon: <AssignmentInd />,
    title: 'Terms & Conditons',
  },
];

export const featuredContent = {
  title: 'Book a Demo',
  description:
    'Experience the power of ComplianceHub firsthand with our personalized demo',
  buttonText: 'Schedule Now',
  href: '/get-a-product-demo',
};
