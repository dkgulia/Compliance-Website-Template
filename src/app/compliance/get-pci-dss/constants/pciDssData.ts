/* <ai_context>
   Constants for the PCI DSS page (features, workflow, FAQs, etc.)
</ai_context> */

import { SvgIconComponent } from '@mui/icons-material';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PolicyIcon from '@mui/icons-material/Policy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LockIcon from '@mui/icons-material/Lock';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import secureTransactionsIcon from '../images/secure-transactions-.webp';
import boostCustomerTrustIcon from '../images/boost-customer-trust.webp';
import unifiedComplianceIcon from '../images/unified-compliance.webp';
import reducedLiabilityIcon from '../images/reduced-liability-.webp';
import scopeGapAnalysisIcon from '../images/a-flat-design-icon-of-a-document-with-a-checklist-.webp';
import remediateDocumentIcon from '../images/a-padlock-icon-inside-symbolizing-strong-security-.webp';
import implementControlsIcon from '../images/a-shield-shaped-symbol-conveying-protection-or-sec.webp';
import externalScanTestingIcon from '../images/a-streamlined-icon-of-a-browser-window--suggesting.webp';
import attestationReportingIcon from '../images/reporting-icon.webp';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { StaticImageData } from 'next/image';

interface PciDssFeature {
	id: number;
	title: string;
	description: string;
	icon: StaticImageData;
}

interface PciDssWorkflow {
	title: string;
	icon: StaticImageData;
}

interface PciDssFaq {
	question: string;
	answer: string;
}

interface PciDssHeroBullet {
	icon: SvgIconComponent;
	text: string;
	title?: string;
}

interface PciDssHowIgniPCHelpsStep {
	text: string;
	icon: SvgIconComponent;
	color: string;
}

interface PciDssHubItem {
	title: string;
	description: string;
	icon: SvgIconComponent;
}

