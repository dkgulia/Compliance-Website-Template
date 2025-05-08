'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const ProcessSection: React.FC = () => {
	const { process } = evidenceCollectionData;

	return (
		<Box id="how-it-works" sx={processSectionStyle.box}>
			<Box sx={processSectionStyle.workflowOuterContainer}>
				<Box sx={processSectionStyle.workflowContainer}>
					<Grid container spacing={2} sx={processSectionStyle.gridWrapper}>
						<Grid size={{ xs: 12, md: 5 }} sx={processSectionStyle.leftSection}>
							<Box sx={processSectionStyle.chip}>Process</Box>
							<Typography variant="h4" sx={processSectionStyle.title}>
								{process.title}
							</Typography>
						</Grid>

						<Grid size={{ xs: 12, md: 7 }} sx={processSectionStyle.rightSection}>
							<Typography variant="body1" sx={processSectionStyle.description}>
								{process.subtitle || 'How our automated evidence collection works'}
							</Typography>
						</Grid>
					</Grid>

					<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Grid container spacing={2} sx={processSectionStyle.gridContainer}>
							{process.steps.map((step, index) => (
								<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
									<Box sx={processSectionStyle.card}>
										<Box sx={processSectionStyle.cardContent}>
											<Box sx={processSectionStyle.stepNumber}>{index + 1}</Box>
											<Typography variant="body1" sx={processSectionStyle.cardTitle}>
												{step.heading}
											</Typography>
											<Typography variant="body2" sx={processSectionStyle.stepDescription}>
												{step.description}
											</Typography>
										</Box>
									</Box>
								</Grid>
							))}
						</Grid>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ProcessSection;
