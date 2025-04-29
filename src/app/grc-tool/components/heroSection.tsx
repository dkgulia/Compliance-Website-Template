'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import heroSectionStyle from '../styles/heroSectionStyle';

const HeroSection: React.FC = () => {
	
	return (
		<Box sx={heroSectionStyle.section}>
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

				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;