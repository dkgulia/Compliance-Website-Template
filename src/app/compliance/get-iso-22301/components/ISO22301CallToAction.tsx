'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { iso22301Data } from '../constants/iso22301Data';
import callToActionStyle from '../styles/callToActionStyle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ctaImage from '../images/bookAdemo.png';
import theme from '../../../../theme';

const ISO22301CallToAction: React.FC = () => {
	const bulletPoints = [
		'Strengthen business resilience with proven continuity planning',
		'Demonstrate compliance with international standards',
		'Reduce the impact of disruptive incidents on operations',
		'Build stakeholder confidence in your business continuity',
	];

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Box sx={callToActionStyle.box}>
			<Container sx={callToActionStyle.container}>
				<Box sx={callToActionStyle.textBox}>
					<Box sx={callToActionStyle.taglineContainer}>
						<Typography sx={callToActionStyle.tagline}>ISO 22301 Business Continuity</Typography>
					</Box>

					<Typography variant="h4" sx={callToActionStyle.title}>
						Ready to Safeguard Your Organization Against Disruptions?
					</Typography>

					<Box sx={callToActionStyle.points}>
						{bulletPoints.map((point, i) => (
							<Box key={i} sx={callToActionStyle.point}>
								<CheckCircleIcon sx={callToActionStyle.icon} />
								<Typography component="span">{point}</Typography>
							</Box>
						))}
					</Box>

					<Button variant="contained" sx={callToActionStyle.button} onClick={handleScrollToTop}>
						Get Started with ISO 22301
					</Button>
				</Box>

				<Box sx={callToActionStyle.imageBox}>
					<Box sx={callToActionStyle.imageContainer}>
						<Image
							src={ctaImage}
							alt="ISO 22301 Business Continuity"
							width={450}
							height={450}
							style={{
								maxWidth: '100%',
								height: 'auto',
								objectFit: 'contain',
								borderRadius: '8px'
							}}
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301CallToAction;