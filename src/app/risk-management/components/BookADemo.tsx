'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Image from 'next/image';
import bookADemoStyle from '../styles/bookADemoStyle';
import { useRouter } from 'next/navigation';
import dashboardPreview from '../images/risk-cta.png';
import Button from '../../Button/ComplianceHubButton';
const BookADemo = () => {
	const router = useRouter();
	const handleBookDemo = () => {
		router.push('/get-a-product-demo');
	};

	const benefits = [
		'Customize scoring with your unique risk factors and weights',
		'Identify and address critical risks through CIA evaluation',
		'Generate audit-ready documentation in one click',
	];

	return (
		<Box sx={bookADemoStyle.section}>
			<Box sx={bookADemoStyle.headerContainer}>
				<Typography sx={bookADemoStyle.title}>Transform Your Risk Management Approach</Typography>
				<Typography sx={bookADemoStyle.subtitle}>Experience the power of AI-driven risk management</Typography>
			</Box>

			<Box sx={bookADemoStyle.contentWrapper}>
				<Box sx={bookADemoStyle.textContent}>
					<Typography sx={bookADemoStyle.ctaTitle}>See ComplianceHub Risk Management Live</Typography>
					<Typography sx={bookADemoStyle.description}>
						Get a comprehensive risk assessment and see how our platform can transform your security posture.
					</Typography>

					<Box sx={bookADemoStyle.benefitsList}>
						{benefits.map((benefit, index) => (
							<Box key={index} sx={bookADemoStyle.benefitItem}>
								<CheckCircleIcon sx={bookADemoStyle.benefitIcon} />
								<Typography sx={bookADemoStyle.benefitText}>{benefit}</Typography>
							</Box>
						))}
					</Box>

					<Button onClick={handleBookDemo} endIcon={<ArrowForwardIcon />}>
						Book Your Demo
					</Button>
				</Box>

				<Box sx={bookADemoStyle.imageContainer}>
					<Image
						src={dashboardPreview}
						alt="Risk Management Dashboard Preview"
						style={{
							width: '100%',
							maxWidth: '400px',
							height: 'auto',
							borderRadius: '0.5rem',
						}}
						priority
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default BookADemo;
