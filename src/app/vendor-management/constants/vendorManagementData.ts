// src/app/vendor-management/constants/vendorManagementData.ts
import { StaticImageData } from 'next/image';

// Types
export interface VendorManagementBenefit {
    title: string;
    muiIcon: string;
    description: string;
}

export interface VendorManagementStep {
    heading: string;
    description: string;
    image?: string | StaticImageData;
    imagePrompt?: string;
}

export interface VendorManagementFeature {
    title: string;
    muiIcon: string;
    description: string;
}

export interface VendorManagementPitfall {
    heading: string;
    subheading: string;
}

export interface VendorManagementQuestion {
    question: string;
    answer: string;
}

// Data
export const vendorManagementData = {
    pageTitle: "Hexafort Vendor Management Module | AI-Driven Third-Party Risk Management",
    pageSubTitle: "Simplify vendor evaluation, assessment, and continuous monitoring with real-time risk insights.",
    pageDescription: 
        "Hexafort's Vendor Management Module simplifies the process of evaluating, assessing, and monitoring your vendors. With AI-powered automated questionnaire answering, real-time risk assessments, and actionable insights, you can ensure strong, secure, and compliant vendor relationships—all from one easy-to-use platform.",
    keywords: [
        "vendor management",
        "vendor risk management",
        "third party risk management",
        "vendor management software",
        "third party vendor risk management",
        "what is vendor management"
    ],
    hero: {
        title: "AI-Driven Vendor Management Module",
        subtitle: "Automate Third-Party Risk Management with Hexafort",
        description: [
            "Hexafort's Vendor Management Module simplifies the process of evaluating, assessing, and monitoring your vendors.",
            "With AI-powered automated questionnaire answering, real-time risk assessments, and actionable insights, you can ensure strong, secure, and compliant vendor relationships—all from one easy-to-use platform."
        ],
        image: "",
        imagePrompt: "Hero illustration showing an AI dashboard scoring multiple vendors in real-time",
        ctaText: "Book Your Demo"
    },
    benefits: {
        title: "Why Hexafort Vendor Management?",
        subtitle: "Four key advantages your security & compliance teams will love",
        features: [
            {
                title: "Effortless Vendor Evaluation",
                muiIcon: "checklist",
                description: "Score vendors across security, compliance, and operational criteria in minutes."
            },
            {
                title: "Real-Time Risk Assessment",
                muiIcon: "speed",
                description: "Instantly identify red flags and prioritize remediation with live risk scores."
            },
            {
                title: "AI-Driven Questionnaire Answering",
                muiIcon: "auto_fix_high",
                description: "Automate tedious questionnaires and eliminate human error with Hexafort AI."
            },
            {
                title: "Continuous Monitoring",
                muiIcon: "radar",
                description: "Stay updated on policy changes, compliance status, and emerging threats 24/7."
            }
        ]
    },
    process: {
        title: "How It Works",
        subtitle: "A streamlined four-step workflow",
        steps: [
            {
                heading: "1. Classify & Onboard",
                description: "Import vendors, assign criticality levels, and trigger initial due-diligence checks.",
                image: "",
                imagePrompt: "Illustration of onboarding wizard that tags vendor criticality"
            },
            {
                heading: "2. AI Questionnaire Automation",
                description: "Hexafort AI answers standard security questionnaires on your behalf, slashing turnaround time.",
                image: "",
                imagePrompt: "Animated mock-up of AI autofilling questionnaire fields"
            },
            {
                heading: "3. Real-Time Risk Scoring",
                description: "Live dashboards surface high-risk vendors with color-coded heat maps and trend lines.",
                image: "",
                imagePrompt: "Screenshot concept of risk heat-map dashboard"
            },
            {
                heading: "4. Collaborate & Remediate",
                description: "Track corrective actions, share evidence, and maintain an audit trail—all inside Hexafort.",
                image: "",
                imagePrompt: "Graphic of two users co-editing a remediation task list"
            }
        ]
    },
    aiQuestionnaire: {
        title: "AI-Powered Questionnaire Answering",
        description: [
            "Say goodbye to manual responses. Hexafort's AI engine generates precise answers instantly, freeing your team for higher-value work.",
            "Consistent, audit-ready answers every time."
        ],
        imagePrompt: "Friendly AI bot filling forms on a laptop"
    },
    continuousMonitoring: {
        title: "Continuous Vendor Monitoring",
        subtitle: "Risk never sleeps—and neither do we",
        highlightText: "24/7 alerts on compliance drift",
        description: "Hexafort tracks policy updates, breach disclosures, and compliance expirations in real-time so you can act fast.",
        subheading: "Stay one step ahead of emerging threats.",
        imagePrompt: "Live graph with spikes and alert notifications"
    },
    platformHighlights: {
        title: "Platform Highlights",
        subtitle: "Everything you need in one pane of glass",
        features: [
            {
                title: "Unified Dashboard",
                muiIcon: "dashboard",
                description: "View vendor status, tasks, and KPIs at a glance."
            },
            {
                title: "Automated Evidence Collection",
                muiIcon: "cloud_download",
                description: "Pull attestations, certificates, and SOC reports automatically."
            },
            {
                title: "Compliance Mapping",
                muiIcon: "rule",
                description: "Align vendors to SOC 2, ISO 27001, GDPR, and more."
            },
            {
                title: "Audit-Ready Trails",
                muiIcon: "history",
                description: "Immutable logs for every action to simplify audits."
            }
        ]
    },
    pitfalls: {
        title: "Common TPRM Pitfalls (and How We Solve Them)",
        subtitle: "Avoid these four costly mistakes",
        imagePrompt: "Warning icon beside checklist",
        list: [
            {
                heading: "Siloed Data",
                subheading: "Hexafort centralizes vendor records for single-source truth."
            },
            {
                heading: "Reactive Risk Reviews",
                subheading: "Real-time monitoring keeps you proactive, not reactive."
            },
            {
                heading: "Manual Questionnaire Fatigue",
                subheading: "AI automation slashes response time by up to 80%."
            },
            {
                heading: "Poor Audit Readiness",
                subheading: "Instant evidence export accelerates compliance audits."
            }
        ]
    },
    callToAction: {
        title: "Ready to Transform Vendor Management?",
        subtitle: "Experience Hexafort in action today.",
        imagePrompt: "Laptop screen with 'Schedule Demo' calendar invite",
        description: "Join hundreds of security leaders who automated their TPRM program in weeks, not months.",
        ctaText: "Schedule My Demo"
    },
    offer: {
        title: "Limited-Time Offer: Free Vendor Risk Assessment",
        subtitle: "Book a demo this month and get a complimentary assessment report."
    },
    faq: {
        title: "Vendor Management FAQ",
        subtitle: "Your questions, answered.",
        questions: [
            {
                question: "Why is vendor management important?",
                answer: "It mitigates security, compliance, and operational risks introduced by third-party vendors."
            },
            {
                question: "Does Hexafort provide vendor management solutions?",
                answer: "Yes. Hexafort's Vendor Management Module offers end-to-end vendor evaluation, risk assessment, and monitoring."
            },
            {
                question: "How do I get started with Hexafort Vendor Management?",
                answer: "Simply book a demo and our team will guide you through onboarding and best practices."
            },
            {
                question: "How much does Hexafort cost?",
                answer: "Pricing depends on vendor volume and feature needs. Contact us for a tailored quote."
            },
            {
                question: "Can Hexafort automate security questionnaires?",
                answer: "Yes. Our AI answers standard questionnaires, reducing manual effort up to 80%."
            },
            {
                question: "Is continuous vendor monitoring included?",
                answer: "Absolutely. Hexafort provides 24/7 monitoring with real-time alerts."
            },
            {
                question: "Which compliance frameworks are supported?",
                answer: "SOC 2, ISO 27001, GDPR, HIPAA, and more."
            },
            {
                question: "Does Hexafort integrate with my existing tools?",
                answer: "We offer integrations via REST API and popular GRC, ticketing, and SIEM platforms."
            },
            {
                question: "How secure is Hexafort?",
                answer: "The platform is SOC 2 Type II certified and follows industry-standard encryption."
            },
            {
                question: "What kind of support is available?",
                answer: "24/7 chat and email support with dedicated customer success managers for enterprise plans."
            }
        ]
    }
};

export default vendorManagementData;