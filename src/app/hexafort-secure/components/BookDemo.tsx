'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '../../Button/HexaFortButton';
import Image from 'next/image';
import bookDemoStyle from '../styles/bookDemoStyle';
import hexafortSecureData from '../constants/hexafortSecureData';
import demoImage from '../images/bookDemo.png';

const BookDemo: React.FC = () => {
	const { bookDemo } = hexafortSecureData;

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Box sx={bookDemoStyle.section}>
			<Box sx={bookDemoStyle.headerContainer}>

				<Typography sx={bookDemoStyle.title}>{bookDemo.title}</Typography>

				<Typography sx={bookDemoStyle.subtitle}>Experience the power of HexaFort Secure in action</Typography>
			</Box>

			<Box sx={bookDemoStyle.contentWrapper}>
				<Box sx={bookDemoStyle.textContent}>
					<Typography sx={bookDemoStyle.ctaTitle}>See HexaFort Secure Live</Typography>

					<Typography sx={bookDemoStyle.description}>
						Get a comprehensive security assessment and see how our platform can transform your enterprise security
						posture.
					</Typography>

					<Box sx={bookDemoStyle.benefitsList}>
						{bookDemo.points.map((point, index) => (
							<Box key={index} sx={bookDemoStyle.benefitItem}>
								<CheckCircleIcon sx={bookDemoStyle.benefitIcon} />
								<Typography sx={bookDemoStyle.benefitText}>{point}</Typography>
							</Box>
						))}
					</Box>

					<Button endIcon={<ArrowForwardIcon />} onClick={handleScrollToTop} >
						{bookDemo.buttonText}
					</Button>
				</Box>

				<Box sx={bookDemoStyle.imageContainer}>
					<Image
						src={demoImage}
						alt="Book a Demo"
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

export default BookDemo;
