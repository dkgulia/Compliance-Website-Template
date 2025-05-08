'use client';
import React from 'react';
import { Box, Typography, Button, Icon, Container } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';

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
						<Box sx={heroSectionStyle.imagePlaceholder}>{hero.imagePrompt}</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
