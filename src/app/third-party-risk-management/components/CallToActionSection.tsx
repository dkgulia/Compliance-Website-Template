'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DateRangeIcon from '@mui/icons-material/DateRange';
import callToActionStyle from '../styles/callToActionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import { useRouter } from 'next/navigation';

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
						<Box sx={callToActionStyle.imagePlaceholder}>
							<DateRangeIcon sx={{ fontSize: '2rem', mr: 1 }} />
							{callToAction.imagePrompt}
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CallToActionSection;