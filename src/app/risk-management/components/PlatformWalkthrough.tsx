'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForwardIos as ArrowForwardIosIcon, ArrowBackIos as ArrowBackIosIcon } from '@mui/icons-material';
import platformWalkthroughStyle from '../styles/platformWalkthroughStyle';
import { riskManagementData } from '../constants/riskManagementData';
import Image from 'next/image';
import screenshot1 from '../images/risk1.png';
import screenshot2 from '../images/risk2.png';
import screenshot3 from '../images/risk3.png';
import screenshot4 from '../images/risk4.png';
import screenshot5 from '../images/risk-step-1.png';

const screenshotImages = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5];

const PlatformWalkthrough: React.FC = () => {
   const [currentSlide, setCurrentSlide] = useState(0);

   const carouselContent = riskManagementData.sections.find(
   	(section) => section.Sno === '3' && section.blockType === 'Screenshots'
   );

   if (!carouselContent || !carouselContent.content.screenshots || carouselContent.content.screenshots.length === 0) {
   	return null;
   }

   const screenshots = carouselContent.content.screenshots;
   const slideCount = screenshots.length;

   const nextSlide = () => {
   	setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
   };

   const prevSlide = () => {
   	setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
   };

   const goToSlide = (index: number) => {
   	setCurrentSlide(index);
   };

   return (
   	<Box sx={platformWalkthroughStyle.section}>
   		<Box sx={platformWalkthroughStyle.headerContainer}>
   			
   			<Typography sx={platformWalkthroughStyle.title}>
   				{carouselContent.content.title}
   			</Typography>
   			{carouselContent.content.subtitle && (
   				<Typography sx={platformWalkthroughStyle.subtitle}>
   					{carouselContent.content.subtitle}
   				</Typography>
   			)}
   		</Box>

   		<Box sx={platformWalkthroughStyle.carouselContainer}>
   			<Box sx={platformWalkthroughStyle.carouselWrapper}>
   				<IconButton
   					onClick={prevSlide}
   					sx={platformWalkthroughStyle.arrowButton}
   				>
   					<ArrowBackIosIcon />
   				</IconButton>

   				<Box sx={platformWalkthroughStyle.slideContainer}>
   					{screenshots.map((screenshot, index) => (
   						<Box
   							key={index}
   							sx={{
   								...platformWalkthroughStyle.slide,
   								display: currentSlide === index ? 'flex' : 'none',
   							}}
   						>
   							<Box sx={platformWalkthroughStyle.imageBox}>
   								{index < screenshotImages.length ? (
   									<Image
   										src={screenshotImages[index]}
   										alt={screenshot.caption || `Screenshot ${index + 1}`}
   										width={600}
   										height={400}
   										style={platformWalkthroughStyle.image}
   										priority={index === 0}
   									/>
   								) : (
   									<Box sx={platformWalkthroughStyle.imagePlaceholder}>
   										<Typography variant="body2" color="textSecondary">
   											{screenshot.imagePrompt}
   										</Typography>
   									</Box>
   								)}
   							</Box>
   							<Box sx={platformWalkthroughStyle.contentBox}>
   								<Typography sx={platformWalkthroughStyle.caption}>
   									{screenshot.caption}
   								</Typography>
   							</Box>
   						</Box>
   					))}
   				</Box>

   				<IconButton
   					onClick={nextSlide}
   					sx={platformWalkthroughStyle.arrowButton}
   				>
   					<ArrowForwardIosIcon />
   				</IconButton>
   			</Box>

   			<Box sx={platformWalkthroughStyle.navigationDots}>
   				{screenshots.map((_, index) => (
   					<Box
   						key={index}
   						onClick={() => goToSlide(index)}
   						sx={{
   							...platformWalkthroughStyle.dot,
   							...(currentSlide === index ? platformWalkthroughStyle.activeDot : {}),
   						}}
   					/>
   				))}
   			</Box>
   		</Box>
   	</Box>
   );
};

export default PlatformWalkthrough;