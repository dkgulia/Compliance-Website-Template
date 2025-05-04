import React from 'react';
import { 
    LinkRounded, 
    Settings, 
    Sync,
    SmartToy,
    BarChart,
    Security,
    Cloud,
    People,
    AccountCircle,
    BugReport,
    Storage,
    ApiRounded
} from '@mui/icons-material';

export interface HeroSectionData {
    title: string;
    subtitle: string;
    description: string[];
    ctaText: string;
}

export interface IntegrationCategoryData {
    title: string;
    icon: React.ElementType;
    description: string;
}

export interface BenefitData {
    title: string;
    description: string;
    icon: React.ElementType;
}

export interface IntegrationItem {
    name: string;
    logo: string;
    description: string;
    category: string;
    comingSoon?: boolean;
    isNew?: boolean;
}

export interface SectionData {
    title: string;
    description: string[];
}

export interface IntegrationsData {
    pageTitle: string;
    pageDescription: string;
    keywords: string[];
    hero: HeroSectionData;
    introduction: SectionData;
    benefits: {
        title: string;
        description: string;
        items: BenefitData[];
    };
    featured: {
        title: string;
        description: string;
        integrations: IntegrationItem[];
    };
    conclusion: SectionData;
}

const integrationsData: IntegrationsData = {
    pageTitle: "Integrations | Hexafort",
    pageDescription: "Connect Hexafort with your existing tools and systems to streamline compliance and security operations.",
    keywords: [
        "security integrations",
        "compliance automation",
        "security automation",
        "security tools integration",
        "cloud security integration",
        "risk management integration",
        "security dashboard",
        "unified security view",
        "security workflow automation",
        "compliance integrations"
    ],
    hero: {
        title: "Unlock the Power of Integration",
        subtitle: "Seamlessly connect Hexafort with your existing tools and workflows",
        description: [
            "Integrate Hexafort with your tech stack, and gain the ability to continuously monitor controls and collect evidence automatically."
        ],
        ctaText: "Explore Integrations"
    },
    introduction: {
        title: "Connect Once, Secure Everything",
        description: [
            "Your business is already running on powerful tools—and Hexafort is built to enhance them, not replace them. With our seamless integration capabilities, you can connect Hexafort to your existing cloud infrastructure, HR systems, identity providers, and more to bring all your security data under one intelligent roof.",
            "No more switching between systems or manually gathering compliance information. Hexafort brings everything together so you can see more, do more, and secure more—faster."
        ]
    },
    benefits: {
        title: "Why Integrations Matter",
        description: "Hexafort's integration engine ensures you don't have to overhaul your setup or compromise your processes. Just plug in, power up, and take control—with confidence and clarity.",
        items: [
            {
                title: "Unified Security View",
                description: "Instantly connect your core systems and gain real-time visibility into risks, user activities, and security configurations—all from one dashboard.",
                icon: LinkRounded
            },
            {
                title: "No Disruptions to Workflow",
                description: "Continue using your existing tools while Hexafort works quietly in the background, pulling in the data that matters and automating what used to be manual.",
                icon: Settings
            },
            {
                title: "Live Sync for Real-Time Insight",
                description: "Get up-to-date insights with continuous synchronization, ensuring that risk assessments, policy enforcement, and audit readiness reflect your current environment.",
                icon: Sync
            },
            {
                title: "Enable Automation & Efficiency",
                description: "Trigger automated workflows, alerting, and remediation based on data pulled from your integrated tools—freeing your team from repetitive tasks.",
                icon: SmartToy
            },
            {
                title: "Better Decision-Making",
                description: "With everything connected, Hexafort empowers you to act quickly, fix what matters, and maintain a strong, informed security posture.",
                icon: BarChart
            }
        ]
    },
    featured: {
        title: "Popular Integrations",
        description: "Hexafort connects with dozens of popular business tools and services. Here are some of our most-used integrations:",
        integrations: [
            {
                name: "AWS",
                logo: "/images/aws-logo.png",
                description: "Automatically collect security configurations and compliance evidence from AWS services.",
                category: "Cloud Infrastructure"
            },
            {
                name: "Google Cloud Platform",
                logo: "/images/gcp-logo.png",
                description: "Monitor GCP security settings and compliance controls in real-time.",
                category: "Cloud Infrastructure"
            },
            {
                name: "Azure",
                logo: "/images/azure-logo.png",
                description: "Connect with Microsoft Azure to track compliance and security across your Microsoft cloud resources.",
                category: "Cloud Infrastructure"
            },
            {
                name: "GitHub",
                logo: "/images/github-logo.png",
                description: "Integrate security checks directly into your code repositories and CI/CD pipelines.",
                category: "DevOps Tools"
            }
        ]
    },
    conclusion: {
        title: "Smarter Security Through Better Connections",
        description: [
            "At Hexafort, we believe security should meet you where you are. Our integration engine ensures you don't have to overhaul your setup or compromise your processes. Just plug in, power up, and take control—with confidence and clarity.",
            "Smarter security starts with better connections—let Hexafort bring it all together."
        ]
    }
};

export default integrationsData;