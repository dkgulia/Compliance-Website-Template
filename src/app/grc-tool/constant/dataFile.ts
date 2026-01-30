// src/data/dataFile.ts
import { StaticImageData } from 'next/image';

// This is a placeholder for actual images that would be imported
// In a real implementation, you would import actual images
// import heroImage from '../assets/hero-image.png';

// Types for our data structure
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
  icon?: string;
}

export interface Solution {
  title: string;
  description: string;
  icon?: string;
}

export interface AIPoweredFeature {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface CompetitiveAdvantage {
  title: string;
  description: string;
  icon?: string;
}

export interface MarketOpportunity {
  year: string;
  description: string;
}

export interface Impact {
  title: string;
  description: string;
  icon?: string;
}

export interface Vision {
  title: string;
  description: string;
  icon?: string;
}

export interface FutureDirection {
  id: number;
  title: string;
  description: string;
}

export interface GoToMarketStrategy {
  title: string;
  description: string;
  icon?: string;
}

// Main data export
export const complianceData = {
  company: {
    name: "ComplianceHub",
    tagline: "Revolutionizing GRC for Sustainable Growth",
    description: "ComplianceHub is an AI-powered platform that provides a comprehensive suite of tools for managing all aspects of Information Security and Data Privacy. From risk assessments and compliance audits to incident response and data breach notification, ComplianceHub empowers businesses to navigate the evolving threat landscape and ensure the confidentiality, integrity, and availability of their critical data.",
    logo: "/images/compliancehub-logo.svg", // Placeholder path
  },

  challenges: [
    {
      title: "Data Breaches & Fines",
      description: "Data breaches are on the rise, leading to significant financial and reputational damage.",
      icon: "security_breach",
    },
    {
      title: "Compliance Fatigue",
      description: "Businesses struggle to keep up with the ever-changing regulatory landscape.",
      icon: "assignment_late",
    },
    {
      title: "Inefficient Processes",
      description: "Manual GRC processes are time-consuming, error-prone, and lack visibility.",
      icon: "pending_actions",
    },
    {
      title: "Managing Complex IT Infrastructures",
      description: "Modern IT environments are increasingly complex, with hybrid clouds, mobile devices, and a growing number of applications.",
      icon: "cloud_sync",
    },
  ],

  solutions: [
    {
      title: "Centralized Risk Management",
      description: "Identify, assess, and prioritize risks with our comprehensive risk register.",
      icon: "manage_search",
    },
    {
      title: "Automated Compliance",
      description: "Streamline workflows and automate tasks to reduce manual effort and errors.",
      icon: "auto_awesome",
    },
    {
      title: "Data-Driven Insights",
      description: "Gain real-time visibility into your compliance posture with customizable dashboards.",
      icon: "insights",
    },
  ],

  aiFeatures: [
    {
      id: 1,
      title: "AI-Powered Virtual CiSO",
      description: "Leverage intelligent AI guidance to streamline compliance strategy and proactively mitigate potential risks.",
      icon: "smart_toy",
    },
    {
      id: 2,
      title: "Intelligent Cloud Security Management",
      description: "Automatically detect, assess, and remediate cloud security vulnerabilities while ensuring continuous compliance with industry standards.",
      icon: "cloud_done",
    },
    {
      id: 3,
      title: "AI-Powered Security Questionnaire Answering",
      description: "Automate responses to security questionnaires with pre-built templates and AI assistance.",
      icon: "question_answer",
    },
    {
      id: 4,
      title: "Comprehensive Asset & Access Intelligence",
      description: "Dynamically manage and optimize asset lifecycles and access controls to create a robust, adaptive security ecosystem.",
      icon: "admin_panel_settings",
    },
  ],

  impact: [
    {
      title: "Reduced Compliance Costs",
      description: "Streamline processes and minimize manual effort, saving valuable time and resources.",
      icon: "savings",
    },
    {
      title: "Improved Operational Efficiency",
      description: "Increase productivity and agility by automating tasks and gaining real-time insights.",
      icon: "speed",
    },
    {
      title: "Enhanced Data Security",
      description: "Protect sensitive data and minimize the risk of breaches with robust security measures.",
      icon: "security",
    },
    {
      title: "Increased Revenue",
      description: "Minimize disruptions and maximize opportunities.",
      icon: "trending_up",
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Enhance trust and build strong relationships with clients.",
      icon: "people",
    },
    {
      title: "Enhanced Reputation",
      description: "Demonstrate a commitment to ethical and responsible business practices.",
      icon: "verified",
    },
  ],

  traction: {
    metrics: [
      {
        value: "September 25th, 2024",
        label: "ComplianceHub Genesis",
        description: "A journey of growth begins.",
      },
      {
        value: "14",
        label: "Customers",
        description: "We currently serve 14 satisfied clients across various industries.",
      },
      {
        value: "$50,000",
        label: "ARR",
        description: "Our current annual recurring revenue demonstrates the value we deliver.",
      },
      {
        value: "$192,000",
        label: "Pipeline till March 25",
        description: "Strong pipeline for new customers ensures continued growth and expansion.",
      },
      {
        value: "32",
        label: "Certifications and Compliances",
        description: "ComplianceHub handles 32 certifications and compliance across geographies and industries. Expanding to more in the coming months.",
      },
    ],
    dashboardImages: [
      "/images/dashboard-1.png", // Placeholder path
      "/images/dashboard-2.png", // Placeholder path
    ],
  },

  team: [
    {
      name: "Sreerag",
      role: "Founder and CEO",
      bio: "Sreerag, a seasoned leader with a decade of experience in delivering secure solutions, championing customer success, and driving compliance, founded and leads ComplianceHub.",
      image: "/images/team/sreerag.jpg",
    },
    {
      name: "Tony",
      role: "Co-Founder and CTO",
      bio: "Tony, a seasoned technologist with a proven track record of delivering innovative and customer-centric security solutions, drives technology at ComplianceHub.",
      image: "/images/team/tony.jpg",
    },
    {
      name: "Siddharth",
      role: "Co-Founder and COO",
      bio: "Siddharth, a results-oriented leader with expertise in operational excellence and customer satisfaction, drives efficient and secure operations at ComplianceHub.",
      image: "/images/team/siddharth.jpg",
    },
  ],

  goToMarket: [
    {
      title: "Target Market",
      description: "Focus on businesses of all sizes across various industries facing GRC challenges.",
      icon: "target",
    },
    {
      title: "Marketing Channels",
      description: "Leverage digital marketing, content marketing, and industry events to reach potential customers.",
      icon: "campaign",
    },
    {
      title: "Sales Strategy",
      description: "Emphasize consultative sales approach, focusing on understanding client needs and providing tailored solutions.",
      icon: "handshake",
    },
  ],

  financialProjections: [
    {
      id: 1,
      title: "Increase Customer Base",
      description: "Onboard new customers and expand existing partnerships.",
    },
    {
      id: 2,
      title: "Expand Product Features",
      description: "Develop and launch new features to enhance the GRC platform.",
    },
    {
      id: 3,
      title: "Market Expansion",
      description: "Target new markets and expand our global reach.",
    },
  ],

  ask: [
    {
      title: "Funding",
      description: "Secure funding to accelerate product development and market expansion.",
      icon: "payments",
    },
    {
      title: "Mentorship",
      description: "Gain valuable insights and guidance from industry experts.",
      icon: "psychology",
    },
    {
      title: "Network",
      description: "Access a network of investors, mentors, and potential partners.",
      icon: "share",
    },
  ],

  marketOpportunity: [
    {
      year: "2020",
      description: "COVID-19 exposes critical gaps in enterprise risk management, driving 65% of companies to accelerate digital compliance strategies.",
    },
    {
      year: "2022",
      description: "Regulatory complexity intensifies with DORA, GDPR, and cybersecurity mandates, creating an $80B global GRC market opportunity.",
    },
    {
      year: "2024",
      description: "AI-powered GRC solutions emerge, promising 40% efficiency gains and proactive risk management for forward-thinking enterprises.",
    },
  ],

  competitiveAdvantages: [
    {
      title: "AI-Powered Innovation",
      description: "Leverage AI technology to provide cutting-edge GRC solutions.",
      icon: "lightbulb",
    },
    {
      title: "Centralized Platform",
      description: "Offer a unified platform for managing all aspects of GRC.",
      icon: "hub",
    },
    {
      title: "Strong Traction",
      description: "Demonstrate early success and growing momentum in the market.",
      icon: "trending_up",
    },
    {
      title: "Data-Driven Decision-Making",
      description: "Our AI algorithms provide actionable insights to improve GRC effectiveness.",
      icon: "analytics",
    },
    {
      title: "Proactive Risk Mitigation",
      description: "Identify and address potential risks before they become major issues.",
      icon: "health_and_safety",
    },
  ],

  whyComplianceHub: [
    {
      id: 1,
      title: "Proven Team",
      description: "Experienced leaders with a passion for GRC.",
    },
    {
      id: 2,
      title: "Strong Market Fit",
      description: "Address a critical need for businesses of all sizes.",
    },
    {
      id: 3,
      title: "Scalable Solution",
      description: "Our platform can adapt to the evolving needs of businesses.",
    },
  ],

  vision: [
    {
      title: "Simplified Compliance",
      description: "Make compliance easier and more efficient for businesses.",
      icon: "check_circle",
    },
    {
      title: "Increased Trust",
      description: "Build trust with stakeholders by demonstrating a strong GRC posture.",
      icon: "verified_user",
    },
    {
      title: "Sustainable Growth",
      description: "Empower businesses to achieve their goals with confidence and security.",
      icon: "trending_up",
    },
  ],

  futureDirections: [
    {
      id: 1,
      title: "Leading GRC Innovation",
      description: "Continuously develop and improve our solutions.",
    },
    {
      id: 2,
      title: "Expanding Global Reach",
      description: "Serve businesses worldwide and address diverse regulatory needs.",
    },
    {
      id: 3,
      title: "Building a Sustainable Future",
      description: "Empower businesses to achieve sustainable growth with confidence.",
    },
  ],

  callToAction: {
    title: "Join Us in Revolutionizing GRC",
    description: "Let's work together to build a more secure and sustainable future for businesses.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
};

export default complianceData;