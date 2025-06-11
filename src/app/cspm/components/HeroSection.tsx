'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import heroSectionStyle from '../styles/heroSectionStyle';
import { cspmData } from '../constants/cspmData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import cspmDashboardImage from '../images/heroImgaeCSPM.png';

const HeroSection: React.FC = () => {
	const router = useRouter();

	const handleBookDemo = () => {
		router.push('/get-a-product-demo');
	};

	return (
		<Box component="section" sx={heroSectionStyle.heroContainer}>
			<Box sx={heroSectionStyle.contentBox}>
				<Typography sx={heroSectionStyle.tagline}>CLOUD SECURITY POSTURE MANAGEMENT</Typography>

				<Typography sx={heroSectionStyle.title}>{cspmData.hero.heroTitle}</Typography>

				<Typography sx={heroSectionStyle.subtitle}>{cspmData.hero.heroSubtitle}</Typography>

				{cspmData.hero.heroDescription.map((paragraph, index) => (
					<Typography key={index} sx={heroSectionStyle.description}>
						{paragraph}
					</Typography>
				))}

				<Button endIcon={<ArrowForwardIcon />} sx={heroSectionStyle.button} onClick={handleBookDemo}>
					{cspmData.hero.ctaText}
				</Button>
			</Box>

			<Box sx={heroSectionStyle.imageBox}>
				<Box sx={heroSectionStyle.imageWrapper}>
					<Image
						src={cspmDashboardImage}
						alt="HexaFort dashboard showing zero critical misconfigurations with real-time monitoring and compliance status"
						fill
						sizes="(max-width: 600px) 280px, (max-width: 900px) 350px, 500px"
						style={heroSectionStyle.heroImage}
						priority
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;
