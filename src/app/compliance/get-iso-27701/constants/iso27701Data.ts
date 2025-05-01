
import { SvgIconComponent } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DashboardImage from '../images/trust.png';
import DocumentImage from '../images/streamlined-regulatory-compliance.png';
import RiskImage from '../images/-risk-management.png';
import EfficiencyImage from '../images/improved-operational-efficiency.png';
import riskAssessmentImage from '../images/-risk-management.png'
import privacyByDesignImage from '../images/privacy-by-design-.png';
import implementationTimelineImage from '../images/implementation-timeline.png';
import teamAlignmentImage from '../images/team-alignment.png';
import { StaticImageData } from 'next/image'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface Iso27701Step {
	step: number;
	title: string;
	description: string;
}

interface Iso27701Feature {
	id: number;
	title: string;
	description: string;
	image: StaticImageData;
}

interface Iso27701ExtendedContent {
	title: string;
	icon: SvgIconComponent;
	description: string;
}

interface Iso27701Comparison {
	title: string;
	icon: SvgIconComponent;
	description: string;
}

interface Iso27701Pitfall {
	title: string;
	image:StaticImageData,
	description: string;
}

interface Iso27701RealWorld {
	title: string;
	image:StaticImageData,
	description: string;
}

interface Iso27701Faq {
	question: string;
	answer: string;
}

