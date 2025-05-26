import iso27001 from '../compliance/images/27001.png';
import iso27018 from '../compliance/images/compliance27018.png';
import soc2 from '../compliance/images/complianceSOC2.png';
import gdpr from '../compliance/images/complianceGDPR.png';
import hipaa from '../compliance/images/hipaa.png';
import ccpa from '../compliance/images/complianceCCPA.png';
import pcidss from '../compliance/images/compliancePCIDSS.png';
import iso20000 from '../compliance/images/iso20000-1.png';
import iso27701 from '../compliance/images/27701-logo.png';
import dora from '../compliance/images/dora.png';
import iso42001 from '../compliance/images/42001.png';
import cmmc from '../compliance/images/cmmc.png';
import iso27017 from '../compliance/images/compliance27017.png';
import { StaticImageData } from 'next/image';

export interface ComplianceFramework {
  title: string;
  description: string;
  logo: string | StaticImageData;
  url: string;
}

export const primaryFrameworks: ComplianceFramework[] = [
  {
    title: 'ISO 27001',
    description:
      'International standard for managing information security, protecting sensitive data.',
    logo: iso27001,
    url: '/compliance/get-iso-27001',
  },
  {
    title: 'ISO 42001',
    description:
      'First international standard for AI Management Systems (AIMS) to ensure responsible AI.',
    logo: iso42001,
    url: '/compliance/get-iso-42001',
  },
  {
    title: 'SOC 2',
    description:
      'Manages customer data security, availability, confidentiality, and privacy.',
    logo: soc2,
    url: '/compliance/get-soc-2',
  },
  {
    title: 'PCI DSS',
    description:
      'Protects cardholder data by enforcing strict security measures for payment cards.',
    logo: pcidss,
    url: '/compliance/get-pci-dss',
  },
  {
    title: 'GDPR',
    description:
      'Protects personal data privacy, ensuring strict data handling rules and user control.',
    logo: gdpr,
    url: '/compliance/get-gdpr',
  },
  {
    title: 'HIPAA',
    description: 'Ensures confidentiality and security for healthcare data.',
    logo: hipaa,
    url: '/compliance/get-hipaa',
  },
  {
    title: 'CMMC',
    description:
      'Cybersecurity Maturity Model Certification for defense contractors.',
    logo: cmmc,
    url: '/compliance/get-cmmc',
  },
  {
    title: 'DORA',
    description:
      'Digital Operations Resilience Act compliance for financial entities.',
    logo: dora,
    url: '/compliance/get-dora',
  },
];

export const secondaryFrameworks: ComplianceFramework[] = [
  {
    title: 'ISO 27701',
    description:
      'Enhances transparency and accountability in data processing to facilitate compliance.',
    logo: iso27701,
    url: '/compliance/get-iso-27701',
  },
  // {
  // 	title: 'ISO 27017',
  // 	description: 'Security controls for cloud services.',
  // 	logo: iso27017,
  // 	url: '/compliance/get-iso-27017',
  // },
  {
    title: 'ISO 27018',
    description:
      'Protects PII in cloud services by ensuring compliance with privacy standards.',
    logo: iso27018,
    url: '/compliance/get-iso-27018',
  },
  {
    title: 'CCPA',
    description:
      'Protects California residents rights over their personal data.',
    logo: ccpa,
    url: '/compliance/ccpa-compliance',
  },
  // {
  // 	title: 'PDPA',
  // 	description: 'Personal Data Protection Act governing data privacy.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/pdpa',
  // },
  // {
  // 	title: 'CSA STAR',
  // 	description: 'Security assurance in cloud computing.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/csa-star',
  // },
  // {
  // 	title: 'NIST CSF',
  // 	description: 'Framework for improving critical infrastructure cybersecurity.',
  // 	logo: nist,
  // 	url: '/compliance/nist-csf',
  // },
  // {
  // 	title: 'NIST 800-171',
  // 	description: 'Protecting controlled unclassified information.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/nist-800-171',
  // },
  // {
  // 	title: 'NIST 800-53',
  // 	description: 'Security and privacy controls for federal information systems.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/nist-800-53',
  // },
  // {
  // 	title: 'NIST AI RMF',
  // 	description: 'AI Risk Management Framework.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/nist-ai-rmf',
  // },
  // {
  // 	title: 'CMMI',
  // 	description: 'Capability Maturity Model Integration.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/cmmi',
  // },
  // {
  // 	title: 'ISO 22301',
  // 	description: 'Business continuity management systems.',
  // 	logo: iso22301,
  // 	url: '/compliance/iso-22301',
  // },
  //   {
  //     title: 'ISO 20000-1',
  //     description: 'IT service management system requirements.',
  //     logo: iso20000,
  //     url: '/compliance/iso-20000-1',
  //   },
  // {
  // 	title: 'ISO 13485',
  // 	description: 'Quality management systems for medical devices.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/iso-13485',
  // },
  // {
  // 	title: 'Cyber Essentials',
  // 	description: 'UK government-backed scheme to protect against cyber attacks.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/cyber-essentials',
  // },
  // {
  // 	title: 'ISO 9001',
  // 	description: 'Quality management systems standard.',
  // 	logo: placeholderImage,
  // 	url: '/compliance/iso-9001',
  // }
];

export const complianceItems: ComplianceFramework[] = [
  ...primaryFrameworks,
  ...secondaryFrameworks,
];

export enum ComplianceOptions {
  ISO27001 = 'ISO 27001',
  ISO42001 = 'ISO 42001',
  ISO27018 = 'ISO 27018',
  SOC2 = 'SOC 2',
  GDPR = 'GDPR',
  HIPAA = 'HIPAA',
  CCPA = 'CCPA',
  PCI_DSS = 'PCI DSS',
  NIST = 'NIST Frameworks',
  ISO22301 = 'ISO 22301',
  ISO20000_1 = 'ISO 20000-1',
  ISO27701 = 'ISO 27701',
  DORA = 'DORA',
  CMMC = 'CMMC',
  PDPA = 'PDPA',
}

export const primaryCompliance = [
  'ISO 27001:2022',
  'ISO 42001:2023',
  'GDPR',
  'HIPAA',
  'SOC2 Type1',
  'SOC2 Type2',
  'PCI DSS',
  'DORA',
  'PDPA',
  'CMMC',
  'PCIDSS',
];

export const complianceOptionsArray = Object.values(ComplianceOptions);
