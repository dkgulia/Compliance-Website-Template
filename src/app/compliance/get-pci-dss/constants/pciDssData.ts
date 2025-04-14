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

import secureTransactionsIcon from '../images/a-minimalist-padlock-with-a-credit-card-behind-it-.png';
import boostCustomerTrustIcon from '../images/a-handshake-between-a-business-and-customer-with-a.png';
import unifiedComplianceIcon from '../images/multiple-security-framework-icons-or-documents-con.png';
import reducedLiabilityIcon from '../images/a-shield-with-a-downward-trending-arrow-or-a-credi.png';

import scopeGapAnalysisIcon from '../images/a-magnifying-glass-examining-a-document-with-check.png';
import remediateDocumentIcon from '../images/a-padlock-or-security-icon-next-to-a-document-with.png';
import implementControlsIcon from '../images/a-shield-with-a-checkmark-and-security-elements-li.png';
import externalScanTestingIcon from '../images/a-computer-screen-or-network-diagram-with-scan-lin.png';
import attestationReportingIcon from '../images/a-document-with-a-seal-or-signature-and-a-checkmar.png';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { StaticImageData } from 'next/image';

interface PciDssFeature {
	id: number;
	title: string;
	description: string;
	icon: StaticImageData;
	iconPrompt?: string;
}

interface PciDssWorkflow {
	title: string;
	icon: StaticImageData;
	iconPrompt?: string;
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

	heroTitle: '🔒 PCI DSS Compliance, Made Easy',
	heroSubtitle: 'Ensure Payment Card Data Security',
	highlightText: 'Protect Cardholder Data',
	heroDescription: [
		'Payment Card Industry Data Security Standard (PCI DSS) sets the requirements for securely storing, processing, and transmitting cardholder data.',
		'Protect your reputation and reduce data breach risks by complying with PCI DSS. Hexafort helps automate tasks, track controls, and streamline your path to certification.',
	],

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


	bannerTitle: 'Safeguard Payment Data',
	bannerDescription:
		'Protect cardholder data and build trust. PCI DSS compliance \n is essential for any business processing credit or debit card information.',
	bannerButtonLabel: 'Book Your Demo',

	featuresHeading: 'Key Benefits of PCI DSS Compliance',

	howIgniPCHelpsTitle: 'How Hexafort Helps You Get PCI DSS Compliant',
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

	workflowChip: 'Succeed with Hexafort',
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
			iconPrompt: "A minimalist padlock with a credit card behind it and a small shield with a checkmark on a dark circular background. The design should convey data protection and encryption of payment information."
		},
		{
			id: 2,
			title: 'Boost Customer Trust',
			description: 'Demonstrate a proactive approach to data protection, reassuring customers of secure payments.',
			icon: boostCustomerTrustIcon,
			iconPrompt: "A handshake between a business and customer with a small shield or padlock above on a dark circular background. The image should represent trust, partnership, and secure payment processing."
		},
		{
			id: 3,
			title: 'Unified Compliance',
			description:
				'Integrate PCI DSS with other security frameworks, reducing overlap and auditing burdens for your company.',
			icon: unifiedComplianceIcon,
			iconPrompt: "Multiple security framework icons or documents connected by linking nodes or a central hub on a dark circular background. The design should illustrate integration of different security standards with minimal overlap."
		},
		{
			id: 4,
			title: 'Reduced Liability',
			description: 'Meet card brand requirements and lower your financial exposure in case of security incidents.',
			icon: reducedLiabilityIcon,
			iconPrompt: "A shield with a downward trending arrow or a credit card with a protective dome over it on a dark circular background. The icon should represent financial protection and reduced exposure to security incidents."
		},
	],
	workflow: [
		{
			title: 'Scope & Gap Analysis',
			icon: scopeGapAnalysisIcon,
			iconPrompt: "A magnifying glass examining a document with checkboxes or a clipboard with a partial network diagram on a circular background. The design should represent analysis and identification of systems within scope."
		},
		{
			title: 'Remediate & Document',
			icon: remediateDocumentIcon,
			iconPrompt: "A padlock or security icon next to a document with lines of text or a checklist, on a circular background. The image should convey fixing security issues and documenting the process."
		},
		{
			title: 'Implement Controls',
			icon: implementControlsIcon,
			iconPrompt: "A shield with a checkmark and security elements like a lock or firewall represented as stacked cards or layers on a circular background. The design should illustrate implementing robust security measures."
		},
		{
			title: 'External Scan & Testing',
			icon: externalScanTestingIcon,
			iconPrompt: "A computer screen or network diagram with scan lines or a radar-like element searching for vulnerabilities on a circular background. The icon should represent security testing and vulnerability scanning."
		},
		{
			title: 'Attestation & Reporting',
			icon: attestationReportingIcon,
			iconPrompt: "A document with a seal or signature and a checkmark or graph/chart element on a circular background. The design should convey final certification and compliance reporting."
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