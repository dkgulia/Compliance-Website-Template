'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
	const router = useRouter();
	const handleBookDemo = () => {
		router.push('/get-a-product-demo');
	};

	return (
		<Box sx={heroSectionStyle.section}>
			<Box sx={heroSectionStyle.container}>
				<Box sx={heroSectionStyle.leftContent}>
					<Box sx={heroSectionStyle.titleSection}>
						<Box sx={heroSectionStyle.tag}>
							<Typography component="span">✨</Typography>
							<Typography component="p">Introducing HexaFort GRC</Typography>
						</Box>
						<Typography sx={heroSectionStyle.titlePrimary}>
							HexaFort Revolutionizing
						</Typography>
						<Typography sx={heroSectionStyle.titleSecondary}>
							GRC for Sustainable Growth
						</Typography>
						<Typography sx={heroSectionStyle.gradientTitle}>
							AI-Powered. Intelligent.
						</Typography>
					</Box>

					<Box sx={heroSectionStyle.descriptionContainer}>
						<Typography sx={heroSectionStyle.descriptionPrimary}>
							AI-powered platform for comprehensive security management.
						</Typography>
						<Typography sx={heroSectionStyle.descriptionSecondary}>
							From risk assessments to compliance audits.
						</Typography>
						<Typography sx={heroSectionStyle.descriptionTertiary}>
							We've got you covered. 24x7.
						</Typography>
					</Box>

					<Box sx={heroSectionStyle.buttonContainer}>
						<Box
							component="button"
							sx={heroSectionStyle.getStartedButton}
							onClick={handleBookDemo}
						>
							Get Started
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;