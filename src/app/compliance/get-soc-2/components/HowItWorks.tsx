import React from 'react';
import { Box, Container, Grid, Typography, Card, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import PolicyIcon from '@mui/icons-material/Policy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import howItWorksStyles from '../styles/HowItWorksStyles';

const howItWorksData = [
	{ text: 'Meet your dedicated account manager', icon: <PeopleIcon />, color: '#115e59' },
	{ text: 'Scan and secure your cloud infrastructure', icon: <CloudDoneIcon />, color: '#115e59' },
	{ text: 'Create your compliance policies', icon: <PolicyIcon />, color: '#115e59' },
	{ text: 'Easily train personnel on security and privacy requirements', icon: <VerifiedUserIcon />, color: '#115e59' },
	{ text: 'Assess and manage vendor risk', icon: <AssessmentIcon />, color: '#115e59' },
	{ text: 'Complete Secureframe SOC 2 readiness assessment', icon: <AssignmentTurnedInIcon />, color: '#115e59' },
	{ text: 'Complete a SOC 2 audit', icon: <SecurityIcon />, color: '#115e59' },
	{ text: 'Continually maintain SOC 2 compliance', icon: <CheckCircleIcon />, color: '#115e59' },
];

const HowItWorks = () => {
	return (
		<Box id="how-it-works" sx={howItWorksStyles.box}>
			<Container sx={howItWorksStyles.container}>
				<Typography component="h2" variant="h4" sx={howItWorksStyles.title}>
					How It Works
				</Typography>
				<Typography variant="body1" sx={howItWorksStyles.subtitle}>
					We've redefined SOC 2 compliance into 8 effortless steps saving you hundreds of hours while ensuring top-tier
					security and privacy compliance.
				</Typography>
				<Grid container spacing={3} sx={howItWorksStyles.grid}>
					{howItWorksData.map((item, index) => (
						<Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={index}>
							<Card variant="outlined" sx={howItWorksStyles.card}>
								<Stack
									direction="row"
									alignItems="center"
									justifyContent="center"
									spacing={2}
									sx={howItWorksStyles.cardContent}
								>
									<Box sx={{ color: item.color, fontSize: '1.8rem', minWidth: '32px' }}>{item.icon}</Box>
									<Typography variant="body1" sx={howItWorksStyles.cardText}>
										{item.text}
									</Typography>
								</Stack>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default HowItWorks;