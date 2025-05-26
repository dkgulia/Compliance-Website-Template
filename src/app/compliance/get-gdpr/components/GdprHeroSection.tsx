'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ShieldIcon from '@mui/icons-material/Shield';
import HandshakeIcon from '@mui/icons-material/Handshake';
import gdprData from '../constants/gdprData';
import heroSectionStyle from '../styles/heroSectionStyle';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import { sheetNameTypes } from '../../../constants/sheetTypes';

export default function GdprHeroSection() {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([
		'ISO 27001',
		'ISO 42001',
		'ISO 27018',
		'GDPR'
	]);

	const handleOptionsChange = (newOptions: string[]) => {
		setSelectedOptions(newOptions);
	};

	const handleSubmitCallback = (values: ComplianceFormValues) => {
		console.log('Submitted with Values and Options:', { ...values, selectedOptions });
	};

	return (
		<Box sx={heroSectionStyle.container}>
			<Container maxWidth="lg" sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Box sx={heroSectionStyle.tag}>
						<Typography variant="body2" sx={heroSectionStyle.tagText}>
							🔒 GDPR compliance made easy
						</Typography>
					</Box>

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

					<Box sx={heroSectionStyle.featuresContainer}>
						<Box sx={heroSectionStyle.featureItem}>
							<Box sx={heroSectionStyle.iconContainer}>
								<VerifiedUserIcon sx={heroSectionStyle.cardIcon} />
							</Box>
							<Box sx={heroSectionStyle.featureTextWrapper}>
								<Typography sx={heroSectionStyle.featureTitle}>Simplified</Typography>
								<Typography sx={heroSectionStyle.featureSubtitle}>Compliance</Typography>
							</Box>
						</Box>

						<Box sx={heroSectionStyle.featureItem}>
							<Box sx={heroSectionStyle.iconContainer}>
								<ShieldIcon sx={heroSectionStyle.cardIcon} />
							</Box>
							<Box sx={heroSectionStyle.featureTextWrapper}>
								<Typography sx={heroSectionStyle.featureTitle}>Data</Typography>
								<Typography sx={heroSectionStyle.featureSubtitle}>Protection</Typography>
							</Box>
						</Box>

						<Box sx={heroSectionStyle.featureItem}>
							<Box sx={heroSectionStyle.iconContainer}>
								<HandshakeIcon sx={heroSectionStyle.cardIcon} />
							</Box>
							<Box sx={heroSectionStyle.featureTextWrapper}>
								<Typography sx={heroSectionStyle.featureTitle}>Build</Typography>
								<Typography sx={heroSectionStyle.featureSubtitle}>Customer Trust</Typography>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box sx={heroSectionStyle.formBox}>
					<EnhancedComplianceForm
						title="Book Your GDPR Demo Today!"
						subtitle="Get answers to all your questions about GDPR compliance."
						buttonText="Book Your Demo"
						sheetName={sheetNameTypes.gdprForm}
						formStyles={heroSectionStyle}
						selectedOptions={selectedOptions}
						onOptionsChange={handleOptionsChange}
						complianceOptions={[
							'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
							'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
							'ISO 27701', 'DORA', 'CMMC', 'PDPA'
						]}
						onSubmitCallback={handleSubmitCallback}
					/>
				</Box>
			</Container>

			<Container>
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