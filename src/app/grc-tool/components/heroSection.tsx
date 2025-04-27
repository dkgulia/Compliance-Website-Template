'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import heroSectionStyle from '../styles/heroSectionStyle';

const HeroSection: React.FC = () => {
	const features = [
		{
			icon: ShieldIcon,
			title: 'Complete Security',
			description: 'Comprehensive GRC coverage'
		},
		{
			icon: AutoAwesomeIcon,
			title: 'AI-Powered',
			description: 'Intelligent risk management'
		},
		{
			icon: SpeedIcon,
			title: 'Fast Implementation',
			description: 'Quick time to value'
		}
	];

	return (
		<Box sx={heroSectionStyle.section}>
			<Box sx={heroSectionStyle.backgroundGradient} />

			<Container maxWidth="lg" sx={heroSectionStyle.container}>
				<Box sx={heroSectionStyle.content}>
					<Typography variant="h1" sx={heroSectionStyle.title}>
						HexaFort: Revolutionizing<br />
						GRC for Sustainable Growth
					</Typography>

					<Typography variant="body1" sx={heroSectionStyle.description}>
						HexaFort is an AI-powered platform that provides a comprehensive suite of
						tools for managing all aspects of Information Security and Data Privacy. From
						risk assessments and compliance audits to incident response and data breach
						notification.
					</Typography>

					<Box sx={heroSectionStyle.buttonsContainer}>
						<Button variant="contained" sx={heroSectionStyle.primaryButton}>
							Get Started
						</Button>
						<Button variant="outlined" sx={heroSectionStyle.secondaryButton}>
							Book a Demo
						</Button>
					</Box>

					<Box sx={heroSectionStyle.featuresContainer}>
						{features.map((feature, index) => (
							<Box key={index} sx={heroSectionStyle.featureItem}>
								<Box sx={heroSectionStyle.featureIconContainer}>
									<feature.icon sx={heroSectionStyle.featureIcon} />
								</Box>
								<Typography variant="h6" sx={heroSectionStyle.featureTitle}>
									{feature.title}
								</Typography>
								<Typography variant="body2" sx={heroSectionStyle.featureDescription}>
									{feature.description}
								</Typography>
							</Box>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;