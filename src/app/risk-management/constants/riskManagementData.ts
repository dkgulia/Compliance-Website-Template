import { 
    Tune as TuneIcon,
    Security as SecurityIcon,
    Insights as InsightsIcon,
    CheckCircle as CheckCircleIcon,
    CloudUpload as CloudUploadIcon,
    Settings as SettingsIcon,
    Assessment as AssessmentIcon,
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    VideoCall as VideoCallIcon,
    AccessTime as AccessTimeIcon,
    VerifiedUser as VerifiedUserIcon
} from '@mui/icons-material';

export const riskManagementData = {
    pageTitle: "HexaFort Risk Management | Complete Control & Visibility",
    pageSubTitle: "Custom scoring • CIA lens • Actionable dashboards",
    pageDescription: [
        "HexaFort's Risk Management module lets you tailor risk-scoring models, assess threats by Confidentiality-Integrity-Availability (CIA), assign mitigation owners, and keep audit-ready records—no spreadsheets, no bolt-ons."
    ],
    keywords: [
        "HexaFort risk management",
        "custom risk scoring",
        "CIA risk evaluation",
        "risk mitigation tracking",
        "audit ready risk docs"
    ],
    imageIdeasForPage: [
        "Hero banner: HexaFort risk heat-map with form on right",
        "CIA triad overlay on assets",
        "4-step onboarding timeline",
        "Kanban board of mitigation tasks"
    ],
    sections: [
        {
            Sno: "1",
            blockType: "Hero",
            interactiveElement: "form",
            designGuidelines: "Headline + copy left; 3-field form (Name, Work Email, Submit) right; product screenshot background",
            content: {
                heroTitle: "Master Your Risk Landscape in Minutes",
                heroSubtitle: "Flexible scoring, CIA insights, real-time tasks—all inside HexaFort.",
                heroDescription: [
                    "Define likelihood-and-impact maths, see instant dashboards, assign fixes, and export audit packs with one click."
                ],
                formFields: [
                    { label: "Name", type: "text", placeholder: "Jane Doe" },
                    { label: "Work Email", type: "email", placeholder: "jane@company.com" },
                    { label: "Get Demo", type: "submit" }
                ]
            }
        },
        {
            Sno: "2",
            blockType: "Benefits",
            interactiveElement: "muiIcon",
            designGuidelines: "Four icon cards (even count)",
            content: {
                title: "Key Capabilities",
                subtitle: "",
                benefits: [
                    {
                        title: "Customisable Scoring",
                        muiIcon: "Tune",
                        description: "Set likelihood, impact and org-specific factors for a score that matches reality."
                    },
                    {
                        title: "CIA-Based Evaluation",
                        muiIcon: "Security",
                        description: "Rate every risk on Confidentiality, Integrity & Availability—see which pillar needs action."
                    },
                    {
                        title: "Actionable Dashboards",
                        muiIcon: "Insights",
                        description: "Real-time charts highlight trends, high-risk zones and top priorities."
                    },
                    {
                        title: "Task & Audit Tracking",
                        muiIcon: "CheckCircle",
                        description: "Assign owners, due dates, monitor progress, and export audit-ready evidence anytime."
                    }
                ]
            }
        },
        {
            Sno: "3",
            blockType: "Screenshots",
            interactiveElement: "carousel",
            designGuidelines: "Four-item carousel alternates image/text sides",
            content: {
                title: "Platform Walk-through",
                subtitle: "",
                screenshots: [
                    {
                        image: "",
                        caption: "Custom risk-scoring matrix with editable fields.",
                        imagePrompt: "HexaFort scoring settings panel"
                    },
                    {
                        image: "",
                        caption: "CIA heat-map pinpoints confidentiality hotspots.",
                        imagePrompt: "Dashboard heat-map with C/I/A toggle"
                    },
                    {
                        image: "",
                        caption: "Risk trend graph with drill-down filters.",
                        imagePrompt: "Line chart showing risk score over time"
                    },
                    {
                        image: "",
                        caption: "Kanban board of mitigation tasks and status chips.",
                        imagePrompt: "Task board in HexaFort"
                    }
                ]
            }
        },
        {
            Sno: "4",
            blockType: "Steps/Process",
            interactiveElement: "none",
            designGuidelines: "Numbered 4-step list (even count)",
            content: {
                title: "Quick-Start Onboarding",
                subtitle: "",
                steps: [
                    {
                        heading: "Import & Map",
                        description: "Sync assets and existing registers via CSV/API.",
                        image: "",
                        imagePrompt: "CSV upload into HexaFort"
                    },
                    {
                        heading: "Customise Scoring",
                        description: "Adjust likelihood, impact and CIA weights.",
                        image: "",
                        imagePrompt: "Sliders adjusting risk weights"
                    },
                    {
                        heading: "Assess & Prioritise",
                        description: "Run automated assessments; tackle top-impact risks first.",
                        image: "",
                        imagePrompt: "Risk heat-map with high-risk quadrant"
                    },
                    {
                        heading: "Mitigate & Monitor",
                        description: "Assign tasks, track status, export audit PDFs.",
                        image: "",
                        imagePrompt: "Progress bar hitting 100 %"
                    }
                ]
            }
        },
        {
            Sno: "5",
            blockType: "Call to Action",
            interactiveElement: "form",
            designGuidelines: "Short pitch left; mini form right",
            content: {
                title: "See Your First Dashboard Today",
                subtitle: "15-minute personalised demo",
                image: "",
                imagePrompt: "Video-call snapshot of HexaFort demo",
                description: "We'll import one of your risk registers live and walk you through the insights."
            }
        },
        {
            Sno: "6",
            blockType: "Top/Offer",
            interactiveElement: "muiIcon",
            designGuidelines: "Banner with bold headline",
            content: {
                title: "Free 14-Day Trial • No Credit Card",
                subtitle: "Agent-less setup in under 5 minutes"
            }
        },
        {
            Sno: "7",
            blockType: "FAQ",
            interactiveElement: "none",
            designGuidelines: "Collapsible Q&A (8 items = even)",
            content: {
                title: "FAQs",
                subtitle: "",
                questions: [
                    {
                        question: "Can I customise likelihood and impact scales?",
                        answer: "Yes—create any scoring formula and qualitative labels you need."
                    },
                    {
                        question: "Does HexaFort support CIA scoring out-of-the-box?",
                        answer: "Confidentiality, Integrity and Availability dimensions are built-in and fully weightable."
                    },
                    {
                        question: "How fast can I import an existing register?",
                        answer: "Most teams upload a CSV and see dashboards in under 10 minutes."
                    },
                    {
                        question: "Can non-security users own mitigation tasks?",
                        answer: "Absolutely—assign to any user, set deadlines and track status."
                    },
                    {
                        question: "Is it audit-ready for ISO 27001 or SOC 2?",
                        answer: "Yes—export PDFs that map risks and mitigations to control requirements."
                    },
                    {
                        question: "Which integrations are available?",
                        answer: "Jira, ServiceNow, Slack, Okta, AWS, Azure and custom APIs."
                    },
                    {
                        question: "Where is my data hosted?",
                        answer: "Choose region-specific hosting; contact sales for options."
                    },
                    {
                        question: "How is pricing calculated?",
                        answer: "Plans scale by assets and users; get a tailored quote from our team."
                    }
                ]
            }
        }
    ],
    features: [
        {
            id: 1,
            title: "Customizable Scoring",
            description: "Tailor risk formulas to your organization's specific needs with custom weights and parameters.",
            icon: "TuneIcon"
        },
        {
            id: 2,
            title: "CIA Security Model",
            description: "Evaluate risks through the lens of Confidentiality, Integrity, and Availability to identify focused action areas.",
            icon: "SecurityIcon"
        },
        {
            id: 3,
            title: "Real-time Dashboards",
            description: "Visualize risk profiles with interactive heat maps, trend analysis, and customizable filters.",
            icon: "InsightsIcon"
        },
        {
            id: 4,
            title: "Mitigation Tracking",
            description: "Assign tasks to owners, set deadlines, and monitor progress through completion.",
            icon: "CheckCircleIcon"
        }
    ],
    iconMap: {
        "TuneIcon": "TuneIcon",
        "SecurityIcon": "SecurityIcon", 
        "InsightsIcon": "InsightsIcon",
        "CheckCircleIcon": "CheckCircleIcon",
        "CloudUploadIcon": "CloudUploadIcon",
        "SettingsIcon": "SettingsIcon",
        "AssessmentIcon": "AssessmentIcon",
        "AssignmentTurnedInIcon": "AssignmentTurnedInIcon"
    },
    heroFeatures: [
        {
            title: "1:1 Expert Session",
            subtitle: "Risk Framework Setup",
            icon: "VideoCallIcon"
        },
        {
            title: "60%",
            subtitle: "Time Saved",
            icon: "AccessTimeIcon"
        },
        {
            title: "100%",
            subtitle: "Audit Ready",
            icon: "VerifiedUserIcon"
        }
    ]
};

export default riskManagementData;