import VisibilityIcon from '@mui/icons-material/Visibility';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SecurityIcon from '@mui/icons-material/Security';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HistoryIcon from '@mui/icons-material/History';
import InsightsIcon from '@mui/icons-material/Insights';
import WarningIcon from '@mui/icons-material/Warning';
import DescriptionIcon from '@mui/icons-material/Description';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import LockIcon from '@mui/icons-material/Lock';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LaptopIcon from '@mui/icons-material/Laptop';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export const trustCenterPageData = {
  pageTitle: 'Hexafort Trust Center | Turn Transparency into Trust',
  pageSubTitle:
    'Real-time security & compliance portal that accelerates vendor reviews and wins confidence instantly.',
  pageDescription: [
    'Trust Center – Turn Transparency into Trust',
    "In today's digital world, trust is everything. Your customers and partners want to know they're working with an organization that takes security seriously. But showing that—without overwhelming your team or exposing sensitive details—can be a challenge.",
    "That's where Hexafort's Trust Center comes in.",
  ],
  keywords: [
    'trust center',
    'security trust center',
    'trust center software',
    'customer trust portal',
    'vendor security reviews',
    'automated NDA',
    'security questionnaire automation',
    'share security documentation',
    'accelerate security reviews',
    'real-time compliance status',
  ],
  sections: {
    hero: {
      title: 'Trust Center – Turn Transparency into Trust',
      subtitle:
        'Securely showcase your security posture, compliance controls, and certifications in one branded portal.',
      description: [
        'Our Trust Center empowers you to securely showcase your security posture, compliance controls, policies, and certifications—all in one professional, easy-to-access portal.',
        'Once a customer signs an NDA, they gain controlled access to the right information, giving them the confidence they need to move forward.',
      ],
      ctaText: 'Book Your Demo',
    },
    benefits: {
      title: 'Why Your Customers Will Love It (And You Will Too)',
      subtitle: 'Four standout advantages',
      features: [
        {
          title: 'Controlled Transparency',
          icon: VisibilityIcon,
          description:
            "Share only what's necessary under strict NDA and permission settings.",
        },
        {
          title: 'Build Instant Credibility',
          icon: HandshakeIcon,
          description:
            'Structured, professional space that sets you apart as a trustworthy partner.',
        },
        {
          title: 'Save Your Team Time',
          icon: ScheduleIcon,
          description:
            'No more endless questionnaires—let the Trust Center speak automatically.',
        },
        {
          title: 'Continuously Updated',
          icon: AutorenewIcon,
          description:
            'As your compliance posture improves, your Trust Center reflects it in real time.',
        },
      ],
    },
    workflow: {
      title: 'How It Works',
      subtitle: 'A streamlined four-step workflow',
      steps: [
        {
          heading: '1. Connect & Import',
          description:
            'Sync policies, reports, and control data from Hexafort or your GRC.',
          icon: CheckCircleIcon,
          image: '/images/trust-center/connect-import.png', // Placeholder path
        },
        {
          heading: '2. Brand & Configure',
          description:
            'Add logo, messaging, and choose which sections are public or gated.',
          icon: VerifiedUserIcon,
          image: '/images/trust-center/brand-configure.png', // Placeholder path
        },
        {
          heading: '3. Set Access Rules',
          description:
            'Enable allow-lists, expirations, and automated NDA signatures.',
          icon: LockIcon,
          image: '/images/trust-center/access-rules.png', // Placeholder path
        },
        {
          heading: '4. Share & Track',
          description:
            'Send a single link, then watch engagement analytics drive sales.',
          icon: InsightsIcon,
          image: '/images/trust-center/share-track.png', // Placeholder path
        },
      ],
    },
    infoSection1: {
      title: 'Show the World You Care About Security',
      description: [
        "Your security journey is something to be proud of, and your customers want to know they're in good hands.",
        "With Hexafort's Trust Center, you don't just say you're secure—you show it.",
      ],
      image: '/images/trust-center/security-showcase.png', // Placeholder path
    },
    infoSection2: {
      title: 'Why Your Customers Will Love It (Detailed)',
      description: [
        "Controlled Transparency — Share only what's necessary. Let your stakeholders see your security and compliance controls, documents, audits, and more—under strict NDA and permission settings.",
        'Build Instant Credibility — Displaying your security efforts in a structured, professional space instantly sets you apart as a trustworthy, forward-thinking partner.',
        'Save Your Team Time — No more manually responding to endless security questionnaires. Let your Trust Center do the talking—automatically.',
        'Customizable & Branded — Make it yours. Add your logo, brand colors, and messaging to give clients a seamless, white-labeled experience right from your own website.',
        'Continuously Updated — As your compliance posture improves, your Trust Center updates in real time—keeping everyone aligned without extra effort.',
        'Showcase your trust. Strengthen your relationships. Let your security speak for itself—with Hexafort.',
      ],
      image: '/images/trust-center/tablet-trust-portal.png', // Placeholder path
    },
    features: {
      title: 'Platform Highlights',
      subtitle: 'Everything in one secure portal',
      features: [
        {
          title: 'Automated NDA Workflow',
          icon: GavelIcon,
          description:
            'Gate private docs behind e-signed NDAs—no PDF back-and-forth.',
        },
        {
          title: 'Live Control Sync',
          icon: CheckCircleIcon,
          description:
            'Stream control status from Hexafort evidence store in real time.',
        },
        {
          title: 'Audit-Ready Logs',
          icon: HistoryIcon,
          description: 'Immutable access history for auditors and regulators.',
        },
        {
          title: 'Engagement Analytics',
          icon: InsightsIcon,
          description:
            'Track who viewed which artifacts to prioritise hot prospects.',
        },
      ],
    },
    pitfalls: {
      title: 'Common Trust Center Pitfalls (Solved)',
      subtitle: 'Avoid these four blockers',
      items: [
        {
          heading: 'Static PDFs',
          subheading: 'Live portal ensures data is never outdated.',
          icon: DescriptionIcon,
        },
        {
          heading: 'Manual NDA Churn',
          subheading: 'Automated e-signatures unlock docs instantly.',
          icon: HourglassEmptyIcon,
        },
        {
          heading: 'Security Over-Sharing',
          subheading: 'Granular gating keeps sensitive info private.',
          icon: LockIcon,
        },
        {
          heading: 'Zero Insight',
          subheading: 'Engagement analytics reveal buyer intent.',
          icon: AssessmentIcon,
        },
      ],
      icon: WarningIcon,
    },
    cta: {
      title: 'See Hexafort Trust Center Live',
      subtitle: 'Experience real-time security transparency',
      description:
        'Close deals faster and reduce friction with vendors by letting your security speak for itself.',
      ctaText: 'Schedule My Demo',
      image: '/images/trust-center/demo-laptop.png', // Placeholder path
    },
    offer: {
      title: 'Free Security Review Template',
      subtitle:
        'Book a demo this month and receive our security questionnaire template pack.',
      icon: ShieldIcon,
    },
    faq: {
      title: 'Trust Center FAQ',
      subtitle: 'Answers to common questions',
      questions: [
        {
          question: 'Why is a Trust Center important?',
          answer:
            'It builds immediate credibility, accelerates security reviews, and reduces back-and-forth with prospects.',
        },
        {
          question: 'Do you provide a Trust Center solution?',
          answer:
            'Yes—the Hexafort Trust Center module is turnkey and integrates with the rest of our GRC suite.',
        },
        {
          question: 'How do I get started with Hexafort Trust Center?',
          answer:
            "Click 'Book Your Demo' above—our team will spin up a sandbox Trust Center in minutes.",
        },
        {
          question: 'What does it cost?',
          answer: 'Pricing is usage-based. Contact sales for a tailored quote.',
        },
        {
          question: 'Can I control what I show on my Trust Center?',
          answer:
            'Toggle individual documents, controls, and badges between public, gated, or hidden views any time.',
        },
        {
          question: 'Does it automate security questionnaires?',
          answer:
            'Providing the Trust Center link typically reduces questionnaire scope and speeds completion.',
        },
        {
          question: 'Which compliance frameworks can I display?',
          answer:
            'Any frameworks monitored in Hexafort—SOC 2, ISO 27001, GDPR, HIPAA, and custom controls.',
        },
        {
          question: 'Is the NDA template customizable?',
          answer:
            "Upload your own NDA or use Hexafort's default template; signatures are automated either way.",
        },
        {
          question: 'How secure is Hexafort Trust Center?',
          answer:
            'The platform is SOC 2 Type II certified and follows industry-standard encryption.',
        },
        {
          question: 'What kind of support is available?',
          answer:
            '24/7 chat and email support with dedicated customer success managers for enterprise plans.',
        },
      ],
    },
  },
};
