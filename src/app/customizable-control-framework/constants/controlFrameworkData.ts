import {
  Settings as SettingsIcon,
  Handyman as HandymanIcon,
  Tune as TuneIcon,
  People as PeopleIcon,
  Code as CodeIcon,
  Security as SecurityIcon,
  Psychology as PsychologyIcon,
  Extension as ExtensionIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  Speed as SpeedIcon,
} from '@mui/icons-material';

export type Benefit = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type Process = {
  title: string;
  description: string;
  icon?: React.ElementType;
  imageAlt?: string;
};

export type Question = {
  question: string;
  answer: string;
};

export const controlFrameworkData = {
  pageTitle: 'Customizable Control Framework | Hexafort',
  pageSubTitle: 'Compliance That Fits You: Tailored, Adaptable, Future-Ready',
  pageDescription: [
    "Hexafort's flexible control framework allows organizations to add, modify, and tailor security controls across any compliance standard without code. Adapt to your business needs, industry specifics, and operational reality.",
  ],
  keywords: [
    'customizable compliance controls',
    'security control framework',
    'flexible compliance framework',
    'compliance management system',
    'framework-agnostic controls',
    'control mapping',
    'security control customization',
    'Hexafort control framework',
    'control management platform',
  ],
  sections: {
    hero: {
      title: 'Customizable Control Framework – Compliance That Fits You',
      subtitle:
        'Every organization has different risks, goals, and operational needs',
      description: [
        "At Hexafort, we understand that security and compliance aren't one-size-fits-all. Every organization has different risks, goals, and operational needs. That's why we built our control framework to be flexible, intuitive, and completely customizable.",
        "Whether you're aligning with ISO 27001, SOC 2, GDPR, or any other standard, Hexafort gives you full control over your controls. You can add, remove, or tailor security controls to match your internal policies, industry demands, and business priorities—all without writing a single line of code.",
      ],
      imageAlt: 'Customizable control interface with drag-and-drop controls',
      ctaText: 'Get Started',
    },
    benefits: {
      title: "Why You'll Love It",
      subtitle: '',
      items: [
        {
          title: 'Complete Flexibility',
          icon: HandymanIcon,
          description:
            'Modify existing controls or create new ones from scratch based on your specific compliance goals or operational reality.',
        },
        {
          title: 'Framework-Agnostic & Future-Ready',
          icon: ExtensionIcon,
          description:
            "Whether you're following one standard or managing several, our platform adapts to your workflows—not the other way around.",
        },
        {
          title: 'Tailored for Your Business Needs',
          icon: TuneIcon,
          description:
            'Apply risk ratings, map to multiple frameworks, or enforce internal controls that reflect your unique environment and culture.',
        },
        {
          title: 'Built for Collaboration',
          icon: PeopleIcon,
          description:
            'Your team can work together in real-time to adjust, review, and align controls with evolving security strategies.',
        },
        {
          title: 'No Complexity. No Coding.',
          icon: CodeIcon,
          description:
            'Make updates with a few clicks through a clean, user-friendly interface—saving time while ensuring full traceability.',
        },
      ],
    },
    features: {
      title: 'Key Features',
      subtitle: 'Powerful Tools to Manage Your Control Framework',
      items: [
        {
          title: 'Control Hierarchy',
          icon: SettingsIcon,
          description:
            'Organize controls in logical groupings to match your organizational structure or compliance requirements.',
        },
        {
          title: 'Multi-Framework Mapping',
          icon: AssignmentTurnedInIcon,
          description:
            'Map a single control to multiple frameworks (ISO, SOC 2, GDPR, NIST) to streamline compliance efforts.',
        },
        {
          title: 'Custom Control Creation',
          icon: TuneIcon,
          description:
            "Design controls specific to your organization's needs that go beyond standard requirements.",
        },
        {
          title: 'Risk-Based Controls',
          icon: SecurityIcon,
          description:
            'Prioritize and implement controls based on risk assessment findings for a targeted approach.',
        },
        {
          title: 'Intelligent Inheritance',
          icon: PsychologyIcon,
          description:
            'Apply controls hierarchically across business units while allowing for local exceptions when needed.',
        },
        {
          title: 'Performance Metrics',
          icon: SpeedIcon,
          description:
            'Track control effectiveness with real-time dashboards and actionable insights.',
        },
      ],
    },
    process: {
      title: 'How It Works',
      subtitle: 'Simple Steps to Customize Your Controls',
      steps: [
        {
          title: 'Import Your Framework',
          description:
            'Start with pre-built templates for common frameworks or import your existing control set.',
          imageAlt:
            'Template selection screen with popular compliance frameworks',
        },
        {
          title: 'Customize Controls',
          description:
            'Modify control descriptions, implementation details, and evidence requirements to match your operations.',
          imageAlt: 'Control editing interface with customization options',
        },
        {
          title: 'Map & Connect',
          description:
            'Link controls across multiple frameworks to eliminate duplication and streamline compliance management.',
          imageAlt: 'Visual control mapping between different frameworks',
        },
        {
          title: 'Assign & Monitor',
          description:
            'Delegate control ownership, track implementation status, and measure effectiveness continuously.',
          imageAlt: 'Dashboard showing control ownership and status tracking',
        },
      ],
    },
    callToAction: {
      title:
        'Customize with confidence. Align with purpose. Stay compliant—your way.',
      description:
        'Take control of your compliance program with a framework that adapts to your business—not the other way around.',
      ctaText: 'Book a Demo',
      imageAlt: 'User customizing controls on the Hexafort platform',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: '',
      questions: [
        {
          question: 'Can I import my existing controls from another system?',
          answer:
            'Yes. Hexafort supports importing controls from spreadsheets, JSON files, and directly from other GRC platforms to minimize duplicate work.',
        },
        {
          question: 'How does control mapping work across multiple frameworks?',
          answer:
            'Our platform maintains a relationship database that allows a single control to satisfy requirements across multiple frameworks. When you update implementation evidence, it automatically applies to all mapped frameworks.',
        },
        {
          question: 'Can I create organization-specific controls?',
          answer:
            'Absolutely. Beyond standard framework controls, you can create custom controls specific to your internal policies, industry requirements, or unique risks.',
        },
        {
          question: 'How do you handle framework updates?',
          answer:
            'When standards are updated (e.g., ISO 27001:2022), Hexafort provides migration tools to compare changes, map existing controls to new requirements, and identify gaps requiring attention.',
        },
        {
          question:
            'Can I set different implementation requirements by department?',
          answer:
            "Yes, our intelligent inheritance model allows you to define global controls while enabling variations in how they're implemented across different business units or geographic locations.",
        },
        {
          question: 'What happens to my customizations during audits?',
          answer:
            'Hexafort maintains a complete audit trail of all control customizations, providing clear documentation of what was changed, why, and how it maps to standard requirements—making auditor reviews seamless.',
        },
      ],
    },
  },
};

export default controlFrameworkData;
