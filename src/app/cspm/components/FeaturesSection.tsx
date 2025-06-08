'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { cspmData } from '../constants/cspmData';

const FeaturesSection: React.FC = () => {
	return (
		<Box sx={featuresSectionStyle.section}>
			<Box sx={featuresSectionStyle.headerContainer}>
				<Typography sx={featuresSectionStyle.title}>{cspmData.features.title}</Typography>
				<Typography sx={featuresSectionStyle.subtitle}>{cspmData.features.subtitle}</Typography>
			</Box>

			<Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%' }}>
				{cspmData.features.featuresList.map((feature, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
						<Box sx={featuresSectionStyle.card}>
							<Box sx={featuresSectionStyle.iconContainer}>
								<feature.muiIcon sx={featuresSectionStyle.icon} />
							</Box>
							<Typography sx={featuresSectionStyle.cardTitle}>{feature.title}</Typography>
							<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
								<Typography sx={featuresSectionStyle.cardDescription}>{feature.description}</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default FeaturesSection;
