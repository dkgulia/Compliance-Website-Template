'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import theme from '../../../theme';
import EmailIcon from '@mui/icons-material/Email';
import InsightsIcon from '@mui/icons-material/Insights';
import RuleIcon from '@mui/icons-material/Rule';
import LanguageIcon from '@mui/icons-material/Language';
import standardStyles from '../styles/benefitsSectionStyles'
interface Feature {
	title: string;
	muiIcon: string;
	description: string;
}

interface BenefitsContent {
	title: string;
	subtitle?: string;
	features: Feature[];
}

const BenefitsSection: React.FC = () => {
	const benefitsSection = securityTrainingData.sections.find(
		(section) => section.Sno === '3' && section.blockType === 'Benefits'
	);

	if (!benefitsSection || !benefitsSection.content) return null;

	const { title, subtitle, features } = benefitsSection.content as BenefitsContent;



	if (!features || features.length === 0) {
		return (
			<Box sx={standardStyles.section}>
				<Box sx={standardStyles.headerContainer}>
					<Typography sx={standardStyles.tagline}>KEY ADVANTAGES</Typography>
					<Typography sx={standardStyles.title}>
						{title || 'Key Features'}
					</Typography>
					<Typography sx={standardStyles.subtitle}>
						Feature information coming soon.
					</Typography>
				</Box>
			</Box>
		);
	}

	const getIcon = (iconName: string) => {
		switch (iconName) {
			case 'Email':
				return <EmailIcon sx={standardStyles.icon} />;
			case 'Insights':
				return <InsightsIcon sx={standardStyles.icon} />;
			case 'Rule':
				return <RuleIcon sx={standardStyles.icon} />;
			case 'Language':
				return <LanguageIcon sx={standardStyles.icon} />;
			default:
				return <EmailIcon sx={standardStyles.icon} />;
		}
	};

	return (
		<Box sx={standardStyles.section}>
			<Box sx={standardStyles.headerContainer}>
				<Typography sx={standardStyles.tagline}>KEY ADVANTAGES</Typography>
				<Typography sx={standardStyles.title}>
					{title}
				</Typography>
				{subtitle && (
					<Typography sx={standardStyles.subtitle}>
						{subtitle}
					</Typography>
				)}
			</Box>

			<Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%' }}>
				{features.map((feature, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
						<Box sx={standardStyles.card}>
							<Box sx={standardStyles.iconContainer}>
								{getIcon(feature.muiIcon)}
							</Box>
							<Typography sx={standardStyles.cardTitle}>
								{feature.title}
							</Typography>
							<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
								<Typography sx={standardStyles.cardDescription}>
									{feature.description}
								</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default BenefitsSection;