const pciDssData = {
	// Updated hero section for new layout with form on left
	heroTitle: '🔒 PCI DSS Compliance, Made Easy',
	heroSubtitle: 'Ensure Payment Card Data Security',
	highlightText: 'Protect Cardholder Data',
	heroDescription: [
		'Payment Card Industry Data Security Standard (PCI DSS) sets the requirements for securely storing, processing, and transmitting cardholder data.',
		'Protect your reputation and reduce data breach risks by complying with PCI DSS. IgniPC helps automate tasks, track controls, and streamline your path to certification.',
	],
	// Updated heroBullets to match SOC 2 format with specific icons
	heroBullets: [
		{
			icon: VideoCallIcon,
			title: '1:1 session',
			text: 'Platform Implementation',
		},
		{
			icon: AccessTimeIcon,
			title: '10X',
			text: 'Fast Audits',
		},
		{
			icon: CheckCircleOutlineIcon,
			title: '100%',
			text: 'Audit Success',
		},
	],

	// Original data preserved below
	bannerTitle: 'Safeguard Payment Data',
	bannerDescription:
		'Protect cardholder data and build trust. PCI DSS compliance \n is essential for any business processing credit or debit card information.',
	bannerButtonLabel: 'Book Your Demo',

	featuresHeading: 'Key Benefits of PCI DSS Compliance',

	howIgniPCHelpsTitle: 'How IgniPC Helps You Get PCI DSS Compliant',
	howIgniPCHelpsSubtitle:
		'Our structured approach streamlines complex PCI DSS mandates, ensuring a secure environment for handling payment data.',
	howIgniPCHelpsSteps: [
		{
			text: 'Identify and scope your cardholder data environment',
			icon: CreditCardIcon,
			color: '#FF9800',
		},
		{
			text: 'Analyze existing security controls and remediate gaps',
			icon: SecurityIcon,
			color: '#F44336',
		},
		{
			text: 'Implement robust encryption and secure network segments',
			icon: LockIcon,
			color: '#4CAF50',
		},
		{
			text: 'Leverage continuous monitoring & automated checks',
			icon: VerifiedUserIcon,
			color: '#2196F3',
		},
		{
			text: 'Conduct periodic assessments, scanning, and testing',
			icon: AssessmentIcon,
			color: '#3F51B5',
		},
		{
			text: 'Prepare QSA or SAQ documentation for validation',
			icon: AssignmentTurnedInIcon,
			color: '#673AB7',
		},
		{
			text: 'Attain PCI DSS certification & maintain compliance',
			icon: CheckCircleIcon,
			color: '#009688',
		},
		{
			text: 'Establish an incident response plan for breach readiness',
			icon: ReportProblemIcon,
			color: '#E91E63',
		},
	],

	complianceHubTitle: 'PCI DSS Compliance Hub',
	complianceHubSubtitle: 'A structured approach to safeguarding payment card data & building customer trust.',
	complianceHubItems: [
		{
			title: 'Maintain Secure Networks',
			description: 'Configure and maintain firewalls plus unique credentials to protect data environments.',
			icon: SecurityIcon,
		},
		{
			title: 'Protect Stored Data',
			description: 'Use encryption, hashing, and truncated PAN data to limit unauthorized access.',
			icon: VerifiedUserIcon,
		},
		{
			title: 'Implement Access Controls',
			description: 'Enforce strong user authentication, least privilege, and proper segmentation.',
			icon: PolicyIcon,
		},
		{
			title: 'Ongoing Policy Review',
			description: 'Regularly update policies, track changes, and conduct employee security awareness.',
			icon: PolicyIcon,
		},
	],

	workflowChip: 'Succeed with IgniPC',
	workflowTitle: 'PCI DSS Roadmap',
	workflowDescription:
		'Achieve PCI DSS compliance by following a structured path—scope your environment, close security gaps, strengthen controls, and complete the required self-assessment or external audit.',

	bookADemoTagline: 'Ready for PCI DSS?',
	bookADemoTitle: 'Automate PCI DSS, Protect Cardholder Data',
	bookADemoBullets: [
		'Minimize manual tasks and reduce errors',
		'Minimize breach liability with robust controls',
		'Continuously monitor, always stay compliant',
	],
	bookADemoButtonLabel: 'Book Your Demo',

	features: [
		{
			id: 1,
			title: 'Secure Transactions',
			description: 'Minimize cardholder data exposure and ensure encryption of sensitive payment information.',
			icon: secureTransactionsIcon,
		},
		{
			id: 2,
			title: 'Boost Customer Trust',
			description: 'Demonstrate a proactive approach to data protection, reassuring customers of secure payments.',
			icon: boostCustomerTrustIcon,
		},
		{
			id: 3,
			title: 'Unified Compliance',
			description:
				'Integrate PCI DSS with other security frameworks, reducing overlap and auditing burdens for your company.',
			icon: unifiedComplianceIcon,
		},
		{
			id: 4,
			title: 'Reduced Liability',
			description: 'Meet card brand requirements and lower your financial exposure in case of security incidents.',
			icon: reducedLiabilityIcon,
		},
	],
	workflow: [
		{
			title: 'Scope & Gap Analysis',
			icon: scopeGapAnalysisIcon,
		},
		{
			title: 'Remediate & Document',
			icon: remediateDocumentIcon,
		},
		{
			title: 'Implement Strong Controls',
			icon: implementControlsIcon,
		},
		{
			title: 'External Scan & Testing',
			icon: externalScanTestingIcon,
		},
		{
			title: 'Attestation & Reporting',
			icon: attestationReportingIcon,
		},
	],
	faq: [
		{
			question: 'Who must comply with PCI DSS?',
			answer:
				'Any organization that stores, processes, or transmits cardholder data, regardless of size or transaction volume.',
		},
		{
			question: 'Is PCI DSS mandatory by law?',
			answer:
				'It is enforced by the major credit card brands (Visa, Mastercard, etc.), not by government law, but noncompliance can lead to fines or account suspension.',
		},
		{
			question: 'What are the six control objectives?',
			answer:
				'They cover building/maintaining secure networks, protecting cardholder data, vulnerability management, strong access control, monitoring/testing networks, and an information security policy.',
		},
		{
			question: 'Do we need a QSA for PCI DSS?',
			answer:
				'Depending on your merchant level, you may need an external Qualified Security Assessor or you may self-assess using the appropriate SAQ.',
		},
		{
			question: 'How long does PCI DSS compliance take?',
			answer:
				'Timelines vary based on your environment complexity, existing controls, and readiness; typically anywhere from a few weeks to several months.',
		},
	]
};

export default pciDssData;
