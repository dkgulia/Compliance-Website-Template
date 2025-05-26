// src/app/hexafort-secure/constants/hexafortSecureData.ts
import { StaticImageData } from 'next/image';

// Types
export interface HexafortSecureStep {
    heading: string;
    description: string;
    image?: string | StaticImageData;
    imagePrompt?: string;
}

export interface PlatformFeature {
    title: string;
    description: string;
    icon: string;
    href: string;
    isNew?: boolean;
}

// Data
export const hexafortSecureData = {
    pageTitle: "HexaFort Secure — Enterprise Security, Re-imagined",
    pageSubTitle: "Unified risk, compliance, threat and user-awareness in one AI-driven platform",
    pageDescription:
        "HexaFort Secure unifies governance, risk management, real-time threat detection, asset monitoring, compliance automation, and user awareness into a single command center—giving leadership complete visibility and control while slashing overhead.",
    keywords: [
        "enterprise security platform",
        "AI-driven security management",
        "security compliance automation",
        "risk and threat visibility",
        "HexaFort Secure"
    ],
    hero: {
        title: "HexaFort Secure — Enterprise Security, Re-imagined",
        subtitle: "In today's threat landscape, cybersecurity is a business priority.",
        description: [
            "HexaFort Secure is a comprehensive Enterprise Security Management solution designed to give organizations complete control, visibility, and automation across every area of their security infrastructure."
        ],
        image: "",
        imagePrompt: "HexaFort Secure unified dashboard with widgets for risk, threat alerts, asset inventory and compliance status",
        ctaText: "Request Demo"
    },
    overview: {
        title: "Complete Security Management",
        description: [
            "Built for modern enterprises, HexaFort Secure unifies governance, risk management, real-time threat detection, asset monitoring, compliance automation, and user awareness into one seamless, AI-driven platform.",
            "It isn't just a tool; it's a virtual security command center—simplifying audits, strengthening defenses, reducing overhead, and giving leadership confidence that security is under control every single day."
        ]
    },
    keyFeatures: {
        title: "Key Capabilities",
        features: [
            {
                title: "Customizable Risk & Compliance Modules",
                description: "Tailor frameworks, scoring models, and controls to fit your industry and stay compliant with ISO 27001, SOC 2, GDPR, HIPAA, and more with minimal effort."
            },
            {
                title: "Built for Scale & Simplicity",
                description: "Whether you're a startup scaling fast or an enterprise managing global operations, HexaFort Secure grows with you—securely, efficiently, and intelligently."
            }
        ]
    },
    features: {
        title: "Why Choose HexaFort Secure?",
        subtitle: "",
        steps: [
            {
                heading: "All-in-One Security Platform",
                description: "Manage risk, compliance, assets, policies, incidents, vendors, and user awareness—without juggling disconnected tools.",
                image: "",
                imagePrompt: "Central dashboard listing modules for risk, compliance, incidents and awareness"
            },
            {
                heading: "AI-Driven Insights & Automation",
                description: "Identify compliance gaps, generate policies, detect anomalies, and receive mitigation suggestions—proactive security on autopilot.",
                image: "",
                imagePrompt: "AI policy generator auto-filling control clauses"
            },
            {
                heading: "Threat & Asset Visibility",
                description: "Gain real-time visibility into cloud, endpoints, and user behaviour to detect vulnerabilities before attackers do.",
                image: "",
                imagePrompt: "Asset heat-map highlighting high-risk resources"
            },
            {
                heading: "User Awareness & Policy Enforcement",
                description: "Automated phishing simulations, security pop-ups, and compliance-driven training integrated with policy workflows and tasks.",
                image: "",
                imagePrompt: "Phishing-simulation report showing open and click-through rates"
            }
        ]
    },
    bookDemo: {
        tagline: "HexaFort Advantage",
        title: "Automate Security, Unlock Business",
        points: [
            "Automate security and compliance to save Time, Dollars, Effort",
            "Handle complex security challenges and solve for custom requirements",
            "Achieve continuous security posture and unlock new business opportunities"
        ],
        buttonText: "Book Your Demo"
    },
    platformFeatures: [
        {
            title: 'Centralised Risk Management',
            description: 'Efficiently manage all your organizational risks in one place',
            icon: 'security',
            href: '/risk-management',
        },
        {
            title: 'Automated GRC Tool',
            description: 'Streamline your GRC processes with intelligent automation',
            icon: 'auto_awesome',
            href: '/grc-tool',
        },
        {
            title: 'Cloud Security Posture Management',
            description: 'Monitor and secure your cloud infrastructure',
            icon: 'cloud',
            href: '/cspm',
        },
        {
            title: 'Third Party Risk Management',
            description: 'Assess and manage risks from third-party vendors',
            icon: 'business',
            href: '/third-party-risk-management',
        },
        {
            title: 'Vulnerability Management',
            description: 'Identify, prioritize, and remediate security vulnerabilities',
            icon: 'bug_report',
            href: '/vulnerability-management',
        },
        {
            title: 'Evidence Collection',
            description: 'Efficient collection and management of compliance evidence',
            icon: 'policy',
            href: '/automated-evidence-collection',
        },
        {
            title: 'Trust Center',
            description: 'Build customer trust with transparent security practices',
            icon: 'verified',
            href: '/trust-center',
        },
        {
            title: 'Control Framework',
            description: 'Manage security controls across multiple compliance frameworks',
            icon: 'dashboard',
            href: '/customizable-control-framework',
        },
        {
            title: 'Security Training',
            description: 'Educate your team on security best practices',
            icon: 'people',
            href: '/security-training',
        },
        {
            title: 'Integrations',
            description: 'Connect with your existing tools and systems',
            icon: 'link',
            href: '/integrations',
        },
        
    ]
};

export default hexafortSecureData;