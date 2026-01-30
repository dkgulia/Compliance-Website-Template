'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Link } from '@mui/material';
import NextLink from 'next/link';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ShieldIcon from '@mui/icons-material/Shield';
import CloudIcon from '@mui/icons-material/Cloud';
import BusinessIcon from '@mui/icons-material/Business';
import BugReportIcon from '@mui/icons-material/BugReport';
import PolicyIcon from '@mui/icons-material/Policy';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkIcon from '@mui/icons-material/Link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import Button from '../../Button/ComplianceHubButton';
import { PlatformFeature } from '../constants/platformData';
import platformFeaturesStyle from '../styles/platformFeaturesStyle';

interface PlatformFeaturesCarouselProps {
   title: string;
   subtitle?: string;
   features: PlatformFeature[];
}

const PlatformFeaturesCarousel: React.FC<PlatformFeaturesCarouselProps> = ({ title, subtitle, features }) => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [visibleCards, setVisibleCards] = useState(1);
   const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

   // Filter out empty/blank features
   const validFeatures = features?.filter(feature =>
   	feature &&
   	feature.title &&
   	feature.title.trim() !== '' &&
   	feature.description &&
   	feature.description.trim() !== ''
   ) || [];

   const getIcon = (iconName: string) => {
   	const iconProps = { sx: platformFeaturesStyle.icon };
   	switch (iconName) {
   		case 'security':
   			return <SecurityIcon {...iconProps} />;
   		case 'auto_awesome':
   			return <AutoAwesomeIcon {...iconProps} />;
   		case 'shield':
   			return <ShieldIcon {...iconProps} />;
   		case 'cloud':
   			return <CloudIcon {...iconProps} />;
   		case 'business':
   			return <BusinessIcon {...iconProps} />;
   		case 'bug_report':
   			return <BugReportIcon {...iconProps} />;
   		case 'policy':
   			return <PolicyIcon {...iconProps} />;
   		case 'verified':
   			return <VerifiedIcon {...iconProps} />;
   		case 'link':
   			return <LinkIcon {...iconProps} />;
   		case 'dashboard':
   			return <DashboardIcon {...iconProps} />;
   		case 'people':
   			return <PeopleIcon {...iconProps} />;
   		default:
   			return <SecurityIcon {...iconProps} />;
   	}
   };

   useEffect(() => {
   	const handleResize = () => {
   		const width = window.innerWidth;
   		if (width < 768) {
   			setVisibleCards(1); // Mobile: 1 card
   		} else if (width < 1200) {
   			setVisibleCards(2); // Tablet: 2 cards
   		} else {
   			setVisibleCards(3); // Desktop: 3 cards
   		}
   	};

   	handleResize();
   	window.addEventListener('resize', handleResize);

   	return () => {
   		window.removeEventListener('resize', handleResize);
   	};
   }, []);

   // Reset currentIndex when visibleCards changes
   useEffect(() => {
   	setCurrentIndex(0);
   }, [visibleCards]);

   // Ensure we have valid features to work with
   if (!validFeatures || validFeatures.length === 0) {
   	return (
   		<Box sx={platformFeaturesStyle.section}>
   			<Box sx={platformFeaturesStyle.headerContainer}>
   				<Typography sx={platformFeaturesStyle.tagline}>
   					PLATFORM FEATURES
   				</Typography>
   				<Typography sx={platformFeaturesStyle.title}>
   					{title}
   				</Typography>
   				{subtitle && (
   					<Typography sx={platformFeaturesStyle.subtitle}>
   						{subtitle}
   					</Typography>
   				)}
   			</Box>
   			<Typography sx={{ color: 'white', textAlign: 'center', fontSize: '1rem' }}>
   				Loading features...
   			</Typography>
   		</Box>
   	);
   }

   // Calculate total slides based on visible cards
   const totalSlides = Math.max(1, validFeatures.length - visibleCards + 1);
   const maxIndex = totalSlides - 1;

   const handlePrev = () => {
   	setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
   };

   const handleNext = () => {
   	setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
   };

   const goToSlide = (index: number) => {
   	setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
   };

   // Calculate the transform percentage
   const getTransformValue = () => {
   	if (visibleCards === 1) {
   		// For mobile (1 card visible), move by 100% for each slide
   		return currentIndex * 100;
   	} else {
   		// For desktop/tablet, move by the percentage based on visible cards
   		return currentIndex * (100 / visibleCards);
   	}
   };

   return (
   	<Box sx={platformFeaturesStyle.section}>
   		<Box sx={platformFeaturesStyle.headerContainer}>
   			<Typography sx={platformFeaturesStyle.tagline}>
   				PLATFORM FEATURES
   			</Typography>

   			<Typography sx={platformFeaturesStyle.title}>
   				{title}
   			</Typography>

   			{subtitle && (
   				<Typography sx={platformFeaturesStyle.subtitle}>
   					{subtitle}
   				</Typography>
   			)}
   		</Box>

   		<Box sx={platformFeaturesStyle.carouselContainer}>
   			<Button
   				onClick={handlePrev}
   				disabled={currentIndex === 0}
   				sx={platformFeaturesStyle.navigationButton}
   				aria-label="Previous slide"
   			>
   				<ArrowBackIosNewIcon fontSize="small" />
   			</Button>

   			<Box sx={platformFeaturesStyle.carouselWrapper}>
   				<Box
   					sx={{
   						...platformFeaturesStyle.carouselTrack,
   						transform: `translateX(-${getTransformValue()}%)`,
   					}}
   				>
   					{validFeatures.map((feature, index) => (
   						<Box
   							key={index}
   							sx={{
   								...platformFeaturesStyle.card,
   								// Set card width based on visible cards
   								width: visibleCards === 1
   									? '100%'
   									: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 1.5 / visibleCards}rem)`,
   								flexShrink: 0,
   							}}
   						>
   							<Box sx={platformFeaturesStyle.iconContainer}>
   								{getIcon(feature.icon)}
   							</Box>

   							<Typography sx={platformFeaturesStyle.cardTitle}>
   								{feature.title}
   								{feature.isNew && (
   									<Box component="span" sx={platformFeaturesStyle.newBadge}>
   										NEW
   									</Box>
   								)}
   							</Typography>

   							<Typography sx={platformFeaturesStyle.cardDescription}>
   								{feature.description}
   							</Typography>

   							<Link
   								color="primary"
   								href={feature.href}
   								component={NextLink}
   								sx={platformFeaturesStyle.learnMoreLink}
   							>
   								<Typography variant="body2">{'Learn more →'}</Typography>
   							</Link>
   						</Box>
   					))}
   				</Box>
   			</Box>

   			<Button
   				
   				onClick={handleNext}
   				disabled={currentIndex >= maxIndex}
   				sx={platformFeaturesStyle.navigationButton}
   				aria-label="Next slide"
   			>
   				<ArrowForwardIosIcon fontSize="small" />
   			</Button>
   		</Box>

   		{totalSlides > 1 && (
   			<Box sx={platformFeaturesStyle.indicatorsContainer}>
   				{Array.from({ length: totalSlides }).map((_, index) => (
   					<Box
   						key={index}
   						onClick={() => goToSlide(index)}
   						sx={{
   							...platformFeaturesStyle.indicator,
   							...(index === currentIndex ? platformFeaturesStyle.activeIndicator : {}),
   						}}
   					/>
   				))}
   			</Box>
   		)}
   	</Box>
   );
};

export default PlatformFeaturesCarousel;