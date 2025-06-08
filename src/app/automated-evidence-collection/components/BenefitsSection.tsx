
'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const BenefitsSection: React.FC = () => {
	const { benefits } = evidenceCollectionData;

	return (
		<Box component="section" id="benefits" sx={benefitsSectionStyle.section}>
			<Box sx={benefitsSectionStyle.headerContainer}>
				<Typography sx={benefitsSectionStyle.tagline}>
					EVIDENCE AUTOMATION
				</Typography>
				<Typography component="h2" variant="h4" sx={benefitsSectionStyle.title}>
					{benefits.title}
				</Typography>
				{benefits.subtitle && (
					<Typography variant="body1" sx={benefitsSectionStyle.subtitle}>
						{benefits.subtitle}
					</Typography>
				)}
			</Box>

			<Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
				{benefits.features.map((feature, index) => {
					const IconComponent = feature.icon;
					return (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
							<Box sx={benefitsSectionStyle.card}>
								<Box sx={benefitsSectionStyle.iconContainer}>
									<IconComponent sx={benefitsSectionStyle.icon} />
								</Box>

								<Box sx={benefitsSectionStyle.contentWrapper}>
									<Typography variant="h6" sx={benefitsSectionStyle.cardTitle}>
										{feature.title}
									</Typography>
									<Typography variant="body2" sx={benefitsSectionStyle.cardDescription}>
										{feature.description}
									</Typography>
								</Box>
							</Box>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};

export default BenefitsSection;