'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../../Button/ComplianceHubButton';
import callToActionStyle from '../styles/callToActionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ctaImage from '../images/bookAdemo.png';

const CallToActionSection: React.FC = () => {
	const { callToAction } = thirdPartyRiskManagementData;
	const router = useRouter();

	const handleRedirect = () => {
		router.push('/get-a-product-demo');
	};

	const benefits = [
		'10-minute personalized demo',
		'Live TPRM assessment walkthrough',
		'Custom implementation roadmap',
		'No sales pressure - just insights',
	];

	return (
		<Box component="section" sx={callToActionStyle.section}>
			<Container sx={callToActionStyle.container}>
				{/* Header */}
				<Box sx={callToActionStyle.headerContainer}>
					<Typography sx={callToActionStyle.mainTitle}>{callToAction.title}</Typography>
					<Typography sx={callToActionStyle.mainSubtitle}>Experience ComplianceHub in action today.</Typography>
				</Box>

				{/* Main Content */}
				<Box sx={callToActionStyle.contentWrapper}>
					<Box sx={callToActionStyle.textContent}>
						<Typography sx={callToActionStyle.title}>See ComplianceHub Live</Typography>
						<Typography sx={callToActionStyle.subtitle}>{callToAction.subtitle}</Typography>
						<Typography sx={callToActionStyle.description}>
							Join hundreds of security leaders who automated their TPRM program in weeks, not months.
						</Typography>

						{/* Benefits List */}
						<Box sx={callToActionStyle.benefitsList}>
							{benefits.map((benefit, index) => (
								<Box key={index} sx={callToActionStyle.benefitItem}>
									<CheckCircleIcon sx={callToActionStyle.benefitIcon} />
									<Typography sx={callToActionStyle.benefitText}>{benefit}</Typography>
								</Box>
							))}
						</Box>

						<Button startIcon={<CalendarTodayIcon />} endIcon={<ArrowForwardIcon />} onClick={handleRedirect}>
							Schedule My Demo
						</Button>
					</Box>

					<Box sx={callToActionStyle.imageContainer}>
						<Box sx={callToActionStyle.imageWrapper}>
							<Box/>
							<Image
								src={ctaImage}
								alt="Schedule a demo with ComplianceHub"
								style={{
									width: '100%',
									maxWidth: '400px',
									height: 'auto',
									borderRadius: '1rem',
									position: 'relative',
									zIndex: 2,
								}}
							/>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CallToActionSection;
