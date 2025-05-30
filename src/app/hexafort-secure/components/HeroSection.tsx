'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroSectionStyle from '../styles/heroSectionStyle';
import { hexafortSecureData } from '../constants/hexafortSecureData';
import heroImage from '../images/secure-hero.png';

const HeroSection: React.FC = () => {
	const { hero } = hexafortSecureData;
	const router = useRouter();

	const handleRedirect = () => {
		router.push('/get-a-demo');
	};

	return (
		<Box sx={heroSectionStyle.heroContainer}>
			<Box sx={heroSectionStyle.contentBox}>
				<Typography sx={heroSectionStyle.tagline}>ENTERPRISE SECURITY PLATFORM</Typography>

				<Typography sx={heroSectionStyle.title}>{hero.title}</Typography>

				<Typography sx={heroSectionStyle.subtitle}>{hero.subtitle}</Typography>

				{hero.description.length > 0 && (
					<Typography sx={heroSectionStyle.description}>{hero.description[0]}</Typography>
				)}

				<Button endIcon={<ArrowForwardIcon />} onClick={handleRedirect}>
					{hero.ctaText}
				</Button>
			</Box>

			<Box sx={heroSectionStyle.imageBox}>
				<Box sx={heroSectionStyle.imageWrapper}>
					<Image
						src={heroImage}
						alt="HexaFort Secure Platform"
						fill
						style={{
							objectFit: 'cover',
							filter: 'drop-shadow(0 8px 16px rgba(17, 94, 89, 0.2))',
						}}
						priority
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default HeroSection;
