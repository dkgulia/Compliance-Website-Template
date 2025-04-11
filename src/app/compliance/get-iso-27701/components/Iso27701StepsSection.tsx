'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SecurityIcon from '@mui/icons-material/Security';
import ExtensionIcon from '@mui/icons-material/Extension';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import MonitorIcon from '@mui/icons-material/Monitor';
import stepsSectionStyle from '../styles/stepsSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701StepsSection: React.FC = () => {
	// Use existing steps data from iso27701Data
	const steps = iso27701Data.steps;

	// Function to get icon based on step number
	const getIconForStep = (stepNumber: number) => {
		switch (stepNumber) {
			case 1:
				return AssignmentIcon;
			case 2:
				return SecurityIcon;
			case 3:
				return ExtensionIcon;
			case 4:
				return DesignServicesIcon;
			case 5:
				return MonitorIcon;
			default:
				return AssignmentIcon;
		}
	};

	return (
		<Box sx={stepsSectionStyle.box}>
			<Container sx={stepsSectionStyle.container}>
				<Typography variant="h3" sx={stepsSectionStyle.title}>
					Implementation Roadmap
				</Typography>
				<Typography variant="h6" sx={stepsSectionStyle.subtitle}>
					Your Path to ISO 27701 Certification
				</Typography>


				<Grid container spacing={2} sx={stepsSectionStyle.gridContainer}>
					{steps.map((stepItem, index) => {
						const IconComponent = getIconForStep(stepItem.step);

						return (
							<Grid size={{ xs: 12, sm: 6, md: index < 3 ? 4 : 6 }} key={index}>
								<Card sx={stepsSectionStyle.card}>
									<CardContent sx={stepsSectionStyle.cardContent}>
										<Typography sx={stepsSectionStyle.cardStep}>
											Step {stepItem.step}
										</Typography>
										<Box sx={stepsSectionStyle.iconContainer}>
											<IconComponent sx={stepsSectionStyle.icon} />
										</Box>
									 	<Typography sx={stepsSectionStyle.cardTitle}>
											{stepItem.title}
										</Typography>
										<Typography sx={stepsSectionStyle.cardDescription}>
											{stepItem.description}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</Box>
	);
};

export default Iso27701StepsSection;