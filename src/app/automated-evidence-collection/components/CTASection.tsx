'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../../Button/HexaFortButton';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import securityComplianceImage from '../images/cta-demo.png';

const CTASection: React.FC = () => {
	const { cta } = evidenceCollectionData;
	const router = useRouter();

	const benefits = [
		'Real-time evidence collection',
		'Zero manual uploads',
		'Audit-ready exports',
		'Continuous compliance monitoring',
	];

	const handleBookDemo = () => {
		router.push('/get-a-demo');
	};

	return (
		<Box sx={ctaSectionStyle.section}>
			<Box sx={ctaSectionStyle.headerContainer}>
				<Typography sx={ctaSectionStyle.tagline}>GET STARTED</Typography>
				<Typography variant="h4" sx={ctaSectionStyle.sectionTitle}>
					Ready to Transform Evidence Collection?
				</Typography>
				<Typography sx={ctaSectionStyle.sectionSubtitle}>Experience automated compliance monitoring</Typography>
			</Box>

			<Box sx={ctaSectionStyle.ctaWrapper}>
				<Box sx={ctaSectionStyle.textContent}>
					<Typography variant="h4" sx={ctaSectionStyle.title}>
						{cta.title}
					</Typography>

					{cta.subtitle && (
						<Typography variant="h6" sx={ctaSectionStyle.subtitle}>
							{cta.subtitle}
						</Typography>
					)}

					<Typography variant="body1" sx={ctaSectionStyle.description}>
						{cta.description}
					</Typography>

					<Box sx={ctaSectionStyle.benefitsList}>
						{benefits.map((benefit, index) => (
							<Box key={index} sx={ctaSectionStyle.benefitItem}>
								<CheckCircleIcon sx={ctaSectionStyle.benefitIcon} />
								<Typography sx={ctaSectionStyle.benefitText}>{benefit}</Typography>
							</Box>
						))}
					</Box>

					<Button endIcon={<ArrowForwardIcon />} onClick={handleBookDemo}>
						{cta.ctaText}
					</Button>
				</Box>

				<Box sx={ctaSectionStyle.imageContainer}>
					<Box sx={ctaSectionStyle.imageWrapper}>
						<Image
							src={securityComplianceImage}
							alt={cta.imageAlt || 'Illustration of security and compliance'}
							fill
							style={ctaSectionStyle.image}
							priority
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CTASection;
