

import heroImage from '../images/iso27001.png'
import ciaTriadImage from '../images/dual-hex-white.png'
import BannerImage from '../images/27001DEMOIMAGE.png'
import step1 from '../images/planning-and-scope-definition--perhaps-a-document-.png'
import step2 from'../images/implementation-of-controls--maybe-a-shield-or-lock.png'
import step3 from '../images/auditing-and-measurement--perhaps-a-magnifying-gla.png'
import step4 from '../images/addressing-issues--maybe-a-wrench-or-repair-tool-.png'
import step5 from '../images/update-.png'
import step6 from '../images/certification--maybe-a-certificate-or-badge-.png'
import {
    GppMaybe as GppMaybeIcon,
    Lock as LockIcon,
    Policy as PolicyIcon,
    PlaylistAddCheckCircle as PlaylistAddCheckCircleIcon,
    DoneAll as DoneAllIcon,
    IntegrationInstructions as IntegrationInstructionsIcon
  } from "@mui/icons-material";


export type Step = {
  title: string;
  description: string;
  icon: React.ElementType;
};

export type SectionContent = {
  title: string;
  subtitle: string;
  steps: Step[];
};

export const iso27001Data = {
    pageTitle: "ISO 27001: Comprehensive Guide to Certification and Compliance",
    pageSubTitle: "Your Roadmap to Building Trust and Protecting Information",
    pageDescription: [
        "Learn why ISO 27001 compliance is crucial, discover key steps to certification, and see how it helps organizations protect their information security while meeting global standards."
    ],
    keywords: [
        "iso27001",
        "iso27001 compliance",
        "iso27001 certified",
        "iso27001 2022",
        "iso27001 meaning",
        "what is iso27001",
        "iso27001 audit",
        "iso27001 cost",
        "iso27001 requirements",
        "rpn iso27001",
        "benefits of iso27001"
    ],
    imageIdeasForPage: [
        "A hero image depicting a secure digital infrastructure (servers, locks, data flows)",
        "An illustration showing the lifecycle of ISO 27001 certification (Stage 1, Stage 2, Surveillance, Recertification)",
        "A policy management or risk management screenshot"
    ],
    sections: [
        {
            Sno: "1",
            blockType: "Hero",
            designGuidelines: "Large hero background with an abstract cybersecurity theme",
            interactiveElement: "none",
            content: {
                heroTitle: "Become ISO 27001 Certified with Confidence",
                heroSubtitle:
                    "Protect your information assets, boost client trust, and simplify compliance.",
                heroDescription: [
                    "ISO 27001 is the international standard for information security management. Achieving certification proves your commitment to protecting data and meeting rigorous security best practices.",
                ],
                heroImage: heroImage,
                imagePrompt:"ISO 27001 certification logo, featuring the text 'ISO 27001' alongside a globe symbol. The globe is stylized with latitude and longitude lines, representing global standards. The text 'ISO' is bold and prominently positioned next to '27001' in a clean, professional font. No additional design elements, simple and corporate style."
            },
        },
        {
            Sno: "2",
            blockType: "Features/Benefits",
            designGuidelines: "Icon cards with bullet points highlighting the importance of ISO 27001",
            interactiveElement: "none",
            content: {
                title: "Key Benefits of ISO 27001 Certification",
                subtitle: "Why achieving ISO 27001 compliance matters",
                features: [
                    {
                        title: "Enhanced Trust & Reputation",
                        muiIcon: "Star",
                        description: "Demonstrate to customers and stakeholders that you have robust controls. This fosters trust in your organization’s ability to handle sensitive data."
                    },
                    {
                        title: "Reduced Risk & Data Breaches",
                        muiIcon: "Security",
                        description: "ISO 27001 systematically addresses vulnerabilities using risk-based thinking, which helps reduce the risk of data breaches and other incidents."
                    },
                    {
                        title: "Global Recognition",
                        muiIcon: "Public",
                        description: "As an international standard, ISO 27001 is recognized worldwide, giving you a competitive edge and opening up new markets."
                    },
                    {
                        title: "Streamlined Processes",
                        muiIcon: "Autorenew",
                        description: "Minimize repetitive compliance efforts. Implementing the ISMS can improve business processes, unify documentation, and lower security costs."
                    }
                ]
            }
        },
        {
            Sno: "3",
            blockType: "Simple Info",
            interactiveElement: "image",
            designGuidelines: "Hero-like text block with subheading and an image on the left",
            content: {
                title: "What is ISO 27001?",
                subtitle: "A Global Information Security Standard",
                subheading: "Confidentiality. Integrity. Availability.",
                imageIdea: "An illustration that shows the CIA triad with locks and shield icons",
                imageSrc: ciaTriadImage,
                imagePrompt:"A futuristic and professional vector illustration representing ISO 27001 information security certification. The image features a secure digital environment with a shield in the center, containing a padlock symbol to represent cybersecurity. Around the shield, there are interconnected network elements, including cloud security, firewalls, encrypted data, and compliance checkmarks. The background is dark-themed with glowing blue and orange accent lights, symbolizing trust and protection. The design should feel modern, corporate, and suitable for a technology and compliance-focused audience."
            },
        },
        {
            Sno: "4",
            blockType: "Simple Info",
            interactiveElement: "none",
            designGuidelines: "Single-column text describing the certification steps in detail",
            content: {
                title: "Understanding ISO 27001 Certification Lifecycle",
                steps: [
                    "Stage 1 (Documentation Review): An auditor checks your Information Security Management System (ISMS) policies and procedures to confirm they meet ISO 27001 requirements.",
                    "Stage 2 (Implementation Review): The auditor tests your implemented controls and processes to ensure they work effectively. Passing results in an ISO 27001 certificate valid for three years.",
                    "Surveillance Audits (Years 1 & 2): Annual checkups to validate your ongoing compliance. They confirm you maintain and continuously improve your ISMS.",
                    "Recertification Audit (Year 3): Similar to Stage 2, recertification ensures your program still meets ISO 27001:2022 standards. A successful audit renews your certificate for another three-year cycle."
                ]
            }
        },
        {
            Sno: "5",
            blockType: "Additional Section",
            interactiveElement: "image",
            designGuidelines: "Text with a small illustration or icon on the right, focusing on the concept of RPN or Risk Priority",
            content: {
                title: "Managing Risk with ISO 27001",
                subtitle: "RPN (Risk Priority Number) and Other Risk Tools",
                heading: "Identify, Evaluate, and Treat Security Risks",
                subheading: "ISO 27001 encourages systematic risk assessment, often using methods like RPN to prioritize threats based on potential impact and likelihood.",
                imageIdea: "A chart showing risk severity or an RPN matrix"
            }
        },
        {
            Sno: "6",
            blockType: "Features Block",
            designGuidelines: "Flat list design with short explanations for each item",
            interactiveElement: "muiIcon",
            content: {
                title: "ISO 27001 Controls & Requirements",
                subtitle: "Annex A’s 93 Controls in Four Categories",
                features: [
                    {
                        title: "Organizational Controls",
                        muiIcon: "Gavel",
                        description: "Define policies, roles, responsibilities, and business processes aligned with your ISMS."
                    },
                    {
                        title: "People Controls",
                        muiIcon: "Person",
                        description: "Train staff, manage onboarding and offboarding, and ensure background checks and security awareness."
                    },
                    {
                        title: "Physical Controls",
                        muiIcon: "LocationCity",
                        description: "Safeguard facilities and equipment using alarms, CCTV, locked doors, and restricted zones."
                    },
                    {
                        title: "Technological Controls",
                        muiIcon: "Computer",
                        description: "Enforce encryption, firewalls, intrusion detection, and other best practices to secure digital assets."
                    }
                ]
            }
        },
        {
            Sno: "7",
            blockType: "List",
            interactiveElement: "colored mui icons",
            designGuidelines: "Numbered list with icons on the left and short text on the right",
            content: {
                title: "Steps to Get ISO 27001 Certified",
                subtitle: "Your ISO 27001 1st Step and Beyond",
                list: [
                    "Define Your Scope: Identify systems, processes, and business units included in your ISMS.",
                    "Perform a Gap Assessment: Compare current practices to ISO 27001 requirements to see what’s missing.",
                    "Implement Controls & Documentation: Address gaps, build policies, and document evidence for audit readiness."
                ]
            }
        },
        {
            Sno: "8",
            blockType: "Call to Action",
            interactiveElement: "muiIcon",
            designGuidelines: "Centered text with button. CTA prompting to learn about solutions or to contact sales",
            content: {
              title: "Strengthen Your ISMS Framework",
              description: "Boost customer trust and secure your organization with the world’s leading information security standard. Ensure your policies, processes, and controls align with ISO 27001, minimizing risks and safeguarding critical data.",
              buttonText: "Start Your ISO Journey",
              buttonLink: "/compliance",
              image:{
                 src:BannerImage,
                alt: "ISO 27001 Security"
              },
              imagePrompt:"A digital illustration in a flat style, portraying a modern office environment focused on information security and compliance with ISO 27001 standards. Simple lines and shapes depict two professionals—one pointing to a large digital display showing secure data flow diagrams, lock icons, and compliance checklists. Both individuals wear business-casual attire and appear confidently engaged in the discussion."
            }
          },
        {
            Sno: "9",
            blockType: "Top/Offer",
            interactiveElement: "muiIcon",
            designGuidelines: "Eye-catching section highlighting an exclusive consulting offer",
            content: {
                title: "Limited-Time: Free Pre-Assessment Consultation",
                subtitle: "Get a high-level readiness check from our experts at no cost",
                imageIdea: "An infographic of a quick readiness scanning"
            }
        },
        {
            Sno: "10",
            blockType: "FAQ",
            designGuidelines: "Collapsible sections for each Q&A",
            interactiveElement: "none",
            content: {
                title: "Frequently Asked Questions",
                subtitle: "ISO 27001 FAQ",
                questions: [
                    {
                        question: "Why is ISO 27001 important for my business?",
                        answer: "ISO 27001 helps protect sensitive information, comply with regulations, and build trust with customers and partners. It helps your organization manage risk, protect data, and demonstrate a global standard for information security. Certification provides a competitive edge and often opens new market opportunities."
                    },
                    {
                        question: "What is an ISMS in the context of ISO 27001?",
                        answer: "An Information Security Management System (ISMS) is a set of policies, procedures, and controls to systematically manage information risks. It's the foundation of ISO 27001."
                    },
                    {
                        question: "How long does it take to get ISO 27001 certified?",
                        answer: "The certification timeline depends on your ISMS maturity and scope. With the right platform and support, many organizations achieve certification in 3-6 months."
                    },
                    {
                        question: "What are the requirements for ISO 27001 compliance?",
                        answer: "ISO 27001 has 114 controls across 14 clauses and 35 control categories. Requirements span security policies, asset management, access control, incident management, and more."
                    },
                    {
                        question: "What steps are involved in ISO 27001 implementation?",
                        answer: "Key steps: 1) Define ISMS scope 2) Perform risk assessment 3) Select controls 4) Document policies 5) Implement controls 6) Conduct training and internal audits 7) Certification audit"
                    },
                    {
                        question: "What is the difference between ISO 27001 and SOC 2?",
                        answer: "Both are popular security frameworks. ISO 27001 is globally recognized as an information security management standard, while SOC 2 is an audit framework often required in the U.S. for service organizations. The two can complement each other."
                    },
                    {
                        question: "Which version is the latest: ISO 27001:2013 or ISO 27001:2022?",
                        answer: "The standard was most recently updated in 2022, adding new controls and clarifications. Organizations should aim to align with ISO 27001:2022 for compliance."
                    },
                    {
                        question: "What are ISO 27001 controls?",
                        answer: "They're the safeguards your organization implements to address identified risks. Annex A of ISO 27001:2022 lists 93 controls grouped by organizational, people, physical, and technological categories."
                    },
                    {
                        question: "How do surveillance audits work?",
                        answer: "During each of the two years after initial certification, your certifying body checks sample controls to ensure you remain compliant. If nonconformities are found, you must address them promptly to maintain certification status."
                    },
                    {
                        question: "How often do I need to get recertified for ISO 27001?",
                        answer: "ISO 27001 certificates are valid for 3 years. Surveillance audits are conducted in years 1 and 2 to verify ongoing compliance."
                    }
                ]
            }
        },
        {
            Sno: "11",
            blockType: "ISO 27001 Compliance Hub",
            interactiveElement: "muiIcon",
            designGuidelines: "Black background, white text, with structured information and icons for each compliance step",
            content: {
              title: "ISO 27001 Compliance Hub",
              subtitle: "A structured approach to help organizations establish, operate, and improve their Information Security Management System.",
              steps: [
          {
            title: "Define Scope & Context",
            description: "Identify organizational boundaries and objectives for the ISMS, aligning them with regulatory demands and stakeholder expectations.",
            icon: PolicyIcon
          },
          {
            title: "Conduct Risk Assessment",
            description: "Analyze threats and vulnerabilities; decide how to treat risks through prevention, detection, or other measures.",
            icon: LockIcon
          },
          {
            title: "Create & Implement Policies",
            description: "Establish robust security policies, procedures, and guidelines so everyone understands their responsibilities.",
            icon: PlaylistAddCheckCircleIcon
          },
          {
            title: "Ongoing Audits & Reviews",
            description: "Regularly measure ISMS performance, identify improvements, and maintain readiness for external audits.",
            icon: DoneAllIcon
          },
          {
            title: "Integrate with Other Standards",
            description: "Leverage Annex SL to integrate with other ISO standards (e.g., ISO 9001) for a unified management system.",
            icon: IntegrationInstructionsIcon
          },
          {
            title: "Continual Improvement",
            description: "Adopt the PDCA cycle—Plan, Do, Check, Act—to ensure your ISMS evolves with emerging threats and changes.",
            icon: GppMaybeIcon
          }
        ]
            }
          },
            {
                Sno: "12",
                blockType: "Workflow",
                interactiveElement: "images",
                designGuidelines: "Structured grid with images representing each step",
                content: {
                  title: "ISO 27001 Implementation Roadmap",
                  subtitle: "Follow a structured Plan-Do-Check-Act approach. Define your context, implement security controls, and continually refine your ISMS to meet the latest requirements.",
                  steps: [
                    { title: "Plan: Define Scope & Objectives",
                      image: step1,
                      imagePrompt:'A compliance-focused icon featuring a shield with a checklist and magnifying glass, symbolizing defining scope, organizational boundaries, and security objectives.'
                    },
                    { title: "Do: Implement Controls & Policies",
                      image: step2,
                      imagePrompt:'An icon of a checklist and a pencil overlayed on a security badge, representing implementing security controls and writing policies for organizational compliance'
                    },
                    { title: "Check: Audit & Measure Effectiveness",
                      image: step3,
                      iamgePrompt:'An icon of a clipboard with audit details, a magnifying glass, and a bar chart, symbolizing auditing and evaluating the effectiveness of security measures.'
                    },
                    { title: "Act: Address Nonconformities",
                      image: step4,
                      imagePrompt:'An issue resolution icon featuring a warning symbol and gear, illustrating identifying and addressing nonconformities in compliance processes.'
                    },
                    { title: "Update & Improve Continuously",
                       image: step5,
                      imagePrompt:'A continuous improvement icon showing a circular arrow around a bar chart and shield, symbolizing the iterative process of refining and upgrading security measures.'
                    },
                    { title: "Certification & Maintenance",
                      image: step6,
                      imagePrompt:'An icon featuring a certificate and gear, representing the final step of achieving certification and maintaining compliance standards.'
                    }
                  ]
                }
            },

    ]
};

