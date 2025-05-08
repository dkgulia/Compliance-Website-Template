// src/app/cspm/constants/cspmData.ts
import { StaticImageData } from 'next/image';
import { SvgIconComponent } from '@mui/icons-material';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import HandymanIcon from '@mui/icons-material/Handyman';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PolicyIcon from '@mui/icons-material/Policy';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PsychologyIcon from '@mui/icons-material/Psychology';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import InventoryIcon from '@mui/icons-material/Inventory';
import SecurityIcon from '@mui/icons-material/Security';
import MergeIcon from '@mui/icons-material/Merge';

export interface Benefit {
    title: string;
    muiIcon: SvgIconComponent;
    description: string;
}

export interface Feature {
    title: string;
    muiIcon: SvgIconComponent;
    description: string;
}

export interface Step {
    heading: string;
    description: string;
    image: string;
    imagePrompt: string;
}

export interface UseCaseItem {
    heading: string;
    subheading: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export const cspmData = {
    pageTitle: "HexaFort CSPM | Cloud Security Posture Management — Security That Feels Effortless",
    pageSubTitle: "Automate compliance, slash risk, and control cloud costs from one unified platform.",
    pageDescription: "HexaFort's Cloud Security Posture Management (CSPM) gives growing teams enterprise-grade protection without the enterprise complexity. Continuous scans, smart remediation, and audit-ready evidence—all in minutes.",
    keywords: [
        "HexaFort CSPM",
        "cloud security posture management",
        "automated cloud compliance",
        "CSPM tool",
        "cloud misconfiguration detection",
        "ISO 27001 compliance software",
        "SOC 2 automation",
        "cloud cost optimization security"
    ],
    hero: {
        heroTitle: "Cloud Security Posture Management — Security That Feels Effortless",
        heroSubtitle: "Detect. Fix. Comply. All without breaking your DevOps flow.",
        heroDescription: [
            "Your cloud environment powers your business—but as it grows, so do the risks. Misconfigurations, overlooked permissions, compliance gaps, and ballooning costs can quietly pile up and leave you exposed.",
            "With HexaFort CSPM, securely connect your cloud infrastructure (AWS, Azure, GCP) in minutes. Our platform automatically detects misconfigurations, vulnerabilities, and policy violations—and provides clear, actionable remediation steps for immediate implementation."
        ],
        ctaText: "Get Started Free →"
    },
    benefits: {
        title: "What You'll Love About Hexafort CSPM:",
        subtitle: "",
        benefitsList: [
            
                {
                    title: "Real-Time Risk Detection",
                    muiIcon: ReportProblemIcon,
                    description: "Our intelligent engine monitors your cloud setup and flags security gaps, weak IAM policies, and exposed storage before they become real threats."
                },
                {
                    title: "Fixes That Make Sense",
                    muiIcon: HandymanIcon,
                    description: "We translate technical findings into clear, actionable steps your team can implement. Whether you're an engineer or CISO, you'll know what to do next."
                },
                {
                    title: "Smart Cloud Cost Optimization",
                    muiIcon: MonetizationOnIcon,
                    description: "Get practical recommendations to reduce your cloud bill without sacrificing performance or security. Stop wasting money on unused resources."
                },
                {
                    title: "Compliance Without Chaos",
                    muiIcon: PolicyIcon,
                    description: "Stay aligned with frameworks like CIS, ISO 27001, and SOC 2 without the paperwork headache. Our checks keep you audit-ready at all times."
                },
                {
                    title: "One Unified Experience",
                    muiIcon: DashboardIcon,
                    description: "No switching between tools or fragmented views. CSPM is fully integrated into Hexafort Secure—your security, risk, and compliance connected."
                },
                {
                    title: "Automated Threat Intelligence",
                    muiIcon: SecurityIcon,
                    description: "We cross-reference your environment against the latest vulnerabilities and attack patterns, providing proactive protection for your cloud assets."
                }
        ]
    },
    features: {
        title: "Why HexaFort?",
        subtitle: "Four pillars that set us apart",
        featuresList: [
            {
                title: "Automation & Efficiency",
                muiIcon: SettingsSuggestIcon,
                description: "Slash manual tasks with policy-driven workflows and auto-generated evidence."
            },
            {
                title: "Centralized Management",
                muiIcon: AccountTreeIcon,
                description: "Manage multiple compliances and cloud accounts from a single dashboard."
            },
            {
                title: "Audit-Ready Documentation",
                muiIcon: DescriptionIcon,
                description: "Export auditor-friendly reports in seconds—no spreadsheet wrangling."
            },
            {
                title: "Risk-Based Prioritization",
                muiIcon: WarningAmberIcon,
                description: "Fix high-impact findings first with contextual risk scores."
            }
        ]
    },
    process: {
        title: "4-Step Onboarding",
        subtitle: "Go from zero to secure in under an hour",
        steps: [
            {
                heading: "Connect",
                description: "Securely link AWS, Azure, and GCP via read-only APIs.",
                image: "",
                imagePrompt: "Icons of AWS, Azure, GCP pointing to HexaFort logo"
            },
            {
                heading: "Scan",
                description: "Run the first full compliance and misconfiguration scan.",
                image: "",
                imagePrompt: "Radar animation over cloud resources"
            },
            {
                heading: "Prioritize",
                description: "Review risks ranked by business impact; apply one-click fixes.",
                image: "",
                imagePrompt: "Heat-map dashboard with 'Auto-Fix' buttons"
            },
            {
                heading: "Report & Monitor",
                description: "Generate audit packs and enable continuous monitoring.",
                image: "",
                imagePrompt: "Report PDF icon and real-time graph trending upward"
            }
        ]
    },
    supportedFrameworks: {
        title: "Supported Frameworks",
        imageIdea: "Row of ISO 27001, SOC 2, GDPR, HIPAA logos with checkmarks",
        description: [
            "ISO 27001 • SOC 2 • GDPR • HIPAA • PCI-DSS • NIST CSF—and dozens more, pre-mapped out of the box."
        ],
        imagePrompt: "Framework badges with green success indicators"
    },
    professionalAssistance: {
        title: "Professional Assistance Included",
        subtitle: "Compliance experts on call",
        highlightText: "24×7 Advisory",
        description: "Get tailored guidance from HexaFort specialists—before, during, and after implementation.",
        subheading: "",
        imageIdea: "Consultant speaking with client over dashboard video call",
        imagePrompt: "Two professionals reviewing compliance metrics on a screen"
    },
    efficiencyEnhancements: {
        title: "Efficiency Enhancements",
        subtitle: "Built to scale as you grow",
        enhancements: [
            {
                title: "AI-Powered Predictions",
                muiIcon: PsychologyIcon,
                description: "Spot emerging risks using machine-learning trend analysis."
            },
            {
                title: "Workflow Automation",
                muiIcon: LinearScaleIcon,
                description: "Auto-assign tickets and close them when remediation is verified."
            },
            {
                title: "Control Libraries",
                muiIcon: InventoryIcon,
                description: "Use pre-built or custom control sets for any framework."
            },
            {
                title: "Seamless Integrations",
                muiIcon: MergeIcon,
                description: "Plug into Jira, ServiceNow, Slack, and SIEM tools in minutes."
            }
        ]
    },
    useCases: {
        title: "Top Use Cases",
        subtitle: "Where HexaFort delivers instant ROI",
        image: "",
        imagePrompt: "Collage of compliance, DevOps, finance personas",
        list: [
            {
                heading: "Continuous Compliance",
                subheading: "Eliminate audit-time fire-drills with always-on evidence collection."
            },
            {
                heading: "Cloud Misconfiguration Remediation",
                subheading: "Auto-fix risky IAM roles, public buckets, and unencrypted data."
            },
            {
                heading: "Risk & Policy Management",
                subheading: "Centralize policies and map them to technical controls."
            },
            {
                heading: "Board-Level Reporting",
                subheading: "Generate executive-ready risk dashboards in a click."
            }
        ]
    },
    callToAction: {
        title: "See HexaFort Live",
        subtitle: "10-minute guided demo • Customized to your stack",
        image: "",
        imagePrompt: "Live demo video thumbnail with play button",
        description: "Get a free cloud security assessment and compliance gap report you can use immediately. No obligations, just actionable insights.",
        ctaText: "Book My Free Demo Now"
    },
    teamInfo: {
        title: "Built for Teams Who Care About Doing Things Right",
        imageIdea: "Team collaborating over secure cloud diagram",
        description: [
            "We know how hard it is to stay on top of cloud security—especially when you're growing fast, wearing multiple hats, and trying to keep costs under control. That's why we designed Hexafort CSPM to be simple, powerful, and human.",
            "You don't need to be a cloud security expert to stay protected. You just need the right partner.",
            "🔒 Let Hexafort CSPM give you the confidence to scale securely—without surprises."
        ],
        imagePrompt: "Friendly team high-fiving in front of HexaFort dashboard"
    },
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Answers to common HexaFort queries",
        questions: [
            {
                question: "What makes HexaFort different from other GRC tools?",
                answer: "We combine full-stack CSPM, AI-driven risk scoring, and built-in advisory services—all in one subscription."
            },
            {
                question: "Does HexaFort support on-premise environments?",
                answer: "Our primary focus is cloud and SaaS, but on-prem assets can be mapped via API connectors."
            },
            {
                question: "How long does implementation take?",
                answer: "Most customers connect their first cloud account and generate compliance reports within an hour."
            },
            {
                question: "Which compliance frameworks are included?",
                answer: "ISO 27001, SOC 2, GDPR, HIPAA, PCI-DSS, NIST CSF, and dozens more—with regular updates."
            },
            {
                question: "Is HexaFort agent-less?",
                answer: "Yes. We integrate via read-only APIs—no agents, no performance impact."
            },
            {
                question: "Can HexaFort optimize my cloud spend?",
                answer: "Absolutely. Our CSPM module surfaces unused or oversized resources and recommends right-sizing."
            },
            {
                question: "Does HexaFort provide remediation guidance?",
                answer: "Every finding is paired with clear, step-by-step fixes your engineers can apply immediately."
            },
            {
                question: "Will CSPM slow down deployments?",
                answer: "Agent-less scans run in the background, adding negligible latency to CI/CD pipelines."
            },
            {
                question: "How does pricing work?",
                answer: "Pricing scales by asset count—contact our team for a tailored quote."
            },
            {
                question: "Is customer support included?",
                answer: "All plans include 24×7 chat and email support, plus optional dedicated CSM packages."
            }
        ]
    }
};

export default cspmData;