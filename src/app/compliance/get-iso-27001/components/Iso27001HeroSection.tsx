'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso27001Data } from '../constants/iso27001Data';
import EnhancedComplianceForm from '../../components/EnhancedComplianceForm';
import { ComplianceFormValues } from '../../components/ComplianceForm';
import { ShieldOutlined, VerifiedUser, SecurityOutlined } from '@mui/icons-material';
import { sheetNameTypes } from '../../../constants/sheetTypes';

const Iso27001HeroSection: React.FC = () => {
	const heroContent = iso27001Data.sections.find((section) => section.Sno === '1' && section.blockType === 'Hero');

	if (!heroContent) return null;

	const [selectedOptions, setSelectedOptions] = useState<string[]>([
		'ISO 27001',
		'ISO 42001',
		'ISO 27018'
	]);

	const handleOptionsChange = (newOptions: string[]) => {
		setSelectedOptions(newOptions);
	};

	const handleSubmitCallback = (values: ComplianceFormValues) => {
		console.log('Submitted with Values and Options:', { ...values, selectedOptions });
	};

    const complianceOptions = [
        'ISO 27001', 'ISO 42001', 'ISO 27018', 'SOC 2', 'GDPR', 'HIPAA',
        'CCPA', 'PCI DSS', 'NIST Frameworks', 'ISO 22301', 'ISO 20000-1',
        'ISO 27701', 'DORA', 'CMMC', 'PDPA'
    ];

	const heroBullets = [
		{
			icon: VerifiedUser,
			title: 'Secure',
			text: 'Data Management'
		},
		{
			icon: ShieldOutlined,
			title: 'Risk',
			text: 'Mitigation'
		},
		{
			icon: SecurityOutlined,
			title: 'Global',
			text: 'Compliance'
		}
	];

	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Box sx={heroSectionStyle.leftContentBox}>
					<Typography sx={heroSectionStyle.tagline}>🔒 ISO 27001 made easy</Typography>

					<Typography variant="h2" sx={heroSectionStyle.title}>
						{heroContent.content.heroTitle}
						<Box component="span" display="block" sx={heroSectionStyle.highlightText}>
							Information Security Excellence
						</Box>
					</Typography>

					{heroContent.content.heroDescription && (
						<Box sx={heroSectionStyle.description}>
							ISO 27001 is the international standard for information security management. Our platform helps organizations implement and maintain a robust information security management system.
						</Box>
					)}

					<Box sx={heroSectionStyle.featuresContainer}>
						{heroBullets.map((item, index) => {
							const Icon = item.icon;
							return (
								<Box key={index} sx={heroSectionStyle.featureItem}>
									<Box sx={heroSectionStyle.iconWrapper}>
										<Icon sx={heroSectionStyle.featureIcon} />
									</Box>
									<Box sx={heroSectionStyle.featureTextWrapper}>
										<Typography sx={heroSectionStyle.featureTitle}>
											{item.title}
										</Typography>
										<Typography sx={heroSectionStyle.featureSubtitle}>
											{item.text}
										</Typography>
									</Box>
								</Box>
							);
						})}
					</Box>
				</Box>

				<Box sx={heroSectionStyle.formBox}>
					<EnhancedComplianceForm
						title="Book Your ISO 27001 Demo Today!"
						subtitle="Get answers to all your questions about ISO 27001 compliance."
						buttonText="Book Your Demo"
						sheetName={sheetNameTypes.iso27001Form}
						formStyles={heroSectionStyle}
						selectedOptions={selectedOptions}
						onOptionsChange={handleOptionsChange}
						complianceOptions={complianceOptions}
						onSubmitCallback={handleSubmitCallback}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Iso27001HeroSection;