'use client';
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import bannerStyle from '../styles/bannerStyle';
import { ArrowForward } from '@mui/icons-material';
import { iso22301Data } from '../constants/iso22301Data';
import iso22301LockIcon from '../images/create-a-professional-illustration-depicting-a-bus.png';
import Image from 'next/image';

const ISO22301Banner: React.FC = () => {
	return (
		<Box sx={bannerStyle.box}>
			<Box sx={bannerStyle.bannerContainer}>
				<Grid container spacing={3}>
					<Grid size={{ xs: 12, md: 9 }}>
						<Grid container direction="column" spacing={2}>
							<Grid size={{ xs: 12 }} sx={bannerStyle.titleSection}>
								<Typography variant="h4" sx={bannerStyle.heading}>
									Take control of your ISO 22301 journey
								</Typography>
							</Grid>

							<Grid size={{ xs: 12 }} sx={bannerStyle.descriptionSection}>
								<Typography variant="body1" sx={bannerStyle.description}>
									Build organizational resilience with our comprehensive ISO 22301 Business Continuity Management System solutions.
								</Typography>
							</Grid>

							<Grid size={{ xs: 12 }} sx={bannerStyle.buttonSection}>
								<Button sx={bannerStyle.button} href="/compliance" variant="contained" endIcon={<ArrowForward />}>
									Get Started
								</Button>
							</Grid>
						</Grid>
					</Grid>

					<Grid size={{ xs: 12, md: 3 }} sx={bannerStyle.imageContainer}>
						<Box sx={bannerStyle.iconWrapper}>
							<Image
								src={iso22301LockIcon}
								alt="ISO 22301 Image"
								width={450}
								height={450}
								style={{ maxWidth: '100%', height: 'auto' }}
							/>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default ISO22301Banner;