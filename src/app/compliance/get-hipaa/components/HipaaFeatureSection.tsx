import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import hipaaFeaturesSectionStyles from '../styles/featureSectionStyle';
import {hipaaComplianceData} from '../constant/hipaaData';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LockIcon from '@mui/icons-material/Lock';
import GavelIcon from '@mui/icons-material/Gavel';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const featuresData = [
	{
		id: 1,
		icon: <VerifiedUserIcon />,
		title: 'Protects Patient Privacy',
		description:
			'HIPAA ensures the confidentiality of patient health information (PHI) and protects it from unauthorized access.',
	},
	{
		id: 2,
		icon: <LockIcon />,
		title: 'Reduces Data Breach Risks',
		description:
			'By implementing robust security measures, organizations can prevent unauthorized access and data leaks.',
	},
	{
		id: 3,
		icon: <GavelIcon />,
		title: 'Legal & Regulatory Compliance',
		description: 'Avoid legal penalties and maintain compliance with federal healthcare regulations.',
	},
	{
		id: 4,
		icon: <PeopleIcon />,
		title: 'Improves Patient Trust',
		description:
			'Secure healthcare data management builds trust with patients and improves organizational credibility.',
	},
	{
		id: 5,
		icon: <SecurityIcon />,
		title: 'Standardized Data Security',
		description: 'HIPAA sets industry-wide standards for electronic health record security and data handling.',
	},
	{
		id: 6,
		icon: <SpeedIcon />,
		title: 'Enhances Operational Efficiency',
		description: 'Automated compliance tools streamline processes and reduce administrative burdens.',
	},
];

const HipaaFeaturesSection = () => {
	return (
		<Box id="hipaa-features" sx={hipaaFeaturesSectionStyles.box}>
			<Container maxWidth="lg">
				<Box sx={hipaaFeaturesSectionStyles.containerBox}>
					<Typography component="h2" variant="h4" sx={hipaaFeaturesSectionStyles.heading}>
						Key HIPAA Compliance Features
					</Typography>
					<Typography variant="body1" sx={hipaaFeaturesSectionStyles.subheading}>
						Explore our comprehensive set of tools to help you maintain HIPAA compliance
					</Typography>
				</Box>
				<Grid container spacing={4}>
					{featuresData.map((feature) => (
						<Grid size={{ xs: 12, sm: 6, md: 4 }} key={feature.id}>
							<Box sx={hipaaFeaturesSectionStyles.card}>
								<Box sx={hipaaFeaturesSectionStyles.iconContainer}>{feature.icon}</Box>
								<Box sx={hipaaFeaturesSectionStyles.textContainer}>
									<Typography variant="h6" sx={hipaaFeaturesSectionStyles.title}>
										{feature.title}
									</Typography>
									<Typography variant="body2" sx={hipaaFeaturesSectionStyles.description}>
										{feature.description}
									</Typography>
								</Box>
							</Box>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default HipaaFeaturesSection;