const iso27701Data = {
	heroTitle: '🔒 ISO 27701 Compliance, Made Easy',
	heroSubtitle: 'Extend Your ISMS for Cutting Edge Data Security and Privacy Compliance',
	heroDescription: [
		'ISO 27701 is an international standard that extends ISO 27001 and ISO 27002 for privacy information management. It helps organizations establish, implement, and continuously improve a Privacy Information Management System (PIMS). By aligning data security practices with privacy requirements, you can safeguard personal data, reduce breach risks, and build greater trust among stakeholders.',
		'In this pillar page, we’ll explore the core principles of ISO 27701, highlight its benefits, outline an implementation roadmap, and provide answers to frequently asked questions—ensuring you’re well-equipped to meet modern privacy demands.',
	],
	keywords: [
		'ISO 27701',
		'ISO 27701 extension',
		'ISO/IEC 27701 compliance',
		'Privacy Information Management System',
		'PIMS',
		'ISO 27001',
		'Data Security',
		'GDPR alignment',
	],
	steps: [
		{
			step: 1,
			title: 'Understand the Context of Your Organization',
			description:
				'Determine whether your organization acts as a PII controller or a PII processor. Identify which privacy regulations apply, such as GDPR or other global frameworks.',
		},
		{
			step: 2,
			title: 'Perform Risk Assessments',
			description:
				'Evaluate both information security and privacy risks, considering the impact on personal data (PII). Use integrated or separate assessments for thorough analysis.',
		},
		{
			step: 3,
			title: 'Expand Your ISMS',
			description:
				'Incorporate ISO 27701-specific controls into your existing ISO 27001 ISMS. Ensure policies address privacy management, including data handling, storage, and erasure.',
		},
		{
			step: 4,
			title: 'Implement Privacy by Design',
			description:
				'Embed privacy requirements early in system or process development. This includes thorough data minimization, transparency, and strong encryption measures.',
		},
		{
			step: 5,
			title: 'Monitor & Continually Improve',
			description:
				'Conduct periodic internal audits, track performance with metrics, and keep refining controls to maintain ongoing compliance and trust.',
		},
	] as Iso27701Step[],
	features: [
		{
			id: 1,
			title: 'Enhanced Trust & Credibility',
			description:
				'ISO 27701 certification showcases an advanced commitment to privacy and data security, reassuring clients and stakeholders that their data is in safe hands.',
			image: DashboardImage,
		},
		{
			id: 2,
			title: 'Streamlined Regulatory Compliance',
			description:
				'By aligning with global privacy laws like GDPR, you reduce the complexity of meeting multiple legal obligations—protecting your organization from fines or legal actions.',
			image: DocumentImage,
		},
		{
			id: 3,
			title: 'Robust Risk Management',
			description:
				'Adopting ISO 27701 fosters a continuous risk assessment culture. This proactive approach addresses vulnerabilities before they become costly breaches.',
			image: RiskImage,
		},
		{
			id: 4,
			title: 'Improved Operational Efficiency',
			description:
				'Implementing privacy controls alongside information security processes streamlines workflows, reducing duplication of efforts and compliance overhead.',
			image: EfficiencyImage,
		},
	] as Iso27701Feature[],
	section4: [
		{
			title: 'What Is ISO 27701?',
			icon: InfoIcon,
			description:
			    'ISO 27701 extends ISO 27001 and ISO 27002 for privacy information management. It guides organizations in managing PII, covering security and privacy. It ensures compliance with data protection laws in a unified system.',
		    },
		    {
			title: 'Key Components of ISO 27701',
			icon: VpnKeyIcon,
			description:
			    'ISO 27701 defines roles like PII controllers and processors, aligns privacy with ISMS controls, and outlines duties to PII principals. It promotes clear responsibilities, reducing data breach risks while ensuring transparency.',
		    }


	] as Iso27701ExtendedContent[],
	section5: [
		{
			title: 'ISO 27701 vs. SOC 2',
			icon: CompareArrowsIcon,
			description:
				'Where SOC 2 revolves around service organization controls for security and availability, ISO 27701 zeroes in on privacy compliance within an ISMS. Both can coexist, each adding a layer of assurance.',
		},
		{
			title: 'ISO 27701 vs. ISO 27018 / 29151',
			icon: CheckCircleIcon,
			description:
				'ISO 27018 and ISO 29151 also address privacy-related controls for cloud and PII, but ISO 27701 integrates them systematically within the 27001 framework. This approach is broader and more holistic.',
		},
	] as Iso27701Comparison[],
	section6: [
		{
			title: 'Pitfall: Underestimating Privacy Risk',
			image: riskAssessmentImage,
			description:
			    'Some organizations assume existing security measures suffice. In reality, privacy introduces unique challenges like consent, lawful basis, and data minimization. Always perform a privacy risk assessment.',
		    },
		    {
			title: 'Best Practice: Embed Privacy by Design',
			image: privacyByDesignImage,
			description:
			    'Plan for data protection from day one. For instance, adopt privacy impact assessments and robust encryption standards at the earliest stage of project development.',
		    },
	] as Iso27701Pitfall[],
	section7: [
		{
			title: 'Implementation Timeline',
			image: implementationTimelineImage,
			description:
			    'Small to medium organizations often achieve certification within 3–6 months by leveraging existing ISO 27001 frameworks and focusing on documentation for privacy-specific measures.',
		    },
		    {
			title: 'Team Alignment & Training',
			image: teamAlignmentImage,
			description:
			    'Stakeholders across compliance, legal, IT, and management must understand the synergy between privacy and security. Providing targeted training ensures everyone is on the same page.',
		    },
	] as Iso27701RealWorld[],
	faq: [
		{
			question: 'Why is ISO 27701 important?',
			answer:
				'ISO 27701 addresses the growing need for organizations to handle personal data responsibly. It extends an existing ISMS to incorporate privacy controls, improving transparency and protecting PII.',
		},
		{
			question: 'How does ISO 27701 relate to GDPR?',
			answer:
				'ISO 27701 requirements closely align with many GDPR principles. By implementing ISO 27701, organizations are better positioned to meet GDPR obligations like lawful processing and data subject rights.',
		},
		{
			question: 'How do I start with ISO 27701?',
			answer:
				'Begin by reviewing your current ISO 27001 controls and identifying privacy gaps. Conduct risk assessments specific to personal data and formalize PIMS roles—like PII controller vs. processor. Then implement the recommended controls.',
		},
		{
			question: 'How much does ISO 27701 certification cost?',
			answer:
				'Costs vary depending on organizational size, scope, and existing compliance measures. For a tailored quote, contact our team—we’ll help you assess your readiness and estimate timelines.',
		},
	] as Iso27701Faq[],
	ctaText: [
		'Ready to strengthen your data privacy posture? Our experts can guide you in aligning your ISMS with ISO 27701. Contact us today to fortify trust and compliance!',
	],
	imageIdeasForPage: [
		'Illustration showing an integrated ISMS with privacy icons layered over it',
		'Flowchart indicating how ISO 27701 extends ISO 27001 controls',
		'Team working together on privacy risk assessment, highlighting synergy',
	],
	heroBullets: [
		{
		    icon: AssignmentIcon,
		    title: '1:1',
		    text: 'Platform Setup'
		},
		{
		    icon: AccessTimeIcon,
		    title: '10X',
		    text: 'Faster Audits'
		},
		{
		    icon: CheckCircleIcon,
		    title: '100%',
		    text: 'Success Rate'
		}
	    ]
};

export default iso27701Data;