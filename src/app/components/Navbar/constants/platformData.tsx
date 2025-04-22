import React from 'react';
import {
	Security as SecurityIcon,
	AutoAwesome as AutoAwesomeIcon,
	Shield as ShieldIcon,
	Cloud as CloudIcon,
	Business as BusinessIcon,
	BugReport as BugReportIcon,
	Policy as PolicyIcon,
	Verified as VerifiedIcon,
	Link as LinkIcon,
	Dashboard as DashboardIcon,
	Storefront as StorefrontIcon,
	BusinessCenter as BusinessCenterIcon,
	Assessment as AssessmentIcon,
	People as PeopleIcon,
} from '@mui/icons-material';

import { WORKSTATION, HOME } from '../../../constants/routes';

export interface PlatformFeature {
	title: string;
	description: string;
	icon: React.ReactNode;
	href: string;
	isNew?: boolean;
}

export const platformFeatures: PlatformFeature[] = [
	{
		title: 'Centralised Risk Management',
		description: 'Efficiently manage all your organizational risks in one place',
		icon: <SecurityIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Automated Governance, Risk & Compliance Tool',
		description: 'Streamline your GRC processes with intelligent automation',
		icon: <AutoAwesomeIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Hexafort Secure',
		description: 'Comprehensive security solution for your enterprise',
		icon: <ShieldIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Cloud Security Posture Management',
		description: 'Monitor and secure your cloud infrastructure',
		icon: <CloudIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Third Party Risk Management',
		description: 'Assess and manage risks from third-party vendors',
		icon: <BusinessIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Vulnerability Management',
		description: 'Identify, prioritize, and remediate security vulnerabilities',
		icon: <BugReportIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Policy Evidence Collection',
		description: 'Efficient collection and management of compliance evidence',
		icon: <PolicyIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Trust Center',
		description: 'Build customer trust with transparent security practices',
		icon: <VerifiedIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Integrations',
		description: 'Connect with your existing tools and systems',
		icon: <LinkIcon />,
		href: WORKSTATION,
	},
	{
		title: 'Control Framework Management',
		description: 'Manage security controls across multiple compliance frameworks',
		icon: <DashboardIcon />,
		href: WORKSTATION,
	}
];

export const companySizeOptions = [
	{
		title: 'Hexafort For Startups',
		description: 'Fast track compliance with ready tools',
		href: WORKSTATION,
		icon: <StorefrontIcon />,
	},
	{
		title: 'Hexafort For Midmarket',
		description: 'Achieve GRC excellence with minimal lift',
		href: WORKSTATION,
		icon: <BusinessCenterIcon />,
	},
];

export const solutionItems = [
	{
		title: 'Continuous Compliance',
		href: WORKSTATION,
	},
	{
		title: 'Audit Readiness',
		href: WORKSTATION,
	},
];

export const sidebarCategories = [
	{
		title: 'BY COMPANY SIZE',
		id: 'company-size',
	},
	{
		title: 'ALL SOLUTIONS',
		id: 'all-solutions',
	},
];
