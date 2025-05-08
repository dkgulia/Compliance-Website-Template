'use client';
import React from 'react';
import { Box, Typography, Icon, Container } from '@mui/material';
import featuresSectionStyle from '../styles/featuresSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';

const stepIcons = ['dashboard', 'auto_awesome', 'visibility', 'people'];

const FeaturesSection: React.FC = () => {
	const { features } = hexafortSecureData;

	return (
		<Box component="section" sx={featuresSectionStyle.box}>
			<Container maxWidth="lg" sx={featuresSectionStyle.container}>
				<Box sx={featuresSectionStyle.containerBox}>
					<Typography variant="h2" sx={featuresSectionStyle.heading}>
						{features.title}
					</Typography>
					{features.subtitle && (
						<Typography variant="body1" sx={featuresSectionStyle.subheading}>
							{features.subtitle}
						</Typography>
					)}
				</Box>

				{features.steps.map((step, index) => (
					<Box
						key={index}
						sx={{
							...featuresSectionStyle.featureStep,
							...(index % 2 !== 0 ? featuresSectionStyle.featureStepReverse : {}),
						}}
					>
						<Box sx={featuresSectionStyle.textContainer}>
							<Box sx={featuresSectionStyle.stepNumber}>{index + 1}</Box>
							<Typography variant="h3" sx={featuresSectionStyle.stepTitle}>
								{step.heading}
							</Typography>
							<Typography variant="body1" sx={featuresSectionStyle.stepDescription}>
								{step.description}
							</Typography>
						</Box>

						<Box sx={featuresSectionStyle.imageContainer}>
							<Box sx={featuresSectionStyle.imagePlaceholder}>
								<Icon sx={{ fontSize: '2rem', mr: 1 }}>{stepIcons[index]}</Icon>
								{step.imagePrompt}
							</Box>
						</Box>
					</Box>
				))}
			</Container>
		</Box>
	);
};

export default FeaturesSection;
