'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const BenefitsSection: React.FC = () => {
	const { benefits } = controlFrameworkData.sections;

	return (
		<Box sx={benefitsSectionStyle.section}>
			<Box sx={benefitsSectionStyle.headerContainer}>
				<Typography sx={benefitsSectionStyle.tagline}>KEY ADVANTAGES</Typography>
				<Typography sx={benefitsSectionStyle.title}>
					{benefits.title}
				</Typography>
				{benefits.subtitle && (
					<Typography sx={benefitsSectionStyle.subtitle}>
						{benefits.subtitle}
					</Typography>
				)}
			</Box>

			<Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%' }}>
				{benefits.items.map((benefit, index) => {
					const BenefitIcon = benefit.icon;

					return (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
							<Box sx={benefitsSectionStyle.card}>
								<Box sx={benefitsSectionStyle.iconContainer}>
									<BenefitIcon sx={benefitsSectionStyle.icon} />
								</Box>

								<Typography sx={benefitsSectionStyle.cardTitle}>
									{benefit.title}
								</Typography>

								<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
									<Typography sx={benefitsSectionStyle.cardDescription}>
										{benefit.description}
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