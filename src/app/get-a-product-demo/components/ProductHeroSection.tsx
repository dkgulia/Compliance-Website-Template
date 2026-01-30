'use client';
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import EnhancedProductDemoForm from './EnhancedProductDemoForm';
import productHeroSectionStyles from '../styles/productHeroSectionStyle';
import { sheetNameTypes } from '../../constants/sheetTypes';
import logo from '../../compliance/get-pci-dss/images/dual-hex-white.png';


const productOptions = [
	'Compliance Automation (SOC 2, ISO 27001, HIPAA, GDPR, etc.)',
	'Trust Center',
	'AI Security Questionnaire Automation',
	'Vendor Risk Management',
];

const ProductHeroSection = () => {
	const [selectedProducts, setSelectedProducts] = useState<string[]>([
		'Compliance Automation (SOC 2, ISO 27001, HIPAA, GDPR, etc.)',
	]);

	const handleProductsChange = (newProducts: string[]) => {
		setSelectedProducts(newProducts);
	};

	const handleSubmitCallback = (values: {
		workEmail: string;
		firstName: string;
		lastName: string;
		companyName: string;
		country: string;
		howDidYouHear: string;
	}) => {
		console.log('Submitted with Products:', { ...values, selectedProducts });
		console.log('Using sheet name:', sheetNameTypes.getAProductDemo);
	};

	return (
		<Box sx={productHeroSectionStyles.container}>
			<Container sx={productHeroSectionStyles.containerBox}>
				<Box sx={productHeroSectionStyles.leftContentBox}>
					<Box sx={productHeroSectionStyles.tag}>
						<Typography sx={productHeroSectionStyles.tagText}>🚀 Experience ComplianceHub Live</Typography>
					</Box>
					<Typography variant="h3" sx={productHeroSectionStyles.mainTitle}>
						Get a Personalized Product Demo of{' '}
						<Box sx={productHeroSectionStyles.highlightWrapper}>
							<Box component="span" sx={productHeroSectionStyles.highlightText}>
								ComplianceHub
							</Box>
							<Box sx={productHeroSectionStyles.logoWrapper}>
								<Image
									src={logo}
									alt="ComplianceHub Logo"
									width={40}
									height={40}
									priority
									style={{
										height: 'auto',
									}}
								/>
							</Box>
						</Box>
					</Typography>
					<Typography sx={productHeroSectionStyles.description}>
						See how ComplianceHub's comprehensive GRC platform can transform your compliance journey. Schedule a personalized
						demo to discover features tailored to your specific needs and industry requirements.
					</Typography>
				</Box>
				<Box sx={productHeroSectionStyles.formBox}>
					<EnhancedProductDemoForm
						title="Get a Demo"
						subtitle="Get a personalized walkthrough of our platform and features."
						buttonText="Get Started"
						sheetName={sheetNameTypes.getAProductDemo}
						formStyles={productHeroSectionStyles}
						selectedProducts={selectedProducts}
						onProductsChange={handleProductsChange}
						productOptions={productOptions}
						onSubmitCallback={handleSubmitCallback}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default ProductHeroSection;