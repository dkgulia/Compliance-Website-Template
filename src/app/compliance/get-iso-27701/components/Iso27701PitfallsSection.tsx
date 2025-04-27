'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import pitfallsSectionStyle from '../styles/pitfallsSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701PitfallsSection: React.FC = () => {
	return (
		<Box sx={pitfallsSectionStyle.box}>
			<Box sx={pitfallsSectionStyle.container}>
				<Typography variant="h3" sx={pitfallsSectionStyle.heading}>
					Common Pitfalls & Best Practices
				</Typography>
				<Typography variant="h6" sx={pitfallsSectionStyle.subheading}>
					Avoiding Mistakes & Implementing Effective Solutions
				</Typography>

				<Grid container spacing={3} sx={pitfallsSectionStyle.gridContainer}>
					{iso27701Data.section6.map((item) => (
						    <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
							<Card sx={pitfallsSectionStyle.card}>
								<CardContent sx={pitfallsSectionStyle.cardContent}>
									<Box sx={pitfallsSectionStyle.iconContainer}>
										<Image
											src={item.image}
											alt={item.title}
											width={60}
											height={60}
											style={{
												filter: 'brightness(0) invert(1)',
												opacity: 0.9,
											}}
										/>
									</Box>
									<Box sx={pitfallsSectionStyle.textContainer}>
										<Typography sx={pitfallsSectionStyle.cardTitle}>{item.title}</Typography>
										<Typography sx={pitfallsSectionStyle.cardDesc}>{item.description}</Typography>
									</Box>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box>
	);
};

export default Iso27701PitfallsSection;