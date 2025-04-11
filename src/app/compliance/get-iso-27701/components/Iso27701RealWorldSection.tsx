'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import realWorldSectionStyle from '../styles/realWorldSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701RealWorldSection: React.FC = () => {
	return (
		<Box sx={realWorldSectionStyle.box}>
			<Box sx={realWorldSectionStyle.container}>
				<Typography variant="h3" sx={realWorldSectionStyle.heading}>
					Real-World Application
				</Typography>
				<Typography variant="h6" sx={realWorldSectionStyle.subheading}>
					How Organizations Benefit from ISO 27701
				</Typography>

				<Grid container spacing={2} sx={realWorldSectionStyle.gridContainer}>
					{iso27701Data.section7.map((item) => (
						<Grid size={{ xs: 12, sm: 6 }} key={item.title}>
							<Card sx={realWorldSectionStyle.card}>
								<CardContent sx={realWorldSectionStyle.cardContent}>
									<Box sx={realWorldSectionStyle.iconContainer}>
										<Image
											src={item.image}
											alt={item.title}
											width={70}
											height={70}
											style={{
												filter: 'brightness(0) invert(1)',
												opacity: 0.9,
											}}
										/>
									</Box>
									<Typography sx={realWorldSectionStyle.cardTitle}>{item.title}</Typography>
									<Typography sx={realWorldSectionStyle.cardDesc}>{item.description}</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Iso27701RealWorldSection;