'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/ComplianceHubButton';
import { useRouter } from 'next/navigation';
import { securityTrainingData } from '../constants/securityTrainingData';
import securityTrainingHero from '../images/security-hero.png';
import heroStyles from '../styles/heroSectionStyles';

const SecurityAwarenessHero: React.FC = () => {
	const router = useRouter();
	const heroData = securityTrainingData.sections[0].content;
	return (
		<Box component="section" sx={heroStyles.heroContainer}>
			<Box sx={heroStyles.contentBox}>
				<Typography sx={heroStyles.tagline}>{heroData.tagline}</Typography>

				<Typography sx={heroStyles.title}>{heroData.heroTitle}</Typography>

				<Typography sx={heroStyles.subtitle}>{heroData.heroSubtitle}</Typography>

				{heroData.heroDescription &&
					Array.isArray(heroData.heroDescription) &&
					heroData.heroDescription.map((desc: string, index: number) => (
						<Typography key={index} sx={heroStyles.description}>
							{desc}
						</Typography>
					))}

				<Button

					onClick={() => router.push('/get-a-product-demo')}
					endIcon={<ArrowForwardIcon />}
					sx={heroStyles.button}
				>
					{heroData.ctaText}
				</Button>
			</Box>

			<Box sx={heroStyles.imageBox}>
				<Box sx={heroStyles.imageWrapper}>
					<Image
						src={securityTrainingHero}
						alt="Security Awareness Training"
						fill
						style={{
							objectFit: 'contain',
						}}
						priority
						sizes="(max-width: 600px) 280px, (max-width: 900px) 350px, 500px"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default SecurityAwarenessHero;
