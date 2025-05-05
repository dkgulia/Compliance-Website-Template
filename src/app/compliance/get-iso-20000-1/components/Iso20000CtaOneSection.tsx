'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import iso20000CtaBannerStyles from '../styles/ctaSectionStyle';
import iso20000ComplianceImg from '../images/iso20000-cta.png';

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
				<Container sx={iso20000CtaBannerStyles.bannerContent}>
					<Box sx={iso20000CtaBannerStyles.textContainer}>
						<Typography sx={iso20000CtaBannerStyles.bannerTitle}>
							Take control of your ISO 20000-1 service management journey.
						</Typography>
						<Typography sx={iso20000CtaBannerStyles.bannerSubtitle}>
							Get in touch to learn about ISO 20000-1 certification costs
						</Typography>
						<Button
							sx={iso20000CtaBannerStyles.bannerButton}
							variant="contained"
							onClick={scrollToTop}
						>
							Book a Demo <ArrowForwardIcon sx={{ ml: 1 }} />
						</Button>
					</Box>
					<Box sx={iso20000CtaBannerStyles.imageWrapper}>
						<Image
							src={iso20000ComplianceImg}
							alt="ISO 20000-1 Compliance"
							width={300}
							height={200}
							style={{ borderRadius: '8px' }}
						/>
					</Box>
				</Container>
			</Box>
		</Box>
	);
};

export default Iso20000CtaBanner;