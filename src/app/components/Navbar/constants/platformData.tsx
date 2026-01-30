import React from 'react';
import {
  Security as SecurityIcon,
  AutoAwesome as AutoAwesomeIcon,
  Shield as ShieldIcon,
  Cloud as CloudIcon,
  Business as BusinessIcon,
  BugReport as BugReportIcon,
  Policy as PolicyIcon,
  Verified as VerifiedIcon,
  Link as LinkIcon,
  Dashboard as DashboardIcon,
  Storefront as StorefrontIcon,
  BusinessCenter as BusinessCenterIcon,
  Assessment as AssessmentIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

import {
  WORKSTATION,
  HOME,
  RISK_MANAGEMENT,
  GRC_TOOL,
  PLATFORM,
  CLOUD_SECURITY_POSTURE_MANAGEMENT,
  THIRD_PARTY_RISK_MANAGEMENT,
  VULNERABILITY_ASSESSMENT,
  AUTOMATED_EVIDENCE_COLLECTION,
  TRUST_CENTER,
  CUSTOMIZABLE_CONTROL_FRAMEWORK,
  SECURITY_TRAINING,
  INTEGRATIONS,
  SOLUTIONS_FOR_STARTUPS,
  SOLUTIONS,
  COMPLIANCE
} from '../../../constants/routes';

export interface PlatformFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isNew?: boolean;
}

export const platformFeatures: PlatformFeature[] = [
  {
    title: 'Centralised Risk Management',
    description:
      'Efficiently manage all your organizational risks in one place',
    icon: <SecurityIcon />,
    href: RISK_MANAGEMENT,
  },
  {
    title: 'Automated Governance, Risk & Compliance Tool',
    description: 'Streamline your GRC processes with intelligent automation',
    icon: <AutoAwesomeIcon />,
    href: GRC_TOOL,
  },
  {
    title: 'ComplianceHub Platform',
    description: 'Comprehensive security solution for your enterprise',
    icon: <ShieldIcon />,
    href: PLATFORM,
  },
  {
    title: 'Cloud Security Posture Management',
    description: 'Monitor and secure your cloud infrastructure',
    icon: <CloudIcon />,
    href: CLOUD_SECURITY_POSTURE_MANAGEMENT,
  },
  {
    title: 'Third Party Risk Management',
    description: 'Assess and manage risks from third-party vendors',
    icon: <BusinessIcon />,
    href: THIRD_PARTY_RISK_MANAGEMENT,
  },
  {
    title: 'Security Training',
    description: 'Identify, prioritize, and remediate security vulnerabilities',
    icon: <BugReportIcon />,
    href: SECURITY_TRAINING,
  },
  {
    title: 'Automated Evidence Collection',
    description: 'Gather, map, and monitor audit evidence automatically',
    icon: <PolicyIcon />,
    href: AUTOMATED_EVIDENCE_COLLECTION,
  },
  {
    title: 'Trust Center',
    description: 'Build customer trust with transparent security practices',
    icon: <VerifiedIcon />,
    href: TRUST_CENTER,
  },
  {
    title: 'Integrations',
    description: 'Connect with your existing tools and systems',
    icon: <LinkIcon />,
    href: INTEGRATIONS,
  },
  {
    title: 'Customizable Control Framework',
    description:
      'Tailor security controls to match your unique business needs',
    icon: <DashboardIcon />,
    href: CUSTOMIZABLE_CONTROL_FRAMEWORK,
    isNew: true,
  },
];

export const companySizeOptions = [
  {
    title: 'ComplianceHub For Startups',
    description: 'Fast track compliance with ready tools',
    href: SOLUTIONS_FOR_STARTUPS,
    icon: <StorefrontIcon />,
  }
];

export const solutionItems = [
  {
    title: 'Continuous Compliance',
    href: COMPLIANCE,
  },
 
];

export const sidebarCategories = [
  {
    title: 'BY COMPANY SIZE',
    id: 'company-size',
  },
  {
    title: 'ALL SOLUTIONS',
    id: 'all-solutions',
  },
];