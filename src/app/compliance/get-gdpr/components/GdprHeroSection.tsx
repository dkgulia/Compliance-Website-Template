'use client';

import React from 'react';
import Image from 'next/image';
import gdprImage from '../images/ChatGPT Image Apr 28, 2025, 01_48_19 PM.png';
import { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';
import HandshakeIcon from '@mui/icons-material/Handshake';
import gdprData from '../constants/gdprData';
import heroSectionStyle from '../styles/heroSectionStyle';

export default function GdprHeroSection() {
	return (
		<Box sx={heroSectionStyle.container}>
			<Container maxWidth="lg">
				<Grid container spacing={4} alignItems="center">
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={heroSectionStyle.textContent}>
							<Typography variant="h1" sx={heroSectionStyle.heroTitle}>
								{gdprData.heroTitle}
							</Typography>

							<Typography variant="subtitle1" sx={heroSectionStyle.heroSubtitle}>
								{gdprData.heroSubtitle}
							</Typography>

							<Typography variant="body1" sx={heroSectionStyle.heroDescription}>
								The General Data Protection Regulation (GDPR) transformed how organizations handle personal data. Beyond
								being a legal mandate, GDPR is a framework for protecting individuals' privacy rights in a globalized,
								data-driven economy.
							</Typography>

							<Button variant="outlined" sx={heroSectionStyle.ctaButton}>
								{gdprData.ctaText}
							</Button>
						</Box>
					</Grid>

					<Grid size={{ xs: 12, md: 6 }}>
						<Box
							sx={{
								position: 'relative',
								width: '100%',
								height: '400px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								src={gdprImage}
								alt="GDPR Compliance Illustration"
								fill
								style={{
									objectFit: 'contain',
								}}
								priority
							/>
						</Box>
					</Grid>
				</Grid>

				<Grid container spacing={4} sx={heroSectionStyle.cardsContainer}>
					<Grid size={{ xs: 12, md: 4 }}>
						<Card elevation={0} sx={heroSectionStyle.card1}>
							<CardContent sx={heroSectionStyle.cardContent}>
								<Box sx={heroSectionStyle.iconContainer}>
									<VerifiedUserIcon sx={heroSectionStyle.cardIcon} />
								</Box>
								<Typography variant="h6" sx={heroSectionStyle.cardTitle}>
									Simplified Compliance
								</Typography>
								<Typography variant="body2" sx={heroSectionStyle.cardDescription}>
									Step-by-step guidance to navigate GDPR requirements efficiently
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid size={{ xs: 12, md: 4 }}>
						<Card elevation={0} sx={heroSectionStyle.card2}>
							<CardContent sx={heroSectionStyle.cardContent}>
								<Box sx={heroSectionStyle.iconContainer}>
									<ShieldIcon sx={heroSectionStyle.cardIcon} />
								</Box>
								<Typography variant="h6" sx={heroSectionStyle.cardTitle}>
									Data Protection
								</Typography>
								<Typography variant="body2" sx={heroSectionStyle.cardDescription}>
									Secure frameworks for handling and processing personal information
								</Typography>
							</CardContent>
						</Card>
					</Grid>

					<Grid size={{ xs: 12, md: 4 }}>
						<Card elevation={0} sx={heroSectionStyle.card3}>
							<CardContent sx={heroSectionStyle.cardContent}>
								<Box sx={heroSectionStyle.iconContainer}>
									<HandshakeIcon sx={heroSectionStyle.cardIcon} />
								</Box>
								<Typography variant="h6" sx={heroSectionStyle.cardTitle}>
									Build Customer Trust
								</Typography>
								<Typography variant="body2" sx={heroSectionStyle.cardDescription}>
									Demonstrate your commitment to privacy and data protection
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}