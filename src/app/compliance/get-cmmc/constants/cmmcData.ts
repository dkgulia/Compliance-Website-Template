import { 
    Layers as LayersIcon,
    VerifiedUser as VerifiedUserIcon,
    Description as DescriptionIcon,
    TrendingUp as TrendingUpIcon,
    Security as SecurityIcon,
    Assessment as AssessmentIcon,
    Task as TaskIcon,
    CloudDownload as CloudDownloadIcon,
    Sync as SyncIcon,
    ViewModule as ViewModuleIcon,
    AssignmentTurnedIn as AssignmentTurnedInIcon,
    GetApp as GetAppIcon,
    People as PeopleIcon,
    Business as BusinessIcon,
    ShowChart as ShowChartIcon
} from '@mui/icons-material';

export const cmmcData = {
    pageTitle: "ComplianceHub for CMMC | Faster Path to DoD Readiness",
    pageSubTitle: "Automated gap analysis • Task tracking • Audit-ready evidence",
    pageDescription: [
        "ComplianceHub accelerates Cybersecurity Maturity Model Certification (CMMC) readiness for defense contractors. Map NIST 800-171 controls in minutes, see level-specific gaps, assign fixes, and export assessment evidence—so you win (and keep) DoD contracts without spreadsheet chaos."
    ],
    keywords: [
        "cybersecurity maturity model certification",
        "CMMC",
        "CMMC 2.0 levels",
        "CMMC assessment automation",
        "CMMC compliance software"
    ],
    imageIdeasForPage: [
        "Hero banner: ComplianceHub CMMC dashboard with self-assessment score and form on right",
        "Infographic: three CMMC 2.0 levels—Foundational, Advanced, Expert",
        "Carousel shot: control-mapping matrix auto-filled from NIST 800-171",
        "Timeline: four-phase DoD implementation plan"
    ],
    sections: [
        {
            Sno: "1",
            blockType: "Hero",
            interactiveElement: "form",
            designGuidelines: "Headline left; three-field form right",
            content: {
                heroTitle: "CMMC Compliance—Clear, Quick, Automated",
                heroSubtitle: "Win DoD work with confidence.",
                heroDescription: [
                    "Set your target level (Foundational 1, Advanced 2, or Expert 3), let ComplianceHub surface every gap, and generate evidence packs ready for your assessor."
                ],
                formFields: [
                    { label: "Name", type: "text", placeholder: "Dana Smith" },
                    { label: "Work Email", type: "email", placeholder: "dana@contractor.com" },
                    { label: "Get Demo", type: "submit" }
                ]
            }
        },
        {
            Sno: "2",
            blockType: "Benefits",
            interactiveElement: "muiIcon",
            designGuidelines: "Four icon cards",
            content: {
                title: "Built for the DoD Supply Chain",
                subtitle: "",
                benefits: [
                    {
                        title: "Tiered-Level Mapping",
                        muiIcon: "Layers",
                        description: "ComplianceHub aligns controls to CMMC's tiered model—only the practices your level requires."
                    },
                    {
                        title: "Verified Assessments",
                        muiIcon: "VerifiedUser",
                        description: "Run self-assessments, attach evidence, and prep for third-party review in one workspace."
                    },
                    {
                        title: "Contract-Ready Docs",
                        muiIcon: "Description",
                        description: "Export assessor-friendly packages —downloads match DoD submission formats."
                    },
                    {
                        title: "Continuous Improvement",
                        muiIcon: "TrendingUp",
                        description: "Dashboards track residual risk and guide you toward the next maturity milestone."
                    }
                ]
            }
        },
        {
            Sno: "3",
            blockType: "Screenshots",
            interactiveElement: "carousel",
            designGuidelines: "Four items, alternating image/text sides",
            content: {
                title: "ComplianceHub in Action",
                subtitle: "",
                screenshots: [
                    {
                        image: "",
                        caption: "Auto-mapped NIST 800-171 controls to CMMC Level 2.",
                        imagePrompt: "Control-mapping matrix screenshot"
                    },
                    {
                        image: "",
                        caption: "Gap list ranked by impact on contract award.",
                        imagePrompt: "Dashboard list of gaps with severity"
                    },
                    {
                        image: "",
                        caption: "Task board assigning remediation owners & due dates.",
                        imagePrompt: "Kanban board of CMMC remediation tasks"
                    },
                    {
                        image: "",
                        caption: "One-click generation of assessment evidence package (ZIP/PDF).",
                        imagePrompt: "Export modal with evidence bundle"
                    }
                ]
            }
        },
        {
            Sno: "4",
            blockType: "Steps/Process",
            interactiveElement: "none",
            designGuidelines: "Four-step numbered list",
            content: {
                title: "Fast-Track Your CMMC Journey",
                subtitle: "",
                steps: [
                    {
                        heading: "Connect & Import",
                        description: "Sync asset inventory, policies, and NIST 800-171 artifacts."
                    },
                    {
                        heading: "Select Level",
                        description: "Choose Foundational 1, Advanced 2, or Expert 3—ComplianceHub scopes controls instantly."
                    },
                    {
                        heading: "Remediate Gaps",
                        description: "Assign tasks, track progress, and close findings with built-in guidance."
                    },
                    {
                        heading: "Generate Evidence",
                        description: "Download assessor-ready documentation and keep dashboards live for future audits."
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
                title: "See Your CMMC Score Today",
                subtitle: "15-minute personalised demo",
                description: "We'll run a live gap analysis on one of your environments and outline next steps.",
                formFields: [
                    { label: "Name", type: "text", placeholder: "Alex" },
                    { label: "Work Email", type: "email", placeholder: "alex@company.com" },
                    { label: "Schedule Demo", type: "submit" }
                ]
            }
        },
        {
            Sno: "6",
            blockType: "Top/Offer",
            interactiveElement: "muiIcon",
            designGuidelines: "Banner",
            content: {
                title: "Free CMMC Gap Assessment",
                subtitle: "No credit card • Agent-less setup • Results in < 10 min"
            }
        },
        {
            Sno: "7",
            blockType: "FAQ",
            interactiveElement: "none",
            designGuidelines: "Collapsible list (8 items)",
            content: {
                title: "CMMC FAQs",
                subtitle: "",
                questions: [
                    {
                        question: "What is CMMC?",
                        answer: "A DoD program that verifies defense contractors meet tiered cybersecurity standards to protect Federal Contract Information (FCI) and Controlled Unclassified Information (CUI)."
                    },
                    {
                        question: "How many CMMC levels are there?",
                        answer: "Under CMMC 2.0 there are three: Level 1 (Foundational), Level 2 (Advanced) and Level 3 (Expert)."
                    },
                    {
                        question: "Do all contractors need certification?",
                        answer: "Only those handling DoD-provided FCI/CUI will need to meet a specified level as a contract condition."
                    },
                    {
                        question: "What does ComplianceHub automate?",
                        answer: "Control mapping, gap detection, task assignment, progress tracking, and evidence generation."
                    },
                    {
                        question: "Can ComplianceHub support self-assessments?",
                        answer: "Yes—generate and store self-assessment results, then prep for third-party review."
                    },
                    {
                        question: "How long does onboarding take?",
                        answer: "Most organisations import controls and run the first gap scan in under an hour."
                    },
                    {
                        question: "Is data stored in the U.S.?",
                        answer: "Yes—U.S. region hosting is standard; other regions available on request."
                    },
                    {
                        question: "How is pricing structured?",
                        answer: "Based on number of assets and target CMMC level. Contact sales for a quote."
                    }
                ]
            }
        }
    ],
    features: [
        {
            id: 1,
            title: "NIST 800-171 Mapping",
            description: "Automatically map existing security controls to CMMC practices",
            icon: "SecurityIcon"
        },
        {
            id: 2,
            title: "Level-Specific Gap Analysis",
            description: "Instantly identify missing controls for your target level",
            icon: "AssessmentIcon"
        },
        {
            id: 3,
            title: "Task Tracking",
            description: "Assign remediation tasks and monitor progress to completion",
            icon: "TaskIcon"
        },
        {
            id: 4,
            title: "Evidence Generation",
            description: "One-click export of assessment-ready documentation packages",
            icon: "CloudDownloadIcon"
        }
    ],
    iconMap: {
        "LayersIcon": LayersIcon,
        "VerifiedUserIcon": VerifiedUserIcon,
        "DescriptionIcon": DescriptionIcon,
        "TrendingUpIcon": TrendingUpIcon,
        "SecurityIcon": SecurityIcon,
        "AssessmentIcon": AssessmentIcon,
        "TaskIcon": TaskIcon,
        "CloudDownloadIcon": CloudDownloadIcon,
        "SyncIcon": SyncIcon,
        "ViewModuleIcon": ViewModuleIcon,
        "AssignmentTurnedInIcon": AssignmentTurnedInIcon,
        "GetAppIcon": GetAppIcon
    },
    heroFeatures: [
        {
            title: "30+",
            subtitle: "CMMC Templates",
            icon: "PeopleIcon"
        },
        {
            title: "60%",
            subtitle: "Faster Process",
            icon: "BusinessIcon"
        },
        {
            title: "100%",
            subtitle: "DoD Aligned",
            icon: "VerifiedUserIcon"
        }
    ],
    implementationSteps: [
        {
            icon: "SyncIcon",
            title: "Connect & Import",
            description: "Sync asset inventory, policies, and NIST 800-171 artifacts."
        },
        {
            icon: "ViewModuleIcon",
            title: "Select Level",
            description: "Choose Foundational 1, Advanced 2, or Expert 3—ComplianceHub scopes controls instantly."
        },
        {
            icon: "AssignmentTurnedInIcon",
            title: "Remediate Gaps",
            description: "Assign tasks, track progress, and close findings with built-in guidance."
        },
        {
            icon: "GetAppIcon",
            title: "Generate Evidence",
            description: "Download assessor-ready documentation and keep dashboards live for future audits."
        }
    ]
};

export default cmmcData;