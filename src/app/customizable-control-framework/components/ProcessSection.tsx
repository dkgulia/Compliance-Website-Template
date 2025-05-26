'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import processSectionStyle from '../styles/processSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';
import Image from 'next/image';
import step1Image from '../images/process1.png';
import step2Image from '../images/process3.png';
import step3Image from '../images/process2.png';
import step4Image from '../images/process4.png';


const stepImages = [step1Image, step2Image, step3Image, step4Image];

const ProcessSection: React.FC = () => {
	const { process } = controlFrameworkData.sections;

	return (
		<Box component="section" sx={processSectionStyle.section}>
			<Container maxWidth="lg" sx={processSectionStyle.container}>
				<Box sx={processSectionStyle.header}>
					<Typography variant="h2" sx={processSectionStyle.title}>
						{process.title}
					</Typography>

					{process.subtitle && <Typography sx={processSectionStyle.subtitle}>{process.subtitle}</Typography>}
				</Box>

				<Box sx={processSectionStyle.stepsContainer}>
					{process.steps.map((step, index) => (
						<React.Fragment key={index}>
							<Box
								sx={{
									...processSectionStyle.stepWrapper,
									...(index % 2 !== 0 ? processSectionStyle.stepWrapperAlt : {}),
								}}
							>
								<Box sx={processSectionStyle.stepContent}>
									<Typography sx={processSectionStyle.stepTitle}>
										<Box component="span" sx={processSectionStyle.stepNumber}>
											{index + 1}.
										</Box>
										{step.title}
									</Typography>

									<Typography sx={processSectionStyle.stepDescription}>{step.description}</Typography>
								</Box>

								<Box sx={processSectionStyle.imageContainer}>
									<Box sx={processSectionStyle.imageWrapper}>
										<Image
											src={stepImages[index]}
											alt={step.imageAlt || `Step ${index + 1}: ${step.title}`}
											fill
											style={processSectionStyle.stepImage}
											priority={index < 2} // Prioritizzze loading the first two images
										/>
									</Box>
								</Box>
							</Box>
						</React.Fragment>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default ProcessSection;