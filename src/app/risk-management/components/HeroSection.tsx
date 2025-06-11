'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import {
	Shield,
	VideoCall as VideoCallIcon,
	AccessTime as AccessTimeIcon,
	VerifiedUser as VerifiedUserIcon,
	ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import Button from '../../Button/HexaFortButton';
import Image from 'next/image';
import heroSectionStyle from '../styles/heroSectionStyle';
import { riskManagementData } from '../constants/riskManagementData';
import { useRouter } from 'next/navigation';
import riskHeroImage from '../images/risk-cta.png';

const HeroSection: React.FC = () => {
	const router = useRouter();
	const heroContent = riskManagementData.sections.find(
		(section) => section.Sno === '1' && section.blockType === 'Hero'
	);

	const handleBookDemo = () => {
		router.push('/get-a-product-demo');
	};

	if (!heroContent) return null;

	return (
		<Box sx={heroSectionStyle.heroContainer}>
			<Box sx={heroSectionStyle.contentBox}>
				<Typography sx={heroSectionStyle.tagline}>RISK MANAGEMENT MADE EASY</Typography>

				<Typography sx={heroSectionStyle.title}>{heroContent.content.heroTitle}</Typography>

				<Typography sx={heroSectionStyle.subtitle}>Protect Your Business Assets</Typography>

				<Typography sx={heroSectionStyle.description}>
					Define likelihood-and-impact maths, see instant dashboards, assign fixes, and export audit packs with one
					click.
				</Typography>

				<Typography sx={heroSectionStyle.description}>
					Our Risk Management empowers you to securely showcase your security posture, compliance controls, policies,
					and certifications—all in one professional, easy-to-access portal.
				</Typography>

				<Button onClick={handleBookDemo} endIcon={<ArrowForwardIcon />}>
					Book Your Demo
				</Button>
			</Box>

			<Box sx={heroSectionStyle.imageBox}>
				<Box sx={heroSectionStyle.imageWrapper}>
					<Image
						src={riskHeroImage}
						alt="Risk Management Dashboard"
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
