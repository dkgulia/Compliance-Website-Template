/* <ai_context>
   "How IgniPC Helps with DORA Implementation" section,
   similar to the PCI DSS approach but for DORA.
</ai_context> */

'use client';
import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Stack } from '@mui/material';
import { complianceData } from '../constants/doraData';
import doraHowWeHelpStyle from '../styles/doraHowWeHelpStyle';
import PolicyIcon from '@mui/icons-material/Policy';
import SecurityIcon from '@mui/icons-material/Security';
import AssessmentIcon from '@mui/icons-material/Assessment';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UpdateIcon from '@mui/icons-material/Update';

const helpSteps = [
	{
		icon: PolicyIcon,
		title: 'Risk Profiling',
		description: 'Pinpoint your ICT vulnerabilities and tailor a plan aligning with DORA guidelines.',
		color: '#FFC107',
	},
	{
		icon: SecurityIcon,
		title: 'Implementation & Security Controls',
		description: 'Deploy robust security solutions that meet DORA’s baseline for digital resilience.',
		color: '#F44336',
	},
	{
		icon: AssessmentIcon,
		title: 'Continuous Testing',
		description: 'Identify weaknesses early through routine assessments and advanced penetration tests.',
		color: '#3F51B5',
	},
	{
		icon: BuildIcon,
		title: 'Incident Response Setup',
		description: 'Streamlined workflows to classify and report ICT incidents within tight DORA timelines.',
		color: '#4CAF50',
	},
	{
		icon: CheckCircleIcon,
		title: 'Ongoing Maintenance',
		description: 'Monitor compliance posture and refine controls as DORA guidelines evolve beyond 2025.',
		color: '#009688',
	},
	{
		icon: UpdateIcon,
		title: 'Time Optimization',
		description: 'Accelerate processes with streamlined workflows, ensuring timely adherence to DORA mandates.',
		color: '#FF5722',
	},
];

export default function DoraHowWeHelp() {
	return (
		<Box sx={doraHowWeHelpStyle.container}>
			<Container sx={doraHowWeHelpStyle.innerContainer}>
				<Typography variant="h4" sx={doraHowWeHelpStyle.title}>
					How IgniPC Can Help with DORA Implementation
				</Typography>
				<Typography variant="body1" sx={doraHowWeHelpStyle.subtitle}>
					From risk assessments to full-scale incident response, IgniPC has you covered for all aspects of DORA
					compliance and beyond.
				</Typography>

				<Grid container spacing={2} sx={doraHowWeHelpStyle.grid} justifyContent={'space-around'}>
					{helpSteps.map((step, index) => (
						<Grid key={index} item xs={12} sm={6}>
							<Card sx={doraHowWeHelpStyle.card}>
								<CardContent>
									<Grid spacing={1} alignItems="center" justifyContent="stretch" direction={'row'} container>
										<Grid item md={3}>
											<Box
												sx={{
													fontSize: '4rem',
													color: step.color,
													display: 'flex',
													alignItems: 'center',
													justifyContent: 'center',
													height: '100%',
												}}
											>
												<step.icon fontSize="inherit" />
											</Box>
										</Grid>
										<Grid item md={9}>
											<Box sx={doraHowWeHelpStyle.cardContainer}>
												<Typography variant="h6" sx={doraHowWeHelpStyle.cardTitle}>
													{step.title}
												</Typography>
												<Typography variant="body2" sx={doraHowWeHelpStyle.cardDescription}>
													{step.description}
												</Typography>
											</Box>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
