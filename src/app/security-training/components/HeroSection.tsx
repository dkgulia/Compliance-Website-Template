'use client';
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import heroSectionStyle from '../styles/heroSectionStyles';
import securityTrainingHero from '../images/security-hero.png';

const SecurityAwarenessHero: React.FC = () => {
	const router = useRouter();

	return (
		<Box component="section" sx={heroSectionStyle.container}>
			<Container maxWidth="lg">
				<Box sx={heroSectionStyle.containerBox}>
					<Box sx={heroSectionStyle.contentBox}>
						<Typography variant="body1" sx={heroSectionStyle.tagline}>
							Security Awareness Made Easy
						</Typography>
						<Typography variant="h1" sx={heroSectionStyle.title}>
							Security Awareness Training Automated
						</Typography>
						<Typography variant="h2" sx={heroSectionStyle.subtitle}>
							Engage. Test. Report. Repeat.
						</Typography>
						<Typography variant="body1" sx={heroSectionStyle.description}>
							Deliver role-based lessons and phishing simulations that keep risks low and
							auditors happy—without drowning your team in administration.
						</Typography>

						<Button
							variant="contained"
							sx={heroSectionStyle.ctaButton}
							onClick={() => router.push('/get-a-demo')}
						>
							Book A Demo
						</Button>
					</Box>

					<Box sx={heroSectionStyle.imageBox}>
						<Image
							src={securityTrainingHero}
							alt="Security Awareness Training"
							width={550}
							height={450}
							style={{
								width: '100%',
								height: 'auto',
								maxWidth: '550px'
							}}
							priority
						/>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default SecurityAwarenessHero;
