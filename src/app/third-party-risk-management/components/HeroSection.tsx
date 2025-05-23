'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import tprmHeroImage from '../images/third-hero.png';

const HeroSection: React.FC = () => {
	const { hero } = thirdPartyRiskManagementData;
	const router = useRouter();

	return (
		<Box sx={heroSectionStyle.container}>
			<Box sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.contentBox}>
					<Typography variant="body1" sx={heroSectionStyle.tagline}>
						Third-Party Risk Management
					</Typography>
					<Typography variant="h1" sx={heroSectionStyle.title}>
						{hero.title}
					</Typography>
					<Typography variant="h2" sx={heroSectionStyle.subtitle}>
						{hero.subtitle}
					</Typography>

					{hero.description.map((paragraph, index) => (
						<Typography key={index} variant="body1" sx={heroSectionStyle.description}>
							{paragraph}
						</Typography>
					))}

					<Button
						variant="contained"
						sx={heroSectionStyle.ctaButton}
						onClick={() => router.push('/get-a-demo')}
					>
						{hero.ctaText}
					</Button>
				</Box>

				<Box sx={heroSectionStyle.imageBox}>
					<Box sx={heroSectionStyle.imageWrapper}>
						<Image
							src={tprmHeroImage}
							alt={hero.imagePrompt || "Third-Party Risk Management Dashboard"}
							fill
							style={heroSectionStyle.heroImage}
							priority
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;
