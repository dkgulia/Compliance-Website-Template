'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
	const router = useRouter();
	const handleBookDemo = () => {
		router.push('/get-a-demo');
	};

	return (
		<Box sx={heroSectionStyle.section}>
			<Container maxWidth="lg" sx={heroSectionStyle.container}>
				<Box sx={heroSectionStyle.content}>
					<Typography variant="h1" sx={heroSectionStyle.title}>
						HexaFort: Revolutionizing
						<br />
						GRC for Sustainable Growth
					</Typography>

					<Typography variant="body1" sx={heroSectionStyle.description}>
						HexaFort is an AI-powered platform that provides a comprehensive suite of tools for managing all aspects of
						Information Security and Data Privacy. From risk assessments and compliance audits to incident response and
						data breach notification.
					</Typography>

					<Box sx={heroSectionStyle.buttonsContainer}>
						<Button variant="contained" sx={heroSectionStyle.primaryButton }onClick={handleBookDemo}>
							Get Started
						</Button>
						<Button variant="outlined" sx={heroSectionStyle.secondaryButton} onClick={handleBookDemo}>
							Book a Demo
						</Button>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
