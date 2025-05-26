'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import soc2CtaBannerStyles from '../styles/BookaDemoStyles';

const BookDemo = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Box sx={soc2CtaBannerStyles.bannerOuterContainer}>
			<Box sx={soc2CtaBannerStyles.bannerContainer}>
				<Container sx={soc2CtaBannerStyles.bannerContent}>
					{/* Text Content */}
					<Box sx={soc2CtaBannerStyles.textContainer}>
						<Typography sx={soc2CtaBannerStyles.bannerTitle}>
							Take control of your SOC 2 Type 2 compliance journey.
						</Typography>
						<Typography sx={soc2CtaBannerStyles.bannerSubtitle}>
							Get in touch to know about SOC 2 certification cost
						</Typography>
					</Box>

					{/* CTA Button */}
					<Button sx={soc2CtaBannerStyles.bannerButton} variant="contained" onClick={scrollToTop}>
						Book a Demo
					</Button>
				</Container>
			</Box>
		</Box>
	);
};

export default BookDemo;