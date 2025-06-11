'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';
import Image from 'next/image';
import ctaImage from '../images/bookDemo.png';
import { useRouter } from 'next/navigation';

const CTASection: React.FC = () => {
	const { callToAction } = controlFrameworkData.sections;
	const router = useRouter();

	return (
		<Box sx={ctaSectionStyle.section}>
			<Box sx={ctaSectionStyle.headerContainer}>
				<Typography sx={ctaSectionStyle.tagline}>GET STARTED</Typography>
				<Typography sx={ctaSectionStyle.title}>
					Ready to Transform Your Control Framework?
				</Typography>
				<Typography sx={ctaSectionStyle.subtitle}>
					Experience the power of customizable compliance
				</Typography>
			</Box>

			<Box sx={ctaSectionStyle.ctaWrapper}>
				<Box sx={ctaSectionStyle.textContent}>
					<Typography sx={ctaSectionStyle.ctaTitle}>
						{callToAction.title}
					</Typography>

					<Typography sx={ctaSectionStyle.description}>
						{callToAction.description}
					</Typography>

					<Button
						endIcon={<ArrowForwardIcon />}
						onClick={() => router.push('/get-a-product-demo')}
					>
						{callToAction.ctaText}
					</Button>
				</Box>

				<Box sx={ctaSectionStyle.imageContainer}>
					<Box sx={ctaSectionStyle.imageWrapper}>
						<Image
							src={ctaImage}
							alt={callToAction.imageAlt || 'Call to action illustration'}
							fill
							style={ctaSectionStyle.ctaImage}
							priority
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CTASection;