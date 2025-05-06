'use client';
import React, { useRef } from 'react';
import { Box, Typography, Container, Card, IconButton } from '@mui/material';
import { FormatQuote, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testimonialsCarouselStyles from '../styles/testimonialStyle';
import { testimonials } from '../../constants/testimonalData';
import responsive from '../../constants/responsive';

const TestimonialsCarousel = () => {
	const carouselRef = useRef<any>(null);

	const goToPrevSlide = () => {
		if (carouselRef.current) {
			carouselRef.current.previous();
		}
	};

	const goToNextSlide = () => {
		if (carouselRef.current) {
			carouselRef.current.next();
		}
	};

	const CustomButtonGroup = ({ next, previous }: { next?: () => void; previous?: () => void }) => {
		return (
			<Box sx={testimonialsCarouselStyles.arrowButtons}>
				<IconButton onClick={goToPrevSlide} sx={testimonialsCarouselStyles.arrowButton}>
					<ArrowBackIos sx={{ fontSize: '1.5rem' }} />
				</IconButton>
				<IconButton onClick={goToNextSlide} sx={testimonialsCarouselStyles.arrowButton}>
					<ArrowForwardIos sx={{ fontSize: '1.5rem' }} />
				</IconButton>
			</Box>
		);
	};

	return (
		<Box sx={testimonialsCarouselStyles.box}>
			<Container sx={testimonialsCarouselStyles.container}>
				<Typography variant="h4" component="h4" sx={testimonialsCarouselStyles.sectionTitle}>
					What Our Clients Say
				</Typography>
				<Box sx={testimonialsCarouselStyles.carouselContainer}>
					<Carousel
						ref={carouselRef}
						responsive={responsive}
						infinite
						autoPlay={true}
						autoPlaySpeed={8000}
						arrows={false}
						renderButtonGroupOutside
						customButtonGroup={<CustomButtonGroup />}
						showDots={false}
					>
						{testimonials.map((testimonial) => (
							<Box key={testimonial.id} sx={testimonialsCarouselStyles.cardContainer}>
								<Card sx={testimonialsCarouselStyles.testimonialCard}>
									<Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
										<FormatQuote sx={testimonialsCarouselStyles.quoteIcon} />
										<Typography sx={testimonialsCarouselStyles.quoteText}>{testimonial.quote}</Typography>
										<Box sx={testimonialsCarouselStyles.authorContainer}>
											{testimonial.position && (
												<Typography sx={testimonialsCarouselStyles.authorName}>
													{testimonial.position}{testimonial.company ? `, ${testimonial.company}` : ''}
												</Typography>
											)}
											{!testimonial.position && testimonial.company && (
												<Typography sx={testimonialsCarouselStyles.authorName}>
													{testimonial.name}, {testimonial.company}
												</Typography>
											)}
											{!testimonial.position && !testimonial.company && (
												<Typography sx={testimonialsCarouselStyles.authorName}>
													{testimonial.name}
												</Typography>
											)}
										</Box>
									</Box>
								</Card>
							</Box>
						))}
					</Carousel>
				</Box>
			</Container>
		</Box>
	);
};

export default TestimonialsCarousel;