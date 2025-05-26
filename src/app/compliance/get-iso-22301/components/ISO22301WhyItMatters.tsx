'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import {iso22301Data} from '../constants/iso22301Data';
import {
  HourglassEmpty,
  AttachMoney,
  ThumbUp,
  Gavel
} from '@mui/icons-material';
import theme from '../../../../theme';

const ISO22301WhyItMatters: React.FC = () => {
	const sectionData = iso22301Data.sections.find((sec) => sec.Sno === '2' && sec.blockType === 'Features');

	if (!sectionData) return null;

	const getIconComponent = (iconName: string) => {
		switch (iconName) {
			case 'HourglassEmpty':
				return <HourglassEmpty sx={featuresSectionStyle.icon} />;
			case 'AttachMoney':
				return <AttachMoney sx={featuresSectionStyle.icon} />;
			case 'ThumbUp':
				return <ThumbUp sx={featuresSectionStyle.icon} />;
			case 'Gavel':
				return <Gavel sx={featuresSectionStyle.icon} />;
			default:
				return <HourglassEmpty sx={featuresSectionStyle.icon} />;
		}
	};

	return (
		<Box sx={featuresSectionStyle.box}>
			<Container sx={featuresSectionStyle.container}>
				<Box sx={featuresSectionStyle.headingBox}>
					<Typography sx={featuresSectionStyle.title}>{sectionData.title}</Typography>
					{sectionData.subtitle && <Typography sx={featuresSectionStyle.subtitle}>{sectionData.subtitle}</Typography>}
				</Box>
				<Box sx={featuresSectionStyle.gridBox}>
					<Grid container spacing={3} sx={featuresSectionStyle.gridContainer}>
						{(sectionData.features || []).map((feature, idx) => (
							<Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
								<Card sx={featuresSectionStyle.card}>
									<CardContent sx={featuresSectionStyle.cardContent}>
										<Box sx={featuresSectionStyle.iconContainer}>
											{getIconComponent(feature.muiIcon)}
										</Box>
										<Typography sx={featuresSectionStyle.titleText}>{feature.title}</Typography>
										<Typography sx={featuresSectionStyle.descText}>{feature.description}</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301WhyItMatters;