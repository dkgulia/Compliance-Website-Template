'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import aiFeaturesSectionStyle from '../styles/aiFeaturesSectionStyle';

const AIFeaturesSection: React.FC = () => {
	const aiFeatures = [
		{
			id: 1,
			title: "AI-Powered Virtual CISO",
			description: "Leverage intelligent AI guidance to streamline compliance strategy and proactively mitigate potential risks."
		},
		{
			id: 2,
			title: "Intelligent Cloud Security Management",
			description: "Automatically detect, assess, and remediate cloud security vulnerabilities while ensuring continuous compliance with industry standards."
		},
		{
			id: 3,
			title: "AI-Powered Security Questionnaire Answering",
			description: "Automate responses to security questionnaires with pre-built templates and AI assistance."
		},
		{
			id: 4,
			title: "Comprehensive Asset & Access Intelligence",
			description: "Dynamically manage and optimize asset lifecycles and access controls to create a robust, adaptive security ecosystem."
		}
	];

	// AI visualization nodes
	const nodePositions = [
		{ x: 140, y: 40 },
		{ x: 200, y: 120 },
		{ x: 140, y: 200 },
		{ x: 40, y: 200 },
		{ x: 0, y: 120 },
		{ x: 40, y: 40 },
	];

	return (
		<Box sx={aiFeaturesSectionStyle.section}>
			<Box sx={aiFeaturesSectionStyle.backgroundGradient} />

			<Container sx={aiFeaturesSectionStyle.container}>
				<Typography variant="h2" sx={aiFeaturesSectionStyle.title}>
					Beyond Traditional GRC: AI-Powered Innovation
				</Typography>

				<Box sx={aiFeaturesSectionStyle.content}>
					<Box sx={aiFeaturesSectionStyle.featuresList}>
						{aiFeatures.map((feature) => (
							<Box key={feature.id} sx={aiFeaturesSectionStyle.featureItem}>
								<Box sx={aiFeaturesSectionStyle.featureNumberContainer}>
									<Typography sx={aiFeaturesSectionStyle.featureNumber}>
										{feature.id}
									</Typography>
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

					<Box sx={aiFeaturesSectionStyle.visualizationContainer}>
						<Box sx={aiFeaturesSectionStyle.aiVisualization}>
							{/* AI Core */}
							<Box sx={aiFeaturesSectionStyle.aiCore}>
								<Typography sx={aiFeaturesSectionStyle.aiCoreText}>AI</Typography>
							</Box>

							{/* Nodes and Connections */}
							<Box sx={aiFeaturesSectionStyle.aiNodeContainer}>
								{nodePositions.map((node, index) => (
									<React.Fragment key={index}>
										<Box
											sx={{
												...aiFeaturesSectionStyle.aiNode,
												top: `${node.y}px`,
												left: `${node.x}px`,
											}}
										/>
										<Box
											sx={{
												...aiFeaturesSectionStyle.aiConnection,
												top: '50%',
												left: '50%',
												width: '120px',
												transform: `rotate(${index * 60}deg)`,
											}}
										/>
									</React.Fragment>
								))}
							</Box>

							{/* Pulsing Effect */}
							<Box sx={aiFeaturesSectionStyle.aiPulse} />

							<Typography sx={aiFeaturesSectionStyle.aiLabel}>
								AI-Powered Security and Compliance
							</Typography>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default AIFeaturesSection;