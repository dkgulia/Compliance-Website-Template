'use client';

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroSectionStyle from '../styles/heroSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import { useRouter } from 'next/navigation';
import trustCenterHeroImage from '../images/trustHero.png';

const HeroSection: React.FC = () => {
	const data = trustCenterPageData.sections.hero;
	const router = useRouter();
	const handleBookDemo = () => {
		router.push('/get-a-demo');
	};

	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.contentBox}>
					<Typography variant="h2" sx={heroSectionStyle.title}>
						{data.title}
					</Typography>

					<Typography variant="h5" sx={heroSectionStyle.subtitle}>
						{data.subtitle}
					</Typography>

					{data.description.map((desc, index) => (
						<Typography key={index} variant="body1" sx={heroSectionStyle.description}>
							{desc}
						</Typography>
					))}

					<Button variant="contained" sx={heroSectionStyle.ctaButton} onClick={handleBookDemo}>
						{data.ctaText} <ArrowForwardIcon sx={{ ml: 1 }} />
					</Button>
				</Box>

				<Box sx={heroSectionStyle.imageBox}>
					<Box sx={heroSectionStyle.imageContainer}>
						<Image
							src={trustCenterHeroImage}
							alt="Trust Center Dashboard"
							width={500}
							height={350}
							style={{
								width: '100%',
								height: 'auto',
								objectFit: 'cover',
								filter: 'drop-shadow(0 8px 16px rgba(94, 234, 212, 0.2))',
							}}
							priority
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;