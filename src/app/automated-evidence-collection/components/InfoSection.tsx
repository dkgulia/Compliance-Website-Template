'use client';

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import infoSectionStyle from '../styles/infoSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const InfoSection: React.FC = () => {
	const { infoSection } = evidenceCollectionData;

	return (
		<Box sx={infoSectionStyle.section}>
			<Box sx={infoSectionStyle.infoContainer}>
				<Grid container spacing={3}>
					<Grid size={{ xs: 12, md: 8 }}>
						<Box sx={infoSectionStyle.contentWrapper}>
							<Typography sx={infoSectionStyle.tagline}>
								COMPLIANCE MONITORING
							</Typography>
							<Typography variant="h4" sx={infoSectionStyle.title}>
								{infoSection.title}
							</Typography>
							{infoSection.description.map((paragraph, index) => (
								<Typography key={index} variant="body1" sx={infoSectionStyle.description}>
									{paragraph}
								</Typography>
							))}
						</Box>
					</Grid>

					<Grid size={{ xs: 12, md: 4 }} sx={infoSectionStyle.imageContainer}>
						<Box sx={infoSectionStyle.iconWrapper}>
							<Box sx={infoSectionStyle.placeholderBox}>
								<Typography sx={infoSectionStyle.placeholderText}>{infoSection.imageAlt}</Typography>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default InfoSection;