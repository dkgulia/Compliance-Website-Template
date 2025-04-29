'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import challengesSectionStyle from '../styles/challengesSectionStyle';

const ChallengesSection: React.FC = () => {
	const challenges = [
		{
			title: "Data Breaches & Fines",
			description: "Data breaches are on the rise, leading to significant financial and reputational damage.",
			icon: SecurityIcon
		},
		{
			title: "Compliance Fatigue",
			description: "Businesses struggle to keep up with the ever-changing regulatory landscape.",
			icon: AssignmentLateIcon
		},
		{
			title: "Inefficient Processes",
			description: "Manual GRC processes are time-consuming, error-prone, and lack visibility.",
			icon: PendingActionsIcon
		},
		{
			title: "Managing Complex IT Infrastructures",
			description: "Modern IT environments are increasingly complex, with hybrid clouds, mobile devices, and a growing number of applications.",
			icon: CloudSyncIcon
		}
	];

	return (
		<Box sx={challengesSectionStyle.section}>
			<Container sx={challengesSectionStyle.container}>
				<Typography variant="h2" sx={challengesSectionStyle.title}>
					The Challenge: Unmanageable Compliance
				</Typography>

				<Box sx={challengesSectionStyle.grid}>
					{challenges.map((challenge, index) => (
						<Box key={index} sx={challengesSectionStyle.challengeItem}>
							<Box sx={challengesSectionStyle.iconContainer}>
								<challenge.icon sx={challengesSectionStyle.icon} />
							</Box>
							<Typography variant="h6" sx={challengesSectionStyle.challengeTitle}>
								{challenge.title}
							</Typography>
							<Typography variant="body2" sx={challengesSectionStyle.challengeDescription}>
								{challenge.description}
							</Typography>
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default ChallengesSection;