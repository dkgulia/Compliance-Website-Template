'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import callToActionSectionStyle from '../styles/callToActionSectionStyle';
import { cspmData } from '../constants/cspmData';
import theme from '../../../theme';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import demoImage from '../images/bookAdemo.png';

const features = [
	'10-minute tailored demonstration',
	'Live cloud security assessment',
	'Compliance gap report to keep',
	'No sales pressure - just practical insights',
];

const CallToActionSection: React.FC = () => {
	const router = useRouter();

	const handleBookDemo = () => {
		router.push('/get-a-demo');
	};

	return (
		<Box component="section" sx={callToActionSectionStyle.box}>
			<Container sx={callToActionSectionStyle.container}>
				<Box sx={callToActionSectionStyle.contentWrapper}>
					<Box sx={callToActionSectionStyle.textContent}>
						<Typography variant="h2" component="h2" sx={callToActionSectionStyle.title}>
							{cspmData.callToAction.title}
						</Typography>
						<Typography variant="subtitle1" sx={callToActionSectionStyle.subtitle}>
							{cspmData.callToAction.subtitle}
						</Typography>
						<Typography variant="body1" sx={callToActionSectionStyle.description}>
							{cspmData.callToAction.description}
						</Typography>

						<Box sx={callToActionSectionStyle.featureList}>
							{features.map((feature, index) => (
								<Box key={index} sx={callToActionSectionStyle.featureItem}>
									<CheckCircleOutlineIcon sx={callToActionSectionStyle.featureIcon} />
									<Typography sx={callToActionSectionStyle.featureText}>{feature}</Typography>
								</Box>
							))}
						</Box>

						<Button
							variant="contained"
							sx={callToActionSectionStyle.button}
							startIcon={<CalendarMonthIcon />}
							onClick={handleBookDemo}
						>
							{cspmData.callToAction.ctaText}
						</Button>
					</Box>

					<Box sx={callToActionSectionStyle.imageContainer}>
						<Image
							src={demoImage}
							alt="Demo visual"
							style={{
								width: '100%',
								maxWidth: '450px',
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
