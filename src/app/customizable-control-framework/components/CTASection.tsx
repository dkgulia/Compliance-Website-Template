'use client';

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';
import Image from 'next/image';
import ctaImage from '../images/bookDemo.png';
import { useRouter } from 'next/navigation';
const CTASection: React.FC = () => {
	const { callToAction } = controlFrameworkData.sections;
	const router = useRouter();
	return (
		<Box component="section" sx={ctaSectionStyle.section}>
			<Container maxWidth="lg" sx={ctaSectionStyle.container}>
				<Box sx={ctaSectionStyle.contentBox}>
					<Box sx={ctaSectionStyle.textContent}>
						<Typography variant="h2" sx={ctaSectionStyle.title}>
							{callToAction.title}
						</Typography>

						<Typography sx={ctaSectionStyle.description}>{callToAction.description}</Typography>

						<Button variant="contained" endIcon={<ArrowForwardIcon />} sx={ctaSectionStyle.ctaButton}  onClick={() => router.push('/get-a-demo')}>
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
			</Container>
		</Box>
	);
};

export default CTASection;
