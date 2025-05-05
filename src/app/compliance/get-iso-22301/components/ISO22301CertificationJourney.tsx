'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { iso22301Data } from '../constants/iso22301Data';
import certificationJourneyStyle from '../styles/certificationJourneyStyle';
import {
	FactCheckOutlined,
	DescriptionOutlined,
	GroupOutlined,
	AssessmentOutlined,
	VerifiedOutlined,
	LoopOutlined,
} from '@mui/icons-material';
import theme from '../../../../theme';

const ISO22301CertificationJourney: React.FC = () => {
	const sectionData = iso22301Data.sections.find((sec) => sec.Sno === '10' && sec.blockType === 'Workflow');

	if (!sectionData) return null;

	const workflowItems =
		sectionData.content && Array.isArray(sectionData.content.steps) ? sectionData.content.steps : [];

	const icons = [
		FactCheckOutlined,
		DescriptionOutlined,
		GroupOutlined,
		AssessmentOutlined,
		VerifiedOutlined,
		LoopOutlined,
	];

	return (
		<Box sx={certificationJourneyStyle.box}>
			<Container sx={certificationJourneyStyle.container}>
				<Typography sx={certificationJourneyStyle.title}>{sectionData.title}</Typography>

				<Box sx={certificationJourneyStyle.gridContainer}>
					{workflowItems.map((item, index) => {
						const safeItem = typeof item === 'object' && item !== null ? item : { title: String(item) };
						const title = 'title' in safeItem ? safeItem.title : '';
						const IconComponent = icons[index % icons.length];

						return (
							<Box key={index} sx={certificationJourneyStyle.card}>
								<Box sx={certificationJourneyStyle.stepBadge}>Step {index + 1}</Box>

								<Box sx={certificationJourneyStyle.cardContent}>
									<Box sx={certificationJourneyStyle.iconBox}>
										<IconComponent sx={certificationJourneyStyle.icon} />
									</Box>
									<Typography sx={certificationJourneyStyle.cardTitle}>{title}</Typography>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301CertificationJourney;