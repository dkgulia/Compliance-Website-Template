'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import extendedContentStyle from '../styles/extendedContentStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701ExtendedContentSection: React.FC = () => {
	return (
		<Box sx={extendedContentStyle.box}>
			<Box sx={extendedContentStyle.container}>
				<Typography variant="h3" sx={extendedContentStyle.title}>
					A Deeper Look into ISO 27701
				</Typography>
				<Typography variant="h6" sx={extendedContentStyle.subtitle}>
					Understanding the Core Components
				</Typography>

				<Grid container spacing={2} sx={extendedContentStyle.gridContainer}>
					{iso27701Data.section4.map((item, i) => {
						return (
							<Grid size={{ xs: 12, sm: 6, md: 6 }} key={i}>
								<Box sx={extendedContentStyle.card}>
									<Typography sx={extendedContentStyle.cardTitle}>{item.title}</Typography>
									<Typography sx={extendedContentStyle.cardDesc}>{item.description}</Typography>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
};

export default Iso27701ExtendedContentSection;