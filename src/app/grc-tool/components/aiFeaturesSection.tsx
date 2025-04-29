'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import aiFeaturesSectionStyle from '../styles/aiFeaturesSectionStyle';

const AIFeaturesSection: React.FC = () => {
	const aiFeatures = [
		{
			id: 1,
			title: 'AI-Powered Virtual CISO',
			description:
				'Leverage intelligent AI guidance to streamline compliance strategy and proactively mitigate potential risks.',
		},
		{
			id: 2,
			title: 'Intelligent Cloud Security Management',
			description:
				'Automatically detect, assess, and remediate cloud security vulnerabilities while ensuring continuous compliance with industry standards.',
		},
		{
			id: 3,
			title: 'AI-Powered Security Questionnaire Answering',
			description: 'Automate responses to security questionnaires with pre-built templates and AI assistance.',
		},
		{
			id: 4,
			title: 'Comprehensive Asset & Access Intelligence',
			description:
				'Dynamically manage and optimize asset lifecycles and access controls to create a robust, adaptive security ecosystem.',
		},
	];

	const itemRefs = useRef<HTMLDivElement[]>([]);
	const logoRef = useRef<HTMLDivElement>(null);
	const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

	useEffect(() => {
		if (logoRef.current && itemRefs.current.length) {
			const logoRect = logoRef.current.getBoundingClientRect();
			const newLines = itemRefs.current.map((ref) => {
				const rect = ref.getBoundingClientRect();
				return {
					x1: logoRect.left + logoRect.width / 2,
					y1: logoRect.top + logoRect.height / 2,
					x2: rect.right,
					y2: rect.top + rect.height / 2,
				};
			});
			setLines(newLines);
		}
	}, []);

	return (
		<Box sx={aiFeaturesSectionStyle.section}>
			<Container sx={aiFeaturesSectionStyle.container}>
				<Typography variant="h2" sx={aiFeaturesSectionStyle.title}>
					Beyond Traditional GRC: AI-Powered Innovation
				</Typography>

				<Box sx={aiFeaturesSectionStyle.content}>
					<Box sx={aiFeaturesSectionStyle.featuresList}>
						{aiFeatures.map((feature, index) => (
							<Box key={feature.id} sx={aiFeaturesSectionStyle.featureItem}>
								<Box sx={aiFeaturesSectionStyle.featureNumberContainer}>
									<Typography sx={aiFeaturesSectionStyle.featureNumber}>{feature.id}</Typography>
								</Box>
								<Box sx={aiFeaturesSectionStyle.featureContent}>
									<Typography variant="h6" sx={aiFeaturesSectionStyle.featureTitle}>
										{feature.title}
									</Typography>
									<Typography variant="body2" sx={aiFeaturesSectionStyle.featureDescription}>
										{feature.description}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>

					<Box sx={aiFeaturesSectionStyle.logoColumn}>
						<Box ref={logoRef} sx={aiFeaturesSectionStyle.logoContainer}>
							<Image
								src="/images/company-logo.png"
								alt="Company Logo"
								fill
								style={{ objectFit: 'contain', borderRadius: '50%' }}
							/>
						</Box>

						<svg
							width="100%"
							height="100%"
							style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}
						>
							{lines.map((line, index) => (
								<line
									key={index}
									x1={line.x1}
									y1={line.y1}
									x2={line.x2}
									y2={line.y2}
									stroke="#ffffff"
									strokeWidth="1"
									strokeLinecap="round"
								/>
							))}
						</svg>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default AIFeaturesSection;
