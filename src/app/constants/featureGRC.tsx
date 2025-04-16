import React from 'react';
import { Security, Gavel, BarChart, Update, Insights, Policy } from '@mui/icons-material';

interface FeatureGRC {
	title: string;
	description: string;
	icon: React.ReactNode;
}

export const featuresItems: FeatureGRC[] = [
	{
		title: 'Centralized Management',
		description: 'Manage all cybersecurity operations from a single unified platform.',
		icon: <Security fontSize="large" />,
	},
	{
		title: 'Compliance Assurance',
		description: 'Automate adherence to industry standards and regulatory frameworks.',
		icon: <Gavel fontSize="large" />,
	},
	{
		title: 'Customizable Reporting',
		description: 'Create detailed compliance reports with metrics and visualizations.',
		icon: <BarChart fontSize="large" />,
	},
	{
		title: 'Dynamic Regulatory Updates',
		description: 'Receive automatic updates when industry regulations change.',
		icon: <Update fontSize="large" />,
	},
	{
		title: 'AI-Powered Predictions',
		description: 'Leverage AI insights to anticipate and mitigate security risks.',
		icon: <Insights fontSize="large" />,
	},
	{
		title: 'Policy Management',
		description: 'Develop and distribute policies across your entire organization.',
		icon: <Policy fontSize="large" />,
	},
];