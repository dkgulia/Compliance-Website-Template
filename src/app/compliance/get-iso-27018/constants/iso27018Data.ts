import { SvgIconComponent } from '@mui/icons-material';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PolicyIcon from '@mui/icons-material/Policy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Iso27018Step {
  title: string;
  icon: React.ElementType;
}

interface Iso27018Feature {
  id: number;
  title: string;
  description: string;
  icon: SvgIconComponent;
}

interface Iso27018Faq {
  question: string;
  answer: string;
}

export const iso27018Features = [
  {
    id: 1,
    title: 'PII-Centric Controls',
    description:
      'Focuses specifically on protecting personally identifiable information processed by cloud service providers.',
    icon: SecurityIcon,
  },
  {
    id: 2,
    title: 'Transparent Data Handling',
    description:
      'Requires clear and open communication with customers about how their data is managed and protected in the cloud.',
    icon: PolicyIcon,
  },
  {
    id: 3,
    title: 'Regulatory Compliance',
    description:
      'Aligns with various data protection laws like GDPR, enabling easier adherence to global regulations and legal mandates.',
    icon: AssessmentIcon,
  },
] as Iso27018Feature[];

export const workflow = [
  {
    title: 'Gap Assessment',
    icon: VerifiedUserIcon,
  },
  {
    title: 'Remediation & Planning',
    icon: CloudDoneIcon,
  },
  {
    title: 'Control Implementation',
    icon: SecurityIcon,
  },
  {
    title: 'Continuous Monitoring',
    icon: CheckCircleIcon,
  },
] as Iso27018Step[];

export const faq = [
  {
    question: 'What is ISO 27018?',
    answer:
      'ISO 27018 is an international standard targeting the protection of personally identifiable information (PII) in cloud services, supplementing ISO 27001 with specific privacy controls.',
  },
  {
    question: 'How does ISO 27018 differ from ISO 27001?',
    answer:
      'ISO 27001 sets requirements for information security management systems broadly. ISO 27018 zeroes in on safeguarding PII in cloud settings. If you already have ISO 27001, ISO 27018 focuses on privacy and data protection controls specifically for cloud environments.',
  },
  {
    question: 'Is AWS ISO 27018 certified?',
    answer:
      'Yes, AWS holds ISO 27018 certification for many of its services, affirming that it meets internationally recognized controls to protect personal data in the cloud.',
  },
  {
    question: 'What are the benefits of ISO 27018?',
    answer:
      'Greater trust from clients, streamlined regulatory compliance, robust privacy controls, and minimized risk of data breaches for cloud-based environments.',
  },
  {
    question: 'How do I become ISO 27018 certified?',
    answer:
      'Ensure you have a strong ISO 27001 foundation, add privacy-specific processes and controls, perform internal audits, and then schedule a certification audit with an accredited body.',
  },
] as Iso27018Faq[];
