'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import heroSectionStyle from '../styles/heroSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';
import heroImage from '../images/secure-hero.png';

const HeroSection: React.FC = () => {
	const { hero } = hexafortSecureData;

	return (
		<Box component="section" sx={heroSectionStyle.container}>
			<Container maxWidth="lg">
				<Box sx={heroSectionStyle.containerBox}>
					<Box sx={heroSectionStyle.contentBox}>
						<Typography variant="body1" sx={heroSectionStyle.tagline}>
							Enterprise Security Platform
						</Typography>
						<Typography variant="h1" sx={heroSectionStyle.title}>
							{hero.title}
						</Typography>
						<Typography variant="h2" sx={heroSectionStyle.subtitle}>
							{hero.subtitle}
						</Typography>
						{hero.description.length > 0 && (
							<Typography variant="body1" sx={heroSectionStyle.description}>
								{hero.description[0]}
							</Typography>
						)}

						<Button variant="contained" sx={heroSectionStyle.ctaButton}>
							{hero.ctaText}
						</Button>
					</Box>

					<Box sx={heroSectionStyle.imageBox}>
						<Image
							src={heroImage}
							alt="Hero Illustration"
							style={{ width: '100%', height: 'auto' }}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
