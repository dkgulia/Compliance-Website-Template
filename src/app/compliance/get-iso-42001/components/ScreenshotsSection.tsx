'use client';
import React, { useState } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import Image from 'next/image';
import screenshotsSectionStyle from '../styles/screenshotsSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';
import screenshot1 from '../images/step1-iso42001.png';
import screenshot2 from '../images/step2-iso42001.png';
import screenshot3 from '../images/step3-iso42001.png';
import screenshot4 from '../images/step4-iso42001.png';
import screenshot5 from '../images/step1-iso42001.png';

const screenshotImages = [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5];

const ScreenshotsSection: React.FC = () => {
	const { screenshots } = iso42001Data.sections;
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideCount = screenshots.items.length;

	const handleNext = () => {
		setCurrentSlide((prev) => (prev === slideCount - 1 ? 0 : prev + 1));
	};

	const handlePrev = () => {
		setCurrentSlide((prev) => (prev === 0 ? slideCount - 1 : prev - 1));
	};

	const handleDotClick = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<Box sx={screenshotsSectionStyle.box}>
			<Container maxWidth="lg">
				<Box sx={screenshotsSectionStyle.headerBox}>
					<Typography variant="h4" component="h2" sx={screenshotsSectionStyle.heading}>
						{screenshots.title}
					</Typography>
					{screenshots.subtitle && (
						<Typography variant="body1" sx={screenshotsSectionStyle.subheading}>
							{screenshots.subtitle}
						</Typography>
					)}
				</Box>

				<Box sx={screenshotsSectionStyle.carouselContainer}>
					<Box sx={screenshotsSectionStyle.navigationArrows}>
						<IconButton onClick={handlePrev} sx={screenshotsSectionStyle.navArrow}>
							<ArrowBackIcon />
						</IconButton>

						<Box sx={screenshotsSectionStyle.slidePrevNext}>
							<Typography variant="body2" sx={screenshotsSectionStyle.slideCountText}>
								{currentSlide + 1} / {slideCount}
							</Typography>
						</Box>

						<IconButton onClick={handleNext} sx={screenshotsSectionStyle.navArrow}>
							<ArrowForwardIcon />
						</IconButton>
					</Box>

					<Box sx={screenshotsSectionStyle.slideContent}>
						{screenshots.items.map((screenshot, index) => (
							<Box
								key={index}
								sx={currentSlide === index ? screenshotsSectionStyle.slideVisible : screenshotsSectionStyle.slideHidden}
							>
								<Box sx={screenshotsSectionStyle.imageContainer}>
									<Image
										src={screenshotImages[index] || '/api/placeholder/800/600'}
										alt={screenshot.caption || `Screenshot ${index + 1}`}
										width={500}
										height={500}
										style={screenshotsSectionStyle.imageStyle}
										priority={index === 0}
									/>
								</Box>

								<Box sx={screenshotsSectionStyle.captionBox}>
									<Typography variant="h6" sx={screenshotsSectionStyle.caption}>
										{screenshot.caption}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>

					<Box sx={screenshotsSectionStyle.dotsContainer}>
						{screenshots.items.map((_, index) => (
							<Box
								key={index}
								onClick={() => handleDotClick(index)}
								sx={currentSlide === index ? screenshotsSectionStyle.dotActive : screenshotsSectionStyle.dot}
							/>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default ScreenshotsSection;
