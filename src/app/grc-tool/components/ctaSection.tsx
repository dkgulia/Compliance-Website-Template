'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ctaSectionStyle from '../styles/ctaSectionStyle';

const CTASection: React.FC = () => {
	const formFeatures = [
		"No credit card required",
		"Full-featured 14-day trial",
		"Easy setup, cancel anytime"
	];

	return (
		<Box sx={ctaSectionStyle.section}>
			<Box sx={ctaSectionStyle.backgroundGradient} />

			<Box sx={ctaSectionStyle.shapesContainer}>
				<Box sx={ctaSectionStyle.shape1} />
				<Box sx={ctaSectionStyle.shape2} />
			</Box>

			<Container sx={ctaSectionStyle.container}>
				<Box sx={ctaSectionStyle.content}>
					<Box sx={ctaSectionStyle.textContent}>
						<Typography variant="h2" sx={ctaSectionStyle.title}>
							Ready to Revolutionize Your GRC Strategy?
						</Typography>
						<Typography variant="body1" sx={ctaSectionStyle.description}>
							Join forward-thinking organizations that are transforming their security posture with HexaFort's AI-powered platform.
						</Typography>
						<Box sx={ctaSectionStyle.buttonContainer}>
							<Button variant="contained" sx={ctaSectionStyle.primaryButton}>
								Schedule a Demo
							</Button>
						</Box>
					</Box>

					<Box sx={ctaSectionStyle.formContainer}>
						<Typography variant="h5" sx={ctaSectionStyle.formTitle}>
							Get Started with HexaFort
						</Typography>
						<Typography variant="body2" sx={ctaSectionStyle.formDescription}>
							Fill out the form below to create your account and access the platform.
						</Typography>

						<form>
							<Box sx={ctaSectionStyle.inputContainer}>
								<label htmlFor="fullName" style={ctaSectionStyle.inputLabel as React.CSSProperties}>
									Full Name
								</label>
								<input
									type="text"
									id="fullName"
									placeholder="John Doe"
									style={ctaSectionStyle.input as React.CSSProperties}
								/>
							</Box>

							<Box sx={ctaSectionStyle.inputContainer}>
								<label htmlFor="workEmail" style={ctaSectionStyle.inputLabel as React.CSSProperties}>
									Work Email
								</label>
								<input
									type="email"
									id="workEmail"
									placeholder="john@company.com"
									style={ctaSectionStyle.input as React.CSSProperties}
								/>
							</Box>

							<Box sx={ctaSectionStyle.inputContainer}>
								<label htmlFor="company" style={ctaSectionStyle.inputLabel as React.CSSProperties}>
									Company
								</label>
								<input
									type="text"
									id="company"
									placeholder="Your Company, Inc."
									style={ctaSectionStyle.input as React.CSSProperties}
								/>
							</Box>

							<button type="submit" style={ctaSectionStyle.formButton as React.CSSProperties}>
								Get Started
							</button>
						</form>

						<Box sx={ctaSectionStyle.featuresContainer}>
							{formFeatures.map((feature, index) => (
								<Box key={index} sx={ctaSectionStyle.featureItem}>
									<CheckCircleOutlineIcon sx={ctaSectionStyle.featureIcon} />
									<Typography variant="body2" sx={ctaSectionStyle.featureText}>
										{feature}
									</Typography>
								</Box>
							))}
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default CTASection;