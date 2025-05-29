'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import { useRouter } from 'next/navigation';
import trustCenterHeroImage from '../images/trustHero.png';
import heroStyles from '../styles/heroSectionStyle';

const HeroSection: React.FC = () => {
	const data = trustCenterPageData.sections.hero;
	const router = useRouter();

	const handleBookDemo = () => {
		router.push('/get-a-demo');
	};

	return (
		<Box sx={heroStyles.heroContainer}>
			<Box sx={heroStyles.contentBox}>
				<Typography sx={heroStyles.tagline}>{data.tagline}</Typography>

				<Typography sx={heroStyles.title}>{data.title}</Typography>

				<Typography sx={heroStyles.subtitle}>{data.subtitle}</Typography>

				{data.description.map((desc, index) => (
					<Typography key={index} sx={heroStyles.description}>
						{desc}
					</Typography>
				))}

				<Button onClick={handleBookDemo} endIcon={<ArrowForwardIcon />}>
					{data.ctaText}
				</Button>
			</Box>

			<Box sx={heroStyles.imageBox}>
				<Box sx={heroStyles.imageWrapper}>
					<Image
						src={trustCenterHeroImage}
						alt="Trust Center Dashboard"
						fill
						style={{
							objectFit: 'cover',
							filter: 'drop-shadow(0 8px 16px rgba(94, 234, 212, 0.2))',
						}}
						priority
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;
