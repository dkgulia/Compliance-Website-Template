'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Button, Link } from '@mui/material';
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
import { PlatformFeature } from '../constants/hexafortSecureData';
import platformFeaturesStyle from '../styles/platformFeaturesStyle';

interface PlatformFeaturesCarouselProps {
	title: string;
	subtitle?: string;
	features: PlatformFeature[];
}

const PlatformFeaturesCarousel: React.FC<PlatformFeaturesCarouselProps> = ({ title, subtitle, features }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleCards, setVisibleCards] = useState(2);
	const trackRef = useRef<HTMLDivElement>(null);
	const [trackWidth, setTrackWidth] = useState(0);
	const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
	const getIcon = (iconName: string) => {
		switch (iconName) {
			case 'security':
				return <SecurityIcon />;
			case 'auto_awesome':
				return <AutoAwesomeIcon />;
			case 'shield':
				return <ShieldIcon />;
			case 'cloud':
				return <CloudIcon />;
			case 'business':
				return <BusinessIcon />;
			case 'bug_report':
				return <BugReportIcon />;
			case 'policy':
				return <PolicyIcon />;
			case 'verified':
				return <VerifiedIcon />;
			case 'link':
				return <LinkIcon />;
			case 'dashboard':
				return <DashboardIcon />;
			case 'people':
				return <PeopleIcon />;
			default:
				return <SecurityIcon />;
		}
	};

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 600) {
				setVisibleCards(1);
			} else {
				setVisibleCards(2);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		if (trackRef.current) {
			setTrackWidth(trackRef.current.scrollWidth);
		}
	}, [visibleCards]);

	const totalSlides = Math.max(0, features.length - visibleCards + 1);

	useEffect(() => {
		const startAutoplay = () => {
			autoplayTimerRef.current = setTimeout(() => {
				setCurrentIndex((prevIndex) => {
					if (prevIndex >= totalSlides - 1) {
						return 0;
					} else {
						return prevIndex + 1;
					}
				});

				startAutoplay();
			}, 5000);
		};

		startAutoplay();

		return () => {
			if (autoplayTimerRef.current) {
				clearTimeout(autoplayTimerRef.current);
			}
		};
	}, [totalSlides]);

	const resetAutoplayTimer = () => {
		if (autoplayTimerRef.current) {
			clearTimeout(autoplayTimerRef.current);
			autoplayTimerRef.current = setTimeout(() => {
				handleNext();
				resetAutoplayTimer();
			}, 5000);
		}
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
		resetAutoplayTimer();
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => {
			if (prevIndex >= totalSlides - 1) {
				return 0;
			}
			return prevIndex + 1;
		});
		resetAutoplayTimer();
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
		resetAutoplayTimer();
	};

	return (
		<Box component="section" sx={platformFeaturesStyle.section}>
			<Container sx={platformFeaturesStyle.container}>
				<Box sx={platformFeaturesStyle.heading}>
					<Typography variant="h2" sx={platformFeaturesStyle.title}>
						{title}
					</Typography>
					{subtitle && (
						<Typography variant="subtitle1" sx={platformFeaturesStyle.subtitle}>
							{subtitle}
						</Typography>
					)}
				</Box>

				<Box sx={platformFeaturesStyle.carouselContainer}>
					<Button
						onClick={handlePrev}
						disabled={currentIndex === 0}
						sx={{
							...platformFeaturesStyle.navigationButton,
							...platformFeaturesStyle.prevButton,
						}}
						aria-label="Previous slide"
					>
						<ArrowBackIosNewIcon fontSize="small" />
					</Button>

					<Box sx={platformFeaturesStyle.carouselWrapper}>
						<Box
							ref={trackRef}
							sx={{
								...platformFeaturesStyle.carouselTrack,
								transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
							}}
						>
							{features.map((feature, index) => (
								<Box key={index} sx={platformFeaturesStyle.card}>
									<Box sx={platformFeaturesStyle.iconWrapper}>{getIcon(feature.icon)}</Box>
									<Typography variant="h6" sx={platformFeaturesStyle.cardTitle}>
										{feature.title}
										{feature.isNew && (
											<Box component="span" sx={platformFeaturesStyle.newBadge}>
												NEW
											</Box>
										)}
									</Typography>
									<Typography sx={platformFeaturesStyle.cardDescription}>{feature.description}</Typography>
									<Link
										color="primary"
										href={feature.href}
										component={NextLink}
										sx={platformFeaturesStyle.learnMoreLink}
									>
										<Typography variant="body2">{'Learn more ->'}</Typography>
									</Link>
								</Box>
							))}
						</Box>
					</Box>

					<Button
						onClick={handleNext}
						disabled={currentIndex >= totalSlides - 1}
						sx={{
							...platformFeaturesStyle.navigationButton,
							...platformFeaturesStyle.nextButton,
						}}
						aria-label="Next slide"
					>
						<ArrowForwardIosIcon fontSize="small" />
					</Button>
				</Box>

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
			</Container>
		</Box>
	);
};

export default PlatformFeaturesCarousel;
