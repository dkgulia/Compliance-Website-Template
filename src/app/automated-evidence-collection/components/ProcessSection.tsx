'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const ProcessSection: React.FC = () => {
	const { process } = evidenceCollectionData;

	return (
		<Box id="how-it-works" sx={processSectionStyle.box}>
			<Box sx={processSectionStyle.workflowOuterContainer}>
				<Box sx={processSectionStyle.workflowContainer}>
					{/* Centered title */}
					<Typography variant="h2" sx={processSectionStyle.centeredTitle}>
						How It Works
					</Typography>

					<Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<Box sx={processSectionStyle.gridContainer}>
							{process.steps.map((step, index) => (
								<Box key={index} sx={processSectionStyle.card}>
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
							))}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default ProcessSection;