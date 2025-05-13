'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { securityTrainingData } from '../constants/securityTrainingData';
import benefitsSectionStyles from '../styles/benefitsSectionStyles';
import EmailIcon from '@mui/icons-material/Email';
import InsightsIcon from '@mui/icons-material/Insights';
import RuleIcon from '@mui/icons-material/Rule';
import LanguageIcon from '@mui/icons-material/Language';

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
			<Box sx={benefitsSectionStyles.box}>
				<Container sx={benefitsSectionStyles.container}>
					<Typography component="h2" variant="h4" sx={benefitsSectionStyles.title}>
						{title || 'Key Features'}
					</Typography>
					<Typography variant="body1" sx={benefitsSectionStyles.subtitle}>
						Feature information coming soon.
					</Typography>
				</Container>
			</Box>
		);
	}

	const getIcon = (iconName: string) => {
		switch (iconName) {
			case 'Email':
				return <EmailIcon sx={benefitsSectionStyles.featureIcon} />;
			case 'Insights':
				return <InsightsIcon sx={benefitsSectionStyles.featureIcon} />;
			case 'Rule':
				return <RuleIcon sx={benefitsSectionStyles.featureIcon} />;
			case 'Language':
				return <LanguageIcon sx={benefitsSectionStyles.featureIcon} />;
			default:
				return <EmailIcon sx={benefitsSectionStyles.featureIcon} />;
		}
	};

	return (
		<Box sx={benefitsSectionStyles.box}>
			<Container sx={benefitsSectionStyles.container}>
				<Box sx={benefitsSectionStyles.containerBox}>
					<Typography component="h2" variant="h4" sx={benefitsSectionStyles.title}>
						{title}
					</Typography>

					{subtitle && (
						<Typography variant="body1" sx={benefitsSectionStyles.subtitle}>
							{subtitle}
						</Typography>
					)}
				</Box>

				<Grid container spacing={2}>
					{features.map((feature, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
							<Box sx={benefitsSectionStyles.featureCard}>
								<Box sx={benefitsSectionStyles.iconContainer}>{getIcon(feature.muiIcon)}</Box>

								<Box sx={benefitsSectionStyles.textContainer}>
									<Typography variant="body1" sx={benefitsSectionStyles.featureTitle}>
										{feature.title}
									</Typography>
									<Typography variant="body2" sx={benefitsSectionStyles.featureDescription}>
										{feature.description}
									</Typography>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default BenefitsSection;
