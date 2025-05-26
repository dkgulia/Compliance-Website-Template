import { SvgIconProps } from '@mui/material';
import { Security, Policy, CheckCircle, BarChart, Shield, GroupWork } from '@mui/icons-material';



// Example interface for feature items
interface NistFeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType<SvgIconProps>;
}

// Example interface for "hub" items
interface NistHubItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType<SvgIconProps>;
}

// Example interface for workflow items
interface NistWorkflowItem {
  title: string;
  icon: React.ElementType<SvgIconProps>;
}

// Example interface for FAQ
interface NistFaqItem {
  question: string;
  answer: string;
}

export const nistFeatures: NistFeatureItem[] = [
  {
    id: 1,
    title: 'Identify',
    description:
      'Gain complete visibility into assets, data, and vulnerabilities to better manage risk and align with NIST CSF requirements.',
    icon: Security,
  },
  {
    id: 2,
    title: 'Protect',
    description:
      'Implement security controls and best practices to safeguard your infrastructure and critical data from threats.',
    icon: Policy,
  },
  {
    id: 3,
    title: 'Detect',
    description:
      'Continuously monitor activities to quickly detect anomalous behavior, breaches, or compliance gaps.',
    icon: CheckCircle,
  },
];

export const nistHub: NistHubItem[] = [
  {
    id: 1,
    title: 'Framework Core',
    description: 'Comprehensive controls covering all NIST CSF Functions—Identify, Protect, Detect, Respond, Recover.',
    icon: Security,
  },
  {
    id: 2,
    title: 'Implementation Tiers',
    description: 'Adaptable security maturity tiers to match your organization size, complexity, and risk appetite.',
    icon: Policy,
  },
  {
    id: 3,
    title: 'Profiles',
    description: 'Align controls to business objectives, risk tolerance, and resource availability in a structured approach.',
    icon: CheckCircle,
  },
];

export const nistWorkflow = [
  {
    title: 'Perform Risk Assessment',
    icon: Security,
  },
  {
    title: 'Develop Action Plans',
    icon: Policy,
  },
  {
    title: 'Monitor & Report',
    icon: CheckCircle,
  },
  {
    title: 'Analyze Trends',
    icon: BarChart,
  },
  {
    title: 'Implement Controls',
    icon: Shield,
  },
  {
    title: 'Collaborate Teams',
    icon: GroupWork,
  }
];

export const nistFaq: NistFaqItem[] = [
  {
    question: 'What is the NIST Cybersecurity Framework?',
    answer:
      'The NIST Cybersecurity Framework is a policy framework of computer security guidance, developed by the National Institute of Standards and Technology. It outlines how organizations can assess and improve their ability to prevent, detect, and respond to cyber attacks.',
  },
  {
    question: 'Who needs to comply with the NIST Framework?',
    answer:
      'While originally designed for critical infrastructure, organizations in various industries adopt the NIST CSF because of its best practices, flexible approach, and global recognition.',
  },
  {
    question: 'How does HexaFort streamline NIST implementation?',
    answer:
      'HexaFort automates key security controls, centralizes documentation, and provides continuous monitoring to ensure you stay aligned with all five core NIST CSF functions.',
  },
  {
    question: 'How long does it take to adopt NIST CSF?',
    answer:
      'The timeline varies depending on organizational complexity, existing security posture, and resource allocation. HexaFort can significantly reduce the time needed by automating many manual tasks.',
  },
];