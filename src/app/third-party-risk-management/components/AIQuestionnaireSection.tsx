'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import infoSectionStyle from '../styles/infoSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import Image from 'next/image';
import aiQuestionnaireImage from '../images/third-cta.png';

const AIQuestionnaireSection: React.FC = () => {
	const { aiQuestionnaire } = thirdPartyRiskManagementData;

	const features = [
		{
			icon: AutoAwesomeIcon,
			title: 'AI-Powered Precision',
			description: 'Generate precise answers instantly with advanced AI',
		},
		{
			icon: SpeedIcon,
			title: 'Lightning Fast',
			description: 'Complete questionnaires in minutes, not hours',
		},
		{
			icon: CheckCircleIcon,
			title: 'Audit-Ready',
			description: 'Consistent, compliant responses every time',
		},
		{
			icon: SecurityIcon,
			title: 'Enterprise Security',
			description: 'Bank-grade security for sensitive data',
		},
	];

	return (
		<Box component="section" sx={infoSectionStyle.section}>
			<Container sx={infoSectionStyle.container}>
				{/* Header Section */}
				<Box sx={infoSectionStyle.headerContainer}>
					<Typography sx={infoSectionStyle.title}>{aiQuestionnaire.title}</Typography>
					<Typography sx={infoSectionStyle.subtitle}>
						Say goodbye to manual responses. Transform your questionnaire process with intelligent automation.
					</Typography>
				</Box>

				<Box sx={infoSectionStyle.contentWrapper}>
					<Box sx={infoSectionStyle.textContainer}>
						{aiQuestionnaire.description.map((paragraph, index) => (
							<Typography key={index} variant="body1" sx={infoSectionStyle.description}>
								{paragraph}
							</Typography>
						))}

						<Box sx={infoSectionStyle.highlight}>
							<AutoAwesomeIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: '1.1rem' }} />
							Consistent, audit-ready answers every time.
						</Box>

						{/* Features Grid */}
						<Box sx={infoSectionStyle.featuresGrid}>
							{features.map((feature, index) => (
								<Box key={index} sx={infoSectionStyle.featureItem}>
									<Box sx={infoSectionStyle.featureIconContainer}>
										<feature.icon sx={infoSectionStyle.featureIcon} />
									</Box>
									<Box>
										<Typography sx={infoSectionStyle.featureTitle}>{feature.title}</Typography>
										<Typography sx={infoSectionStyle.featureDescription}>{feature.description}</Typography>
									</Box>
								</Box>
							))}
						</Box>
					</Box>

					<Box sx={infoSectionStyle.imageContainer}>
						<Box sx={infoSectionStyle.imageWrapper}>
							<Box />
							<Image
								src={aiQuestionnaireImage}
								alt={aiQuestionnaire.imagePrompt || 'AI-powered questionnaire assistance'}
								width={500}
								height={400}
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: '1rem',
									objectFit: 'cover',
									position: 'relative',
									zIndex: 2,
								}}
								priority
							/>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default AIQuestionnaireSection;
