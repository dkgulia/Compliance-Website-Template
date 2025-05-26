'use client';
import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import platformWalkthroughStyle from '../styles/platformWalkthroughStyle';
import { cmmcData } from '../constants/cmmcData';
import Image from 'next/image';
import screenshot1 from '../images/cmmcImage1.png';
import screenshot2 from '../images/cmmcimage2.png';
import screenshot3 from '../images/cmmcImage1.png';

const CmmcPlatformWalkthrough: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const walkthroughSection = cmmcData.sections.find(
		(section) => section.Sno === '3' && section.blockType === 'Screenshots'
	);

	if (!walkthroughSection) return null;

	const slideCount = 3;

	const screenshots = [
		{
			image: screenshot1,
			caption: 'Access CMMC compliance dashboard in real-time',
		},
		{
			image: screenshot2,
			caption: 'Map requirements to controls and evidence automatically',
		},
		{
			image: screenshot3,
			caption: 'Generate reports and track progress across frameworks',
		},
	];

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
		<Box sx={platformWalkthroughStyle.box}>
			<Box sx={platformWalkthroughStyle.container}>
				<Box sx={platformWalkthroughStyle.headerBox}>
					<Typography variant="h4" component="h2" sx={platformWalkthroughStyle.heading}>
						{walkthroughSection.content.title}
					</Typography>

					{walkthroughSection.content.subtitle && (
						<Typography variant="body1" sx={platformWalkthroughStyle.subheading}>
							{walkthroughSection.content.subtitle}
						</Typography>
					)}
				</Box>

				<Box sx={platformWalkthroughStyle.carouselContainer}>
					<Box sx={platformWalkthroughStyle.navigationArrows}>
						<IconButton onClick={handlePrev} sx={platformWalkthroughStyle.navArrow}>
							<ArrowBackIcon />
						</IconButton>

						<Box sx={platformWalkthroughStyle.slidePrevNext}>
							<Typography variant="body2" sx={platformWalkthroughStyle.slideCountText}>
								{currentSlide + 1} / {slideCount}
							</Typography>
						</Box>

						<IconButton onClick={handleNext} sx={platformWalkthroughStyle.navArrow}>
							<ArrowForwardIcon />
						</IconButton>
					</Box>

					<Box sx={platformWalkthroughStyle.slideContent}>
						{screenshots.map((screenshot, index) => (
							<Box
								key={index}
								sx={{
									...platformWalkthroughStyle.slide,
									display: currentSlide === index ? 'flex' : 'none',
									flexDirection: 'column',
									alignItems: 'center',
									gap: 2,
								}}
							>
								<Image
									src={screenshot.image}
									alt={screenshot.caption}
									width={500}
									height={450}
									style={{
										borderRadius: '0.75rem',
										objectFit: 'cover',
										border: '1px solid #2d2d2d',
										boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
										width: '50%',
										maxWidth: '100%',
										height: 'auto',
									}}
								/>

								<Box sx={platformWalkthroughStyle.captionBox}>
									<Typography variant="h6" sx={platformWalkthroughStyle.caption}>
										{screenshot.caption}
									</Typography>
								</Box>
							</Box>
						))}
					</Box>

					<Box sx={platformWalkthroughStyle.dotsContainer}>
						{screenshots.map((_, index) => (
							<Box
								key={index}
								onClick={() => handleDotClick(index)}
								sx={{
									...platformWalkthroughStyle.dot,
									...(currentSlide === index && {
										backgroundColor: 'rgba(16, 185, 129, 0.7)',
										transform: 'scale(1.2)',
									}),
								}}
							/>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CmmcPlatformWalkthrough;
