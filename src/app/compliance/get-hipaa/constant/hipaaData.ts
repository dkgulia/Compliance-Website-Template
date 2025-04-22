import SecurityIcon from '@mui/icons-material/Security';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleIcon from '@mui/icons-material/People';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LoopIcon from '@mui/icons-material/Loop';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PolicyIcon from '@mui/icons-material/Policy';
import LockIcon from '@mui/icons-material/Lock';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SchoolIcon from '@mui/icons-material/School';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import VisibilityIcon from '@mui/icons-material/Visibility';

export const hipaaWorkflowData = [
	{
		title: 'Kickstart with security and privacy risk assessment',
		icon: SecurityIcon,
	},
	{
		title: 'Publish HIPAA-aligned policies and process documentation',
		icon: DescriptionIcon,
	},
	{
		title: 'Launch HIPAA training for relevant employee groups',
		icon: PeopleIcon,
	},
	{
		title: 'Implement the right security and privacy controls',
		icon: VerifiedUserIcon,
	},
	{
		title: 'Activate checks, automated workflows to contain compliance drift',
		icon: LoopIcon,
	},
	{
		title: 'Capture compliance evidence for a successful certification audit',
		icon: AssignmentTurnedInIcon,
	},
];

export const hipaaComplianceData = {
	features: [
		{
			id: 1,
			title: 'Protects Patient Privacy',
			description:
				'HIPAA ensures the confidentiality of patient health information (PHI) and protects it from unauthorized access.',
			icon: VerifiedUserIcon,
		},
		{
			id: 2,
			title: 'Reduces Data Breach Risks',
			description:
				'By implementing robust security measures, organizations can prevent unauthorized access and data leaks.',
			icon: LockIcon,
		},
		{
			id: 3,
			title: 'Legal & Regulatory Compliance',
			description: 'Avoid legal penalties and maintain compliance with federal healthcare regulations.',
			icon: PolicyIcon,
		},
		{
			id: 4,
			title: 'Improves Patient Trust',
			description:
				'Secure healthcare data management builds trust with patients and improves organizational credibility.',
			icon: PeopleIcon,
		},
		{
			id: 5,
			title: 'Standardized Data Security',
			description: 'HIPAA sets industry-wide standards for electronic health record security and data handling.',
			icon: SecurityIcon,
		},
		{
			id: 6,
			title: 'Enhances Operational Efficiency',
			description: 'Automated compliance tools streamline processes and reduce administrative burdens.',
			icon: AssessmentIcon,
		},
	],
	complianceHub: [
		{
			id: 1,
			title: 'Create HIPAA Privacy & Security Policies',
			description:
				'Develop and implement HIPAA-compliant privacy and security policies. Use ready-made templates, customize them, and ensure compliance across teams.',
			icon: PolicyIcon,
		},
		{
			id: 2,
			title: 'Train Employees on HIPAA Best Practices',
			description:
				'Ensure employees complete HIPAA training, pass security awareness quizzes, and acknowledge compliance policies for effective risk management.',
			icon: SchoolIcon,
		},
		{
			id: 3,
			title: 'Keep Track of Vendors with PHI',
			description:
				'Manage vendors handling PHI, monitor their compliance status, and receive real-time alerts about potential security risks or non-compliance issues.',
			icon: BusinessIcon,
		},
		{
			id: 4,
			title: 'Ensure Business Associates Protect PHI',
			description:
				'Verify that business associates comply with HIPAA regulations. Send, track, and manage Business Associate Agreements (BAAs) for legal compliance.',
			icon: HandshakeIcon,
		},
		{
			id: 5,
			title: 'Evaluate & Monitor HIPAA Safeguards',
			description:
				'Assess administrative, technical, and physical security controls to protect PHI. Conduct ongoing audits and maintain full compliance visibility.',
			icon: SecurityIcon,
		},
		{
			id: 6,
			title: 'Continuous HIPAA Compliance Monitoring',
			description:
				'Detect and address compliance risks in real time with automated monitoring across your IT infrastructure to maintain HIPAA security standards.',
			icon: VisibilityIcon,
		},
	],
};

export const hipaaFaqData = [
	{
		question: 'What is HIPAA compliance?',
		answer:
			'HIPAA compliance refers to adhering to the Health Insurance Portability and Accountability Act, which sets regulations for protecting sensitive patient data and ensuring privacy and security in healthcare organizations.',
	},
	{
		question: 'Who needs to comply with HIPAA?',
		answer:
			'Any entity handling Protected Health Information (PHI), including healthcare providers, insurance companies, clearinghouses, and their business associates, must comply with HIPAA regulations.',
	},
	{
		question: 'What are the key requirements of HIPAA?',
		answer:
			'HIPAA requires organizations to implement administrative, technical, and physical safeguards to protect PHI, conduct employee training, report breaches, and ensure compliance audits.',
	},
	{
		question: 'What is a Business Associate Agreement (BAA)?',
		answer:
			'A BAA is a legally binding contract between a HIPAA-covered entity and a third party that handles PHI, ensuring they comply with HIPAA regulations and security measures.',
	},
	{
		question: 'How does HIPAA protect patient privacy?',
		answer:
			'HIPAA enforces privacy rules that limit access to PHI, ensuring only authorized personnel can process sensitive healthcare data while maintaining confidentiality and security.',
	},
	{
		question: 'What are the penalties for HIPAA violations?',
		answer:
			'HIPAA violations can lead to fines ranging from $100 to $50,000 per violation, with a maximum annual penalty of $1.5 million per type of violation. Criminal charges can also apply in severe cases.',
	},
	{
		question: 'What is the HIPAA Security Rule?',
		answer:
			'The HIPAA Security Rule establishes national standards for protecting electronically stored PHI (ePHI) by requiring appropriate administrative, physical, and technical safeguards.',
	},
	{
		question: 'How can businesses achieve HIPAA compliance?',
		answer:
			'Businesses can achieve HIPAA compliance by implementing strong security measures, conducting regular risk assessments, providing employee training, and ensuring third-party compliance through BAAs.',
	},
	{
		question: 'What should be included in a HIPAA compliance program?',
		answer:
			'A HIPAA compliance program should include security policies, access controls, workforce training, risk assessments, breach notification procedures, and vendor management strategies.',
	},
	{
		question: 'How does HIPAA impact cloud storage and digital records?',
		answer:
			'HIPAA mandates that cloud storage providers handling PHI must sign BAAs and implement strong encryption, access controls, and monitoring to ensure data security.',
	},
];
