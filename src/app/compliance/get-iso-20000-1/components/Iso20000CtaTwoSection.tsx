'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import iso20000CtaBannerStyles from '../styles/ctaTwoSectionStyle';

const Iso20000CtaBanner = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Box sx={iso20000CtaBannerStyles.bannerOuterContainer}>
			<Box sx={iso20000CtaBannerStyles.bannerContainer}>
				<Box sx={iso20000CtaBannerStyles.textContainer}>
					<Typography sx={iso20000CtaBannerStyles.bannerTitle}>
						Take control of your ISO 20000-1 service management journey.
					</Typography>
					<Typography sx={iso20000CtaBannerStyles.bannerSubtitle}>
						Get in touch to learn about ISO 20000-1 certification costs
					</Typography>
				</Box>

				<Button sx={iso20000CtaBannerStyles.bannerButton} variant="contained" onClick={scrollToTop}>
					Book a Demo
				</Button>
			</Box>
		</Box>
	);
};

export default Iso20000CtaBanner;;

