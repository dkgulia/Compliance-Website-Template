'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import {
	CloudUpload as CloudUploadIcon,
	Settings as SettingsIcon,
	Assessment as AssessmentIcon,
	AssignmentTurnedIn as AssignmentTurnedInIcon,
} from '@mui/icons-material';
import quickStartOnboardingStyle from '../styles/quickStartOnboardingStyle';
import { riskManagementData } from '../constants/riskManagementData';
interface OnboardingStep {
	heading: string;
	description: string;
	image?: string;
	imagePrompt?: string;
}

const QuickStartOnboarding: React.FC = () => {
	const onboardingContent = riskManagementData.sections.find(
		(section) => section.Sno === '4' && section.blockType === 'Steps/Process'
	);
	if (!onboardingContent || !onboardingContent.content) return null;
	const steps: OnboardingStep[] = onboardingContent.content.steps || [];
	if (steps.length === 0) {
		return (
			<Box sx={quickStartOnboardingStyle.container}>
				<Box sx={quickStartOnboardingStyle.innerBox}>
					<Typography variant="h2" sx={quickStartOnboardingStyle.heading}>
						{onboardingContent.content.title || 'Quick-Start Onboarding'}
					</Typography>
					<Typography variant="body1">No onboarding steps found</Typography>
				</Box>
			</Box>
		);
	}
	const iconMap = [
		<CloudUploadIcon key="import" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
		<SettingsIcon key="customize" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
		<AssessmentIcon key="assess" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
		<AssignmentTurnedInIcon key="mitigate" sx={{ fontSize: '2rem', color: '#FFFFFF' }} />,
	];

	return (
		<Box sx={quickStartOnboardingStyle.container}>
			<Box sx={quickStartOnboardingStyle.innerBox}>
				<Typography variant="h2" sx={quickStartOnboardingStyle.heading}>
					{onboardingContent.content.title || 'Quick-Start Onboarding'}
				</Typography>

				{onboardingContent.content.subtitle && (
					<Typography variant="subtitle1" sx={quickStartOnboardingStyle.subtitle}>
						{onboardingContent.content.subtitle}
					</Typography>
				)}

				<Box sx={quickStartOnboardingStyle.stepsContainer}>
					{steps.map((step, index) => (
						<Box key={index} sx={quickStartOnboardingStyle.stepCard}>
							<Box sx={quickStartOnboardingStyle.stepNumber}>{index + 1}</Box>

							<Box sx={quickStartOnboardingStyle.imagePlaceholder}>
								{index < iconMap.length ? iconMap[index] : iconMap[0]}
							</Box>

							<Typography sx={quickStartOnboardingStyle.stepHeading}>{step.heading}</Typography>

							<Typography sx={quickStartOnboardingStyle.stepDescription}>{step.description}</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default QuickStartOnboarding;
