'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { iso22301Data } from '../constants/iso22301Data';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import theme from '../../../../theme';

const ISO22301FeaturesBlock: React.FC = () => {
	const sectionData = iso22301Data.sections.find((sec) => sec.Sno === '9' && sec.blockType === 'Features Block');
	if (!sectionData) return null;

	return (
		<Box>
			<Container sx={featuresSectionStyle.container}>
				<Box sx={featuresSectionStyle.headingBox}>
					<Typography sx={featuresSectionStyle.title}>{sectionData.title}</Typography>
					{sectionData.subtitle && <Typography sx={featuresSectionStyle.subtitle}>{sectionData.subtitle}</Typography>}
				</Box>

				<Grid container spacing={3} sx={featuresSectionStyle.gridContainer}>
					{(sectionData.features || []).map((feature, idx) => {
						const IconComp = (Icons as any)[feature.muiIcon] || Icons.Info;
						return (
							<Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
								<Card sx={featuresSectionStyle.card}>
									<CardContent>
										<Stack sx={featuresSectionStyle.cardContentStack}>
											<Box sx={featuresSectionStyle.iconContainer}>
												<IconComp sx={featuresSectionStyle.icon} />
											</Box>
											<Typography sx={featuresSectionStyle.titleText}>{feature.title}</Typography>
											<Typography sx={featuresSectionStyle.descText}>{feature.description}</Typography>
										</Stack>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default ISO22301FeaturesBlock;