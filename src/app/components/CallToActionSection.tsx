'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ctaSectionStyle from './styles/callToActionSectionStyle';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import demoImage from '../cspm/images/bookAdemo.png';

const features = [
	'10-minute tailored demonstration',
	'Live cloud security assessment',
	'Compliance gap report to keep',
	'No sales pressure - just practical insights',
];

const CTASection: React.FC = () => {
	const router = useRouter();

	const handleBookDemo = () => {
		router.push('/get-a-product-demo');
	};

	return (
		<Box sx={ctaSectionStyle.section}>
			<Box sx={ctaSectionStyle.headerContainer}>
				<Typography sx={ctaSectionStyle.title}>
					Ready to Transform Your Security?
				</Typography>
				<Typography sx={ctaSectionStyle.subtitle}>
					Experience the power of AI-driven GRC in action
				</Typography>
			</Box>

			<Box sx={ctaSectionStyle.contentWrapper}>
				<Box sx={ctaSectionStyle.textContent}>
					<Typography sx={ctaSectionStyle.ctaTitle}>
						See HexaFort Live
					</Typography>
					<Typography sx={ctaSectionStyle.description}>
						Get a free cloud security assessment and compliance gap report you can use immediately.
						No obligations, just actionable insights.
					</Typography>

					<Box sx={ctaSectionStyle.featureList}>
						{features.map((feature, index) => (
							<Box key={index} sx={ctaSectionStyle.featureItem}>
								<CheckCircleOutlineIcon sx={ctaSectionStyle.featureIcon} />
								<Typography sx={ctaSectionStyle.featureText}>{feature}</Typography>
							</Box>
						))}
					</Box>

					<Button
						variant="contained"
						sx={ctaSectionStyle.button}
						startIcon={<CalendarMonthIcon />}
						onClick={handleBookDemo}
					>
						Book My Free Demo Now
					</Button>
				</Box>

				<Box sx={ctaSectionStyle.imageContainer}>
					<Image
						src={demoImage}
						alt="Demo visual"
						style={{
							width: '100%',
							maxWidth: '400px',
							height: 'auto',
							borderRadius: '0.5rem',
						}}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default CTASection;