'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import efficiencyEnhancementsSectionStyle from '../styles/efficiencyEnhancementsSectionStyle';
import { cspmData } from '../constants/cspmData';

const EfficiencyEnhancementsSection: React.FC = () => {
	return (
		<Box sx={efficiencyEnhancementsSectionStyle.section}>
			<Box sx={efficiencyEnhancementsSectionStyle.headerContainer}>
				<Typography sx={efficiencyEnhancementsSectionStyle.title}>{cspmData.efficiencyEnhancements.title}</Typography>
				<Typography sx={efficiencyEnhancementsSectionStyle.subtitle}>
					{cspmData.efficiencyEnhancements.subtitle}
				</Typography>
			</Box>

			<Grid container spacing={3} sx={{ alignItems: 'stretch', width: '100%' }}>
				{cspmData.efficiencyEnhancements.enhancements.map((enhancement, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
						<Box sx={efficiencyEnhancementsSectionStyle.card}>
							<Box sx={efficiencyEnhancementsSectionStyle.iconContainer}>
								<enhancement.muiIcon sx={efficiencyEnhancementsSectionStyle.icon} />
							</Box>
							<Typography sx={efficiencyEnhancementsSectionStyle.cardTitle}>{enhancement.title}</Typography>
							<Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
								<Typography sx={efficiencyEnhancementsSectionStyle.cardDescription}>
									{enhancement.description}
								</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default EfficiencyEnhancementsSection;
