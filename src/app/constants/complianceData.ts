import iso27001 from '../compliance/images/iso-27001-new.png';
import iso27018 from '../compliance/images/ISO-27018.png';
import soc2 from '../compliance/images/SOC2.png';
import gdpr from '../compliance/images/GDPR.png';
import hipaa from '../compliance/images/HIPAA-COMPLIANT.png';
import ccpa from '../compliance/images/CCPA.png';
import nist from '../compliance/images/NIST-171.png';
import pcidss from '../compliance/images/PCI-DSS.png';
import iso22301 from '../compliance/images/ISO-20000.png';
import iso20000 from '../compliance/images/ISO-20000.png';
import iso27701 from '../compliance/images/ISO-27701 (1).png';
import dora from '../../../public/images/compliances/a-shield-icon-with-subtle-digital-circuit-pattern-.png';
// Placeholder for ISO 42001 image
import iso42001 from '../../../public/images/compliances/a-shield-icon-with-subtle-digital-circuit-pattern-.png';

import { StaticImageData } from 'next/image';

export interface ComplianceFramework {
	title: string;
	description: string;
	logo: string | StaticImageData;
	url: string;
}

export const complianceItems: ComplianceFramework[] = [
	{
		title: 'ISO 27001',
		description: 'International standard for managing information security, protecting sensitive data.',
		logo: iso27001,
		url: '/get-iso-27001',
	},
	{
		title: 'ISO 42001',
		description: 'First international standard for AI Management Systems (AIMS) to ensure responsible AI.',
		logo: iso42001,
		url: '/get-iso-42001',
	},
	{
		title: 'ISO 27018',
		description: 'Protects PII in cloud services by ensuring compliance with privacy and data protection standards.',
		logo: iso27018,
		url: '/get-iso-27018',
	},
	{
		title: 'SOC 2',
		description: 'Manages customer data security, availability, confidentiality, and privacy.',
		logo: soc2,
		url: '/get-soc-2',
	},
	{
		title: 'GDPR',
		description: 'Protects personal data privacy, ensuring strict data handling rules and user control.',
		logo: gdpr,
		url: '/get-gdpr',
	},
	{
		title: 'HIPAA',
		description: 'Ensures confidentiality and security for healthcare data.',
		logo: hipaa,
		url: '/get-hipaa',
	},
	{
		title: 'CCPA',
		description: 'Protects California residents rights over their personal data with transparency and deletion.',
		logo: ccpa,
		url: '/ccpa-compliance',
	},
	{
		title: 'NIST Frameworks',
		description:
			'Secures controlled unclassified information (CUI) in non-federal systems, ensuring cybersecurity in critical infrastructure.',
		logo: nist,
		url: '/get-nist-frameworks',
	},
	{
		title: 'PCI DSS',
		description:
			'Protects cardholder data by enforcing strict security measures for organizations handling payment cards to prevent data breaches.',
		logo: pcidss,
		url: '/get-pci-dss',
	},
	{
		title: 'ISO 22301',
		description: 'Ensures business continuity through disaster preparedness and ISO certification.',
		logo: iso22301,
		url: '/get-iso-22301',
	},
	{
		title: 'ISO 20000-1',
		description: 'Provides a framework for effective IT service management for businesses.',
		logo: iso20000,
		url: '/get-iso-20000-1',
	},
	{
		title: 'ISO 27701',
		description: 'Enhances transparency and accountability in data processing to facilitate compliance.',
		logo: iso27701,
		url: '/get-iso-27701',
	},
	{
		title: 'Dora',
		description: 'Digital Operations Resilience Act (DORA) compliance for IT.',
		logo: dora,
		url: '/get-dora',
	},
];

export enum ComplianceOptions {
	ISO27001 = 'ISO 27001',
	ISO42001 = 'ISO 42001',
	ISO27018 = 'ISO 27018',
	SOC2 = 'SOC 2',
	GDPR = 'GDPR',
	HIPAA = 'HIPAA',
	CCPA = 'CCPA',
	PCI_DSS = 'PCI DSS',
	NIST = 'NIST Frameworks',
	ISO22301 = 'ISO 22301',
	ISO20000_1 = 'ISO 20000-1',
	ISO27701 = 'ISO 27701',
	DORA = 'DORA',
}

export const primaryCompliance = [
	'ISO 27001:2022',
	'ISO 42001:2023',
	'GDPR',
	'HIPAA',
	'SOC2 Type1',
	'SOC2 Type2',
	'PCI DSS',
	'DORA',
	'PDPA',
	'CMMC'
];

export const complianceOptionsArray = Object.values(ComplianceOptions);