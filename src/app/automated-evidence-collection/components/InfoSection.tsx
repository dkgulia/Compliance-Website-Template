'use client';

import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import infoSectionStyle from '../styles/infoSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const InfoSection: React.FC = () => {
	const { infoSection } = evidenceCollectionData;

	return (
		<Box sx={infoSectionStyle.box}>
			<Box sx={infoSectionStyle.infoContainer}>
				<Grid container spacing={3}>
					<Grid size={{ xs: 12, md: 8 }}>
						<Grid container direction="column" spacing={2}>
							<Grid size={{ xs: 12 }} sx={infoSectionStyle.titleSection}>
								<Typography variant="h4" sx={infoSectionStyle.heading}>
									{infoSection.title}
								</Typography>
							</Grid>

							<Grid size={{ xs: 12 }} sx={infoSectionStyle.descriptionSection}>
								{infoSection.description.map((paragraph, index) => (
									<Typography key={index} variant="body1" sx={infoSectionStyle.description}>
										{paragraph}
									</Typography>
								))}
							</Grid>
						</Grid>
					</Grid>

					<Grid size={{ xs: 12, md: 4 }} sx={infoSectionStyle.imageContainer}>
						<Box sx={infoSectionStyle.iconWrapper}>
							{/* Image would go here */}
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
