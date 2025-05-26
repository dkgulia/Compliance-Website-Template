

import { SvgIconProps } from '@mui/material';
import { Policy, VerifiedUser, GppGood } from '@mui/icons-material';

interface CcpaFeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType<SvgIconProps>;
}

interface CcpaTableItem {
  right: string;
  definition: string;
  approach: string;
}

interface CcpaFaqItem {
  question: string;
  answer: string;
}

export const ccpaFeatures: CcpaFeatureItem[] = [
  {
    id: 1,
    title: 'Data Inventory & Mapping',
    description: 'Identify personal data flow, from collection to storage, to ensure transparency & accountability.',
    icon: Policy,
  },
  {
    id: 2,
    title: 'User Consent & Opt-Out',
    description: 'Provide clear opt-out mechanisms and manage consumer requests swiftly, building consumer trust.',
    icon: VerifiedUser,
  },
  {
    id: 3,
    title: 'Security & Breach Response',
    description: 'Implement robust safeguards to protect data, and define incident response procedures for potential breaches.',
    icon: GppGood,
  },
];

export const ccpaTableItems: CcpaTableItem[] = [
  {
    right: 'Right to Know',
    definition: 'Users can request what personal data is collected, used, or sold.',
    approach: 'HexaFort logs data assets, making them easily retrievable for DSAR (Data Subject Access Requests).',
  },
  {
    right: 'Right to Delete',
    definition: 'Users can request deletion of their personal data in certain circumstances.',
    approach: 'We track data lifecycles and implement automated erasure workflows upon user requests.',
  },
  {
    right: 'Right to Opt-Out',
    definition: 'Users can opt out of having their personal data sold to third parties.',
    approach: 'Provide dedicated portals or forms, ensuring seamless opt-out and preference management.',
  },
  {
    right: 'Right to Non-Discrimination',
    definition: 'Ensures equal service quality even after opting out or exercising CCPA rights.',
    approach: 'HexaFort monitors service policies to ensure consistent experiences for all users, no paywalls or blocking.',
  },
];

export const ccpaFaq: CcpaFaqItem[] = [
  {
    question: 'What is the CCPA?',
    answer:
      'The California Consumer Privacy Act (CCPA) grants California residents greater control over their personal information. It applies to for-profit organizations that process the personal data of California residents.',
  },
  {
    question: 'Who must comply with CCPA?',
    answer:
      'Businesses operating in California, meeting certain revenue or data-processing thresholds, must comply. This includes companies outside of California that handle California residents’ personal data.',
  },
  {
    question: 'How does HexaFort help with DSARs?',
    answer:
      'HexaFort automatically logs data usage and location, easing the burden of Data Subject Access Requests (DSARs). Our tool quickly compiles data for user requests.',
  },
  {
    question: 'What if I already comply with GDPR?',
    answer:
      'CCPA has unique requirements, especially around “sale” of data and opt-out rights. HexaFort unifies compliance needs so you can tackle both GDPR and CCPA simultaneously.',
  },
  {
    question: 'Is there any difference between CPRA and CCPA?',
    answer:
      'CPRA is an amendment to CCPA that expands some consumer rights and business obligations. HexaFort continuously updates to reflect the latest California privacy laws, including CPRA changes.',
  },
];


