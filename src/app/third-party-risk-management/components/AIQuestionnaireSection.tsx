'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import infoSectionStyle from '../styles/infoSectionStyle';
import { thirdPartyRiskManagementData } from '../constants/thirdPartyRiskManagementData';
import Image from 'next/image';
import aiQuestionnaireImage from '../images/third-cta.png';

const AIQuestionnaireSection: React.FC = () => {
	const { aiQuestionnaire } = thirdPartyRiskManagementData;

	return (
		<Box component="section" sx={infoSectionStyle.section}>
			<Container sx={infoSectionStyle.container}>
				<Box sx={infoSectionStyle.contentWrapper}>
					<Box sx={infoSectionStyle.textContainer}>
						<Typography variant="h2" sx={infoSectionStyle.title}>
							{aiQuestionnaire.title}
						</Typography>

						{aiQuestionnaire.description.map((paragraph, index) => (
							<Typography key={index} variant="body1" sx={infoSectionStyle.description}>
								{paragraph}
							</Typography>
						))}
					</Box>

					<Box sx={infoSectionStyle.imageContainer}>
						<Box sx={infoSectionStyle.imageWrapper}>
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
