'use client';
import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import heroSectionStyle from '../styles/heroSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701HeroSection: React.FC = () => {
	return (
		<Box sx={heroSectionStyle.mainContainer} id="hero-section">
			<Box sx={heroSectionStyle.contentWrapper}>
				<Box sx={heroSectionStyle.chip}>
					<Typography variant="body1" sx={heroSectionStyle.chipTypography}>
						{iso27701Data.heroTitle}
					</Typography>
				</Box>

				<Box sx={heroSectionStyle.textContainer}>
					<Typography variant="h1" sx={heroSectionStyle.heading}>
						Extend Your ISMS for Cutting-Edge Data Security and Privacy Compliance
					</Typography>
					<Typography variant="h6" sx={heroSectionStyle.subheading}>
						Enhance Your Privacy Management Framework
					</Typography>

					<Typography variant="body1" sx={heroSectionStyle.description}>
						Use ISO 27701 to map risks to data privacy controls and run a
						fully-automated compliance checklist to ensure continuous
						compliance and a smooth audit report.
					</Typography>
				</Box>

				<Grid container spacing={3} sx={heroSectionStyle.statsContainer}>
					<Grid size ={{xs:12, sm:4}}>
						<Box sx={heroSectionStyle.statItem}>
							<Box
                                sx={heroSectionStyle.statIconContainer}
                                aria-hidden="true"
                            >
								<AssignmentIcon sx={heroSectionStyle.statIconSvg} />
							</Box>
							<Typography variant="h4" sx={heroSectionStyle.statValue}>
								1:1
							</Typography>
							<Typography variant="body2" sx={heroSectionStyle.statLabel}>
								Platform Implementation
							</Typography>
						</Box>
					</Grid>

					<Grid size ={{xs:12, sm:4}}>
						<Box sx={heroSectionStyle.statItem}>
							<Box
                                sx={heroSectionStyle.statIconContainer}
                                aria-hidden="true"
                            >
								<AccessTimeIcon sx={heroSectionStyle.statIconSvg} />
							</Box>
							<Typography variant="h4" sx={heroSectionStyle.statValue}>
								10X
							</Typography>
							<Typography variant="body2" sx={heroSectionStyle.statLabel}>
								Fast Audits
							</Typography>
						</Box>
					</Grid>

					<Grid size ={{xs:12, sm:4}}>
						<Box sx={heroSectionStyle.statItem}>
							<Box
                                sx={heroSectionStyle.statIconContainer}
                                aria-hidden="true"
                            >
								<CheckCircleIcon sx={heroSectionStyle.statIconSvg} />
							</Box>
							<Typography variant="h4" sx={heroSectionStyle.statValue}>
								100%
							</Typography>
							<Typography variant="body2" sx={heroSectionStyle.statLabel}>
								Audit Success
							</Typography>
						</Box>
					</Grid>
				</Grid>

				<Button
                    variant="contained"
                    href="/compliance"
                    sx={heroSectionStyle.button}
                    aria-label="Start Your ISO 27701 Journey"
                >
					Start Your ISO 27701 Journey
				</Button>
			</Box>
		</Box>
	);
};

export default Iso27701HeroSection;