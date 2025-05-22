
import {
    Psychology as PsychologyIcon,
    Insights as InsightsIcon,
    CheckCircle as CheckCircleIcon,
    Loop as LoopIcon,
    ImportContacts as ImportContactsIcon,
    Assessment as AssessmentIcon,
    Assignment as AssignmentIcon,
    CloudUpload as CloudUploadIcon
} from "@mui/icons-material";

export type Benefit = {
    title: string;
    description: string;
    icon: React.ElementType;
};

export type Metric = {
    value: string;
    label: string;
};

export type Screenshot = {
    caption: string;
    imagePrompt: string;
};

export type Step = {
    heading: string;
    description: string;
};

export type Question = {
    question: string;
    answer: string;
};

export const iso42001Data = {
    pageTitle: "HexaFort for ISO 42001 | Responsible AI, Certified Fast",
    pageSubTitle: "Automated gap analysis • Bias & risk controls • Audit-ready evidence",
    pageDescription: [
        "HexaFort streamlines ISO / IEC 42001 certification—the world's first AI Management System (AIMS) standard. Map AI risks to mandated controls in minutes, track bias-mitigation tasks, and export auditor-ready packages so you can innovate with confidence."
    ],
    keywords: [
        "ISO 42001",
        "ISO 42001 certification software",
        "AI management system standard",
        "responsible AI compliance",
        "ISO 42001 automation"
    ],
    imageIdeasForPage: [
        "Hero: HexaFort AI-risk dashboard with form on right",
        "Infographic: Three-phase ISO 42001 cycle—Plan, Operate, Improve",
        "Carousel: control-mapping matrix auto-filled, bias heat-map, audit-export modal",
        "Metric card: 4× faster compliance, 90 % workload automated"
    ],
    sections: {
        hero: {
            title: "ISO / IEC 42001 Compliance—Automated & Continuous",
            subtitle: "Prove your AI is safe, fair, and trustworthy.",
            description: [
                "HexaFort pinpoints every ISO 42001 gap, assigns fixes, and keeps real-time evidence so audits never slow your roadmap."
            ],
            buttonText: "Explore ISO 42001"
        },
        benefits: {
            title: "Why HexaFort Beats Manual Playbooks",
            subtitle: "",
            items: [
                {
                    title: "AI-Specific Control Mapping",
                    icon: PsychologyIcon,
                    description: "Instantly align model governance, data quality, and bias safeguards to ISO 42001 clauses."
                },
                {
                    title: "Automated Risk & Bias Scoring",
                    icon: InsightsIcon,
                    description: "Dashboards surface fairness, transparency, and safety risks before they reach production."
                },
                {
                    title: "Task Tracking & Evidence",
                    icon: CheckCircleIcon,
                    description: "Assign owners, due dates, and store proof for each corrective action—ready for auditors."
                },
                {
                    title: "Continuous Improvement Loop",
                    icon: LoopIcon,
                    description: "Trend charts and alerts keep your AIMS in a constant state of compliance and optimisation."
                }
            ]
        },
        metrics: {
            title: "",
            subtitle: "",
            items: [
                { value: "4×", label: "Faster Certification" },
                { value: "90%", label: "Workload Automated" },
                { value: "200", label: "Hours Saved per Audit" }
            ]
        },
        screenshots: {
            title: "HexaFort in Action",
            subtitle: "",
            items: [
                {
                    caption: "Auto-mapped ISO 42001 control matrix with evidence links.",
                    imagePrompt: "Matrix view with clauses and compliance status"
                },
                {
                    caption: "Bias heat-map highlighting data-set imbalance.",
                    imagePrompt: "Visual heat-map of bias risk"
                },
                {
                    caption: "Task board assigning mitigation owners & due dates.",
                    imagePrompt: "Kanban board of AI risk mitigations"
                },
                {
                    caption: "One-click export of auditor-ready package (ZIP/PDF).",
                    imagePrompt: "Modal showing evidence bundle download"
                }
            ]
        },
        process: {
            title: "Your Path to Certification",
            subtitle: "",
            steps: [
                {
                    heading: "Connect & Import",
                    description: "Sync model inventory, data lineage, and existing policy docs.",
                    icon: CloudUploadIcon
                },
                {
                    heading: "Gap Analysis",
                    description: "HexaFort maps controls and highlights missing practices instantly.",
                    icon: AssessmentIcon
                },
                {
                    heading: "Remediate & Record",
                    description: "Assign tasks, attach evidence, and monitor real-time completion.",
                    icon: AssignmentIcon
                },
                {
                    heading: "Audit & Improve",
                    description: "Export certification package; dashboards keep you compliant every release.",
                    icon: ImportContactsIcon
                }
            ]
        },
        cta: {
            title: "Ready to Accelerate ISO 42001 Certification?",
            subtitle: "",
            description: "Book a 15-minute personalised demo and see your AI Management System gaps live.",
            ctaText: "Schedule Demo"
        },
        faq: {
            title: "ISO 42001 FAQs",
            subtitle: "",
            questions: [
                {
                    question: "What is ISO / IEC 42001?",
                    answer: "The first certifiable international standard for managing artificial-intelligence systems responsibly across their lifecycle."
                },
                {
                    question: "Who needs ISO 42001 certification?",
                    answer: "Any organisation that designs, develops or operates AI and wants to prove governance, risk, and bias controls to customers or regulators."
                },
                {
                    question: "How does HexaFort accelerate certification?",
                    answer: "Automated control mapping, gap detection, remediation tracking, and evidence export reduce manual effort by up to 90%."
                },
                {
                    question: "Does HexaFort cover data-set bias controls?",
                    answer: "Yes—bias identification and mitigation tasks are part of the built-in control library."
                },
                {
                    question: "Can we integrate existing risk registers?",
                    answer: "Upload via CSV or API; HexaFort auto-links them to ISO 42001 clauses."
                },
                {
                    question: "Is ongoing monitoring included?",
                    answer: "Dashboards and alerts keep your AI Management System continuously compliant."
                },
                {
                    question: "Where is data hosted?",
                    answer: "Choose regional hosting—US, EU, or APAC—to meet data-residency needs."
                },
                {
                    question: "How is pricing structured?",
                    answer: "Based on number of AI workflows and users; contact sales for a tailored quote."
                }
            ]
        }
    }
};