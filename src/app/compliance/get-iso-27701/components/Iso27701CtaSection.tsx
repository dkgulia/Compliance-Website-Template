'use client';
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import ctaSectionStyle from '../styles/ctaSectionStyle';
import iso27701Data from '../constants/iso27701Data';
import bannerImage from '../images/create-a-professional-illustration-for-an-iso-2000 (3).png'

const Iso27701CtaSection: React.FC = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<Box sx={ctaSectionStyle.box}>
			<Box sx={ctaSectionStyle.container}>
				<Grid container spacing={3} alignItems="center">
					<Grid size={{ xs: 12, md: 7 }}>
						<Typography variant="h4" sx={ctaSectionStyle.title}>
							Ready to Begin Your ISO 27701 Journey?
						</Typography>
						<Typography sx={ctaSectionStyle.text}>
							Ready to strengthen your data privacy posture? Our experts can guide you in aligning your ISMS with ISO 27701. Contact us today to fortify trust and compliance!
						</Typography>
						<Button
							variant="contained"
							sx={ctaSectionStyle.button}
							onClick={scrollToTop}
						>
							Book Your demo
						</Button>
					</Grid>
					<Grid size={{ xs: 12, md: 5 }} sx={ctaSectionStyle.imageContainer}>
						<Image
							src={bannerImage}
							alt="Contact Us"
							width={300}
							height={300}
							style={{
                                maxWidth: '100%',
                                height: 'auto',
                                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))'
                            }}
						/>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Iso27701CtaSection;