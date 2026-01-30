
import { SvgIconComponent } from '@mui/icons-material';
import SecurityIcon from '@mui/icons-material/Security';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReportIcon from '@mui/icons-material/Report';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TimelineIcon from '@mui/icons-material/Timeline';
import ArticleIcon from '@mui/icons-material/Article';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import GavelIcon from '@mui/icons-material/Gavel';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

interface DpdpHeroBullet {
  icon: SvgIconComponent;
  text: string;
  title?: string;
}

interface DpdpBenefit {
  title: string;
  description: string;
  muiIcon: SvgIconComponent;
}

interface DpdpMetric {
  value: string;
  label: string;
}

interface DpdpScreenshot {
  image: string;
  caption: string;
  imagePrompt: string;
}

interface DpdpStep {
  heading: string;
  description: string;
}

interface DpdpFaq {
  question: string;
  answer: string;
}

interface DpdpFormField {
  label: string;
  type: string;
  placeholder?: string;
}

interface DpdpHubItem {
  title: string;
  description: string;
  icon: SvgIconComponent;
}

const dpdpData = {
  pageTitle: "ComplianceHub for India DPDP | Close Privacy Gaps Before They Cost Crores",
  pageSubTitle: "Granular consent • Breach-alert playbooks • Real-time penalty dashboard",
  pageDescription: [
    "ComplianceHub helps data-driven businesses comply with India's Digital Personal Data Protection Act (2023) and Draft Rules 2025. Import data flows, surface consent gaps, automate breach reporting, and export audit-ready evidence—without spreadsheet bloat or project overruns."
  ],
  keywords: [
    "DPDP compliance software",
    "Digital Personal Data Protection Act",
    "DPDP Rules 2025 automation",
    "India data privacy platform",
    "consent management India"
  ],

  // For hero section tag
  heroTag: "🔒 DPDP Compliance, Made Easy",

  sections: {
    hero: {
      title: "Trim DPDP Audit Prep from Weeks to Hours",
      subtitle: "Find and fix consent, breach, and children's-data gaps—fast.",
      description: "ComplianceHub's automated control matrix shows exactly where you stand, assigns owners, and tracks evidence in real time so finance, legal, and engineering stay aligned.",
      highlightText: "Compliance, Automated",
      formFields: [
        { label: "Name", type: "text", placeholder: "Aditi Verma" },
        { label: "Work Email", type: "email", placeholder: "aditi@company.in" },
        { label: "Get Demo", type: "submit" }
      ],
      heroBullets: [
        {
          icon: VideoCallIcon,
          title: '1:1 session',
          text: 'Platform Implementation',
        },
        {
          icon: AccessTimeIcon,
          title: '3×',
          text: 'Faster Gap Closure',
        },
        {
          icon: CheckCircleOutlineIcon,
          title: '90%',
          text: 'Manual Work Eliminated',
        },
      ],
    },

    benefits: {
      title: "Built for DPDP Teams",
      subtitle: "Comprehensive tools to streamline compliance and protect personal data",
      items: [
        {
          title: "Consent Engine",
          muiIcon: HowToRegIcon,
          description: "Generate multi-language notices and capture affirmative consent with one line of code."
        },
        {
          title: "Rights-Request Hub",
          muiIcon: AccountCircleIcon,
          description: "Log, route, and timer-track correction, erasure, and nomination requests in one queue."
        },
        {
          title: "Breach Playbooks",
          muiIcon: ReportIcon,
          description: "Step-by-step wizard to notify the Board and affected users within statutory timelines."
        },
        {
          title: "Penalty Dashboard",
          muiIcon: CurrencyRupeeIcon,
          description: "Quantify potential exposure—up to ₹250 cr—then watch it drop as gaps close."
        }
      ]
    },

    metrics: {
      title: "DPDP Compliance in Numbers",
      subtitle: "Measurable impact on your compliance operations",
      items: [
        { value: "3×", label: "Faster Gap Closure" },
        { value: "90%", label: "Manual Work Eliminated" },
        { value: "₹250 cr", label: "Penalty Exposure Tracked" }
      ]
    },

    screenshots: {
      title: "ComplianceHub in Action",
      subtitle: "See how our platform streamlines DPDP compliance",
      items: [
        {
          image: "",
          caption: "DPDP control matrix scored against consent, notice, and breach clauses.",
          imagePrompt: "Matrix view with clause IDs and compliance status"
        },
        {
          image: "",
          caption: "Breach-notification wizard with Board-ready template.",
          imagePrompt: "Form showing breach details and notify button"
        },
        {
          image: "",
          caption: "Children's-data safeguard checker highlighting behavioural-ad flags.",
          imagePrompt: "Dashboard flagging children data risks"
        },
        {
          image: "",
          caption: "One-click export of audit evidence (ZIP / PDF).",
          imagePrompt: "Modal showing evidence bundle download"
        }
      ]
    },

    process: {
      title: "Your DPDP Roadmap",
      subtitle: "A clear path to compliance and data protection",
      items: [
        { heading: "Connect & Discover", description: "Auto-classify personal-data flows across apps and storage." },
        { heading: "Consent & Notice", description: "Publish language-specific notices; capture granular consent." },
        { heading: "Mitigate & Monitor", description: "Close gaps, assign owners, track real-time compliance score." },
        { heading: "Prove & Improve", description: "Export audit packs; dashboards update with every release." }
      ]
    },

    callToAction: {
      title: "See Your DPDP Score Today",
      subtitle: "Take the first step toward comprehensive compliance",
      description: "Book a 15-minute live demo and watch ComplianceHub surface your top privacy risks.",
      ctaText: "Schedule Demo"
    },

    complianceHub: {
      title: "DPDP Compliance Hub",
      subtitle: "A structured approach to safeguarding personal data & building trust",
      items: [
        {
          title: "Data Mapping & Inventory",
          description: "Automatically discover and classify personal data across your organization.",
          icon: FindInPageIcon
        },
        {
          title: "Consent Management",
          description: "Generate notices in all 22 scheduled languages and track granular consent choices.",
          icon: HowToRegIcon
        },
        {
          title: "Rights Request Management",
          description: "Streamline correction, erasure, and data nomination requests with automated workflows.",
          icon: AccountCircleIcon
        },
        {
          title: "Breach Notification",
          description: "Trigger alerts, assemble notification packages, and maintain statutory timelines.",
          icon: ReportIcon
        }
      ]
    },

    howComplianceHubHelps: {
      title: "How ComplianceHub Helps You Achieve DPDP Compliance",
      subtitle: "Our structured approach streamlines complex DPDP mandates, ensuring personal data protection.",
      steps: [
        {
          text: "Map personal data flows and establish data inventory",
          icon: StorageIcon,
          color: "white"
        },
        {
          text: "Implement granular consent mechanisms in all languages",
          icon: HowToRegIcon,
          color: "white"
        },
        {
          text: "Establish rights request workflows and SLA monitoring",
          icon: AccountCircleIcon,
          color: "white"
        },
        {
          text: "Configure breach notification playbooks and templates",
          icon: ReportIcon,
          color: "white"
        },
        {
          text: "Implement children's data safeguards and verification",
          icon: ChildCareIcon,
          color: "white"
        },
        {
          text: "Set up cross-border transfer impact assessments",
          icon: LanguageIcon,
          color: "white"
        },
        {
          text: "Monitor compliance gaps and penalty exposure",
          icon: CurrencyRupeeIcon,
          color: "white"
        },
        {
          text: "Generate audit-ready evidence packages on demand",
          icon: ArticleIcon,
          color: "white"
        }
      ],
    },

    faq: {
      title: "DPDP FAQs",
      subtitle: "Common questions about Digital Personal Data Protection",
      questions: [
        {
          question: "What is the DPDP Act?",
          answer: "India's 2023 law that sets rules for collecting, processing, and protecting digital personal data."
        },
        {
          question: "Do the Draft DPDP Rules 2025 change my obligations?",
          answer: "The draft rules clarify timelines, formats, and cross-border transfer conditions. Core duties remain unchanged."
        },
        {
          question: "Who qualifies as a Significant Data Fiduciary?",
          answer: "Organisations processing high-volume or sensitive data, or posing elevated risk to individuals or national interest, face extra duties."
        },
        {
          question: "How does ComplianceHub handle 22-language consent?",
          answer: "Built-in templates generate notices and capture affirmative consent in every Eighth-Schedule language."
        },
        {
          question: "Can ComplianceHub manage children's-data safeguards?",
          answer: "Yes—parental-consent flows and policy checks block behavioural ads targeting minors."
        },
        {
          question: "Does ComplianceHub automate breach notifications?",
          answer: "A pre-configured playbook drafts and dispatches Board and user notices within required timelines."
        },
        {
          question: "Where is data stored?",
          answer: "Choose India, EU, or US hosting to meet data-localisation and latency needs."
        },
        {
          question: "How is pricing structured?",
          answer: "Subscriptions scale by data-subject volume and modules in use. Contact sales for a tailored quote."
        }
      ]
    },

    bookDemo: {
      tagline: "Ready for DPDP Compliance?",
      title: "Automate DPDP, Protect User Data",
      bullets: [
        "Minimize manual tasks and reduce compliance errors",
        "Lower breach liability with robust controls",
        "Continuously monitor, always stay compliant"
      ],
      buttonLabel: "Book Your Demo"
    }
  }
};

export default dpdpData;