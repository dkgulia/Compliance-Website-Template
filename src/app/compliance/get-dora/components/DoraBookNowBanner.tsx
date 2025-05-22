/* <ai_context>
   Updated "Book Now" or "Request Your Demo" banner for DORA,
   adopting the PCI DSS banner style approach from bannerStyle.ts
</ai_context> */
'use client';
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import doraBookNowBannerStyle from '../styles/doraBookNowBannerStyle';
import { complianceData } from '../constants/doraData';

export default function DoraBookNowBanner() {
	return (
		<Box sx={doraBookNowBannerStyle.container}>
			<Box sx={doraBookNowBannerStyle.bannerContainer}>
				<Box sx={doraBookNowBannerStyle.textContent}>
					<Typography variant="h4" sx={doraBookNowBannerStyle.heading}>
						Ready to Elevate Your Digital Resilience?
					</Typography>
					<Typography variant="body1" sx={{ ...doraBookNowBannerStyle.description, whiteSpace: 'pre-line' }}>
						{complianceData.ctaText}
					</Typography>
					<Button variant="contained" sx={doraBookNowBannerStyle.button} endIcon={<ArrowForward />} href="/compliance">
						Book Your Demo
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
