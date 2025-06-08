'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import challengesSectionStyle from '../styles/challengesSectionStyle';

const ChallengesSection: React.FC = () => {
	const challenges = [
		{
			title: "Data Breaches & Fines",
			description: "Data breaches are rising rapidly, leading to significant financial losses and lasting reputational damage for organizations.",
			icon: SecurityIcon
		},
		{
			title: "Compliance Fatigue",
			description: "Businesses struggle to keep up with constantly evolving regulatory landscape and complex compliance requirements.",
			icon: AssignmentLateIcon
		},
		{
			title: "Inefficient Processes",
			description: "Manual GRC processes consume valuable time, introduce human errors, and provide limited operational visibility.",
			icon: PendingActionsIcon
		},
		{
			title: "Complex IT Infrastructure",
			description: "Modern IT environments involve hybrid clouds, mobile devices, and numerous applications requiring comprehensive management.",
			icon: CloudSyncIcon
		}
	];

	return (
		<Box sx={challengesSectionStyle.section}>
			<Box sx={challengesSectionStyle.headerContainer}>
				<Typography sx={challengesSectionStyle.tagline}>
					THE CHALLENGE
				</Typography>
				<Typography sx={challengesSectionStyle.title}>
					Unmanageable Compliance
				</Typography>
				<Typography sx={challengesSectionStyle.subtitle}>
					Modern organizations face unprecedented compliance challenges
				</Typography>
			</Box>

			<Box sx={challengesSectionStyle.grid}>
				{challenges.map((challenge, index) => (
					<Box key={index} sx={challengesSectionStyle.challengeItem}>
						<Box sx={challengesSectionStyle.iconContainer}>
							<challenge.icon />
						</Box>
						<Box sx={challengesSectionStyle.textContainer}>
							<Typography sx={challengesSectionStyle.challengeTitle}>
								{challenge.title}
							</Typography>
							<Typography sx={challengesSectionStyle.challengeDescription}>
								{challenge.description}
							</Typography>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default ChallengesSection;