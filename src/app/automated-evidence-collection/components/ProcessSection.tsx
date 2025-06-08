'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const ProcessSection: React.FC = () => {
	const { process } = evidenceCollectionData;

	return (
		<Box id="how-it-works" sx={processSectionStyle.section}>
			<Box sx={processSectionStyle.headerContainer}>
				<Typography sx={processSectionStyle.tagline}>
					HOW IT WORKS
				</Typography>
				<Typography variant="h2" sx={processSectionStyle.title}>
					Automated Evidence Collection Process
				</Typography>
				<Typography sx={processSectionStyle.subtitle}>
					Four simple steps to continuous compliance
				</Typography>
			</Box>

			<Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
				{process.steps.map((step, index) => (
					<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
						<Box sx={processSectionStyle.card}>
							<Box sx={processSectionStyle.stepNumber}>{index + 1}</Box>
							<Box sx={processSectionStyle.textContainer}>
								<Typography variant="body1" sx={processSectionStyle.cardTitle}>
									{step.heading}
								</Typography>
								<Typography variant="body2" sx={processSectionStyle.cardDescription}>
									{step.description}
								</Typography>
							</Box>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ProcessSection;