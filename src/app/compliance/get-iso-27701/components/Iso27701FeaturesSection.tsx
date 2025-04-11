'use client';
import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701FeaturesSection: React.FC = () => {
	return (
		<Box sx={featuresSectionStyle.box}>
			<Box sx={featuresSectionStyle.container}>
				<Typography variant="h3" sx={featuresSectionStyle.heading}>
					Key Benefits of ISO 27701
				</Typography>
				<Typography variant="h6" sx={featuresSectionStyle.subheading}>
					Strengthen Your Information Privacy Management
				</Typography>

				<Grid container spacing={2} sx={featuresSectionStyle.gridContainer}>
					{iso27701Data.features.map((feature) => (
						<Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.id}>
							<Card sx={featuresSectionStyle.card}>
								<CardContent sx={featuresSectionStyle.cardContent}>
									<Box sx={featuresSectionStyle.iconContainer}>
										<Image
											src={feature.image}
											alt={feature.title}
											width={70}
											height={70}
											style={{
												filter: 'brightness(0) invert(1)',
												opacity: 0.9,
											}}
										/>
									</Box>
									<Typography sx={featuresSectionStyle.featureTitle}>{feature.title}</Typography>
									<Typography sx={featuresSectionStyle.featureDesc}>{feature.description}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Iso27701FeaturesSection;