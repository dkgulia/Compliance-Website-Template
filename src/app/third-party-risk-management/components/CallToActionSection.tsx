'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import callToActionStyle from '../styles/callToActionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ctaImage from '../images/bookAdemo.png';

const CallToActionSection: React.FC = () => {
	const { callToAction } = thirdPartyRiskManagementData;
	const router = useRouter();

	const handleRedirect = () => {
		router.push('/hexafort-secure');
	};

	return (
		<Box component="section" sx={callToActionStyle.section}>
			<Container sx={callToActionStyle.container}>
				<Box sx={callToActionStyle.contentWrapper}>
					<Box sx={callToActionStyle.textContent}>
						<Typography variant="h2" sx={callToActionStyle.title}>
							{callToAction.title}
						</Typography>
						<Typography variant="h5" sx={callToActionStyle.subtitle}>
							{callToAction.subtitle}
						</Typography>
						<Typography variant="body1" sx={callToActionStyle.description}>
							{callToAction.description}
						</Typography>
						<Button
							variant="contained"
							sx={callToActionStyle.ctaButton}
							endIcon={<ArrowForwardIcon />}
							onClick={handleRedirect}
						>
							{callToAction.ctaText}
						</Button>
					</Box>

					<Box sx={callToActionStyle.imageContainer}>
						<Image
							src={ctaImage}
							alt="Call to action visual"
							style={{
								width: '100%',
								maxWidth: '400px',
								height: 'auto',
								borderRadius: '1rem',
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CallToActionSection;
