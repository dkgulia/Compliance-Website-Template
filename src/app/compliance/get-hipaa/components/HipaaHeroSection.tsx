'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Verified, Security, Policy } from '@mui/icons-material';
import EnhancedHeroSectionForm from './EnhancedHeroSectionForm';
import heroSectionStyles from '../styles/heroSectionStyle';
import { FormValues } from './EnhancedHeroSectionForm';

const HipaaHeroSection: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [selectedOptions, setSelectedOptions] = useState<string[]>([
		'ISO 27001',
		'ISO 42001',
		'ISO 27018',
		'HIPAA'
	]);

	const handleOptionsChange = (newOptions: string[]) => {
		setSelectedOptions(newOptions);
	};

	const handleSubmitCallback = (values: FormValues) => {
		console.log('Submitted with Values and Options:', { ...values, selectedOptions });
	};

	return (
		<Box sx={heroSectionStyles.box}>
			<Container sx={heroSectionStyles.containerBox}>
				<Box sx={heroSectionStyles.leftContentBox}>
					<Box sx={heroSectionStyles.chip}>
						<Typography variant="body2" sx={heroSectionStyles.chipTypography}>
							🔒 HIPAA Compliance Made Simple
						</Typography>
					</Box>

					<Typography variant="h3" sx={heroSectionStyles.mainTitle}>
						Safeguard Sensitive Healthcare Data: <br />
						<Box component="span" sx={heroSectionStyles.highlightText}>
							Automated Compliance & Risk Management
						</Box>
					</Typography>

					<Typography sx={heroSectionStyles.description}>
						HIPAA compliance ensures the protection of sensitive healthcare information. Our platform is designed to
						help organizations maintain compliance effortlessly, reduce risks, and safeguard patient data.
					</Typography>

					{isMobile ? (
						<Box sx={heroSectionStyles.statsContainer}>
							<Box sx={heroSectionStyles.statItem}>
								<Box sx={heroSectionStyles.iconWrapper}>
									<Verified sx={heroSectionStyles.featureIcon} />
								</Box>
								<Typography sx={heroSectionStyles.statValue}>Automated</Typography>
								<Typography sx={heroSectionStyles.statLabel}>Compliance Monitoring</Typography>
							</Box>

							<Box sx={heroSectionStyles.statItem}>
								<Box sx={heroSectionStyles.iconWrapper}>
									<Security sx={heroSectionStyles.featureIcon} />
								</Box>
								<Typography sx={heroSectionStyles.statValue}>Robust</Typography>
								<Typography sx={heroSectionStyles.statLabel}>Security Controls</Typography>
							</Box>

							<Box sx={heroSectionStyles.statItem}>
								<Box sx={heroSectionStyles.iconWrapper}>
									<Policy sx={heroSectionStyles.featureIcon} />
								</Box>
								<Typography sx={heroSectionStyles.statValue}>Thorough</Typography>
								<Typography sx={heroSectionStyles.statLabel}>Policy Management</Typography>
							</Box>
						</Box>
					) : (
						<Box sx={heroSectionStyles.featuresContainer}>
							<Box sx={heroSectionStyles.featureItem}>
								<Box sx={heroSectionStyles.iconWrapper}>
									<Verified sx={heroSectionStyles.featureIcon} />
								</Box>
								<Box sx={heroSectionStyles.featureTextWrapper}>
									<Typography sx={heroSectionStyles.featureTitle}>Automated</Typography>
									<Typography sx={heroSectionStyles.featureSubtitle}>Compliance Monitoring</Typography>
								</Box>
							</Box>

							<Box sx={heroSectionStyles.featureItem}>
								<Box sx={heroSectionStyles.iconWrapper}>
									<Security sx={heroSectionStyles.featureIcon} />
								</Box>
								<Box sx={heroSectionStyles.featureTextWrapper}>
									<Typography sx={heroSectionStyles.featureTitle}>Robust</Typography>
									<Typography sx={heroSectionStyles.featureSubtitle}>Security Controls</Typography>
								</Box>
							</Box>

							<Box sx={heroSectionStyles.featureItem}>
								<Box sx={heroSectionStyles.iconWrapper}>
									<Policy sx={heroSectionStyles.featureIcon} />
								</Box>
								<Box sx={heroSectionStyles.featureTextWrapper}>
									<Typography sx={heroSectionStyles.featureTitle}>Thorough</Typography>
									<Typography sx={heroSectionStyles.featureSubtitle}>Policy Management</Typography>
								</Box>
							</Box>
						</Box>
					)}
				</Box>

				<Box sx={heroSectionStyles.formBox}>
					<EnhancedHeroSectionForm
						selectedOptions={selectedOptions}
						onOptionsChange={handleOptionsChange}
						onSubmitCallback={handleSubmitCallback}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default HipaaHeroSection;