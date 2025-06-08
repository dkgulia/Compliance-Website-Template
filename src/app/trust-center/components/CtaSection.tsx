'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from '../styles/ctaSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import { useRouter } from 'next/navigation';
import dualHexImage from '../images/bookDemo.png';
import Button from '../../Button/HexaFortButton';

const CtaSection: React.FC = () => {
	const data = trustCenterPageData.sections.cta;
	const router = useRouter();

	const handleRedirect = () => {
		router.push('/hexafort-secure');
	};

	return (
		<Box sx={styles.section}>
			<Box sx={styles.headerContainer}>
				<Typography sx={styles.tagline}>{data.tagline}</Typography>
				<Typography sx={styles.title}>{data.title}</Typography>
				<Typography sx={styles.subtitle}>{data.subtitle}</Typography>
			</Box>

			<Box sx={styles.ctaWrapper}>
				<Box sx={styles.textContent}>
					<Typography sx={styles.ctaTitle}>{data.title}</Typography>

					<Typography sx={styles.description}>{data.description}</Typography>

					<Box sx={styles.benefitsList}>
						{data.benefits.map((benefit, index) => (
							<Box key={index} sx={styles.benefitItem}>
								<CheckCircleIcon sx={styles.benefitIcon} />
								<Typography sx={styles.benefitText}>{benefit}</Typography>
							</Box>
						))}
					</Box>

					<Button onClick={handleRedirect} endIcon={<ArrowForwardIcon />}>
						{data.ctaText}
					</Button>
				</Box>

				<Box sx={styles.imageContainer}>
					<Box sx={styles.imageWrapper}>
						<Image
							src={dualHexImage}
							alt="Trust Center Live Demo"
							fill
							style={{
								objectFit: 'cover',
								borderRadius: '8px',
							}}
							priority
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CtaSection;
