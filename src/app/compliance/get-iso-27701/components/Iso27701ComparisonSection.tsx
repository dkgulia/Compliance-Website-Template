'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import comparisonSectionStyle from '../styles/comparisonSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701ComparisonSection: React.FC = () => {
	return (
		<Box sx={comparisonSectionStyle.box}>
			<Box sx={comparisonSectionStyle.container}>
				<Typography variant="h3" sx={comparisonSectionStyle.title}>
					Comparisons with Other Standards
				</Typography>
                <Typography variant="h6" sx={comparisonSectionStyle.subtitle}>
                    Understanding the Differences
                </Typography>

				<Grid container spacing={2} sx={comparisonSectionStyle.gridContainer}>
					{iso27701Data.section5.map((comparison, i) => {
						const IconComp = comparison.icon;
						return (
							<Grid size={{ xs: 12, sm: 6, md: 6 }} key={i}>
								<Box sx={comparisonSectionStyle.card}>
									<Box sx={comparisonSectionStyle.iconContainer}>
										<IconComp sx={comparisonSectionStyle.icon} />
									</Box>
									<Typography sx={comparisonSectionStyle.cardTitle}>
										{comparison.title}
									</Typography>
									<Typography sx={comparisonSectionStyle.cardDesc}>
										{comparison.description}
									</Typography>
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Box>
	);
};

export default Iso27701ComparisonSection;