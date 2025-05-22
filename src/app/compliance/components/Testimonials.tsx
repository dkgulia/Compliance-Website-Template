'use client';
import React, { useRef, useState } from 'react';
import { Box, Typography, Container, Card, IconButton, Avatar, Dialog, DialogContent, DialogTitle, Button } from '@mui/material';
import { FormatQuote, ArrowBackIos, ArrowForwardIos, Close } from '@mui/icons-material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testimonialsCarouselStyles from '../styles/testimonialStyle';
import { testimonials } from '../../constants/testimonalData';
import responsive from '../../constants/responsive';

const TestimonialsCarousel = () => {
	const carouselRef = useRef<any>(null);
	const [selectedTestimonial, setSelectedTestimonial] = useState<any>(null);

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

	const openModal = (testimonial: any) => {
		setSelectedTestimonial(testimonial);
	};

	const closeModal = () => {
		setSelectedTestimonial(null);
	};

	const truncateText = (text: string, maxLength: number = 200) => {
		if (text.length <= maxLength) return text;
		const truncated = text.substring(0, maxLength);
		const lastSpace = truncated.lastIndexOf(' ');
		return truncated.substring(0, lastSpace) + '...';
	};

	const getInitials = (name: string) => {
		return name.split(' ').map(word => word[0]).join('').toUpperCase();
	};

	const CustomButtonGroup = ({ next, previous }: { next?: () => void; previous?: () => void }) => {
		return (
			<Box sx={testimonialsCarouselStyles.arrowButtons}>
				<IconButton onClick={goToPrevSlide} sx={testimonialsCarouselStyles.arrowButton}>
					<ArrowBackIos sx={testimonialsCarouselStyles.arrowIcon} />
				</IconButton>
				<IconButton onClick={goToNextSlide} sx={testimonialsCarouselStyles.arrowButton}>
					<ArrowForwardIos sx={testimonialsCarouselStyles.arrowIcon} />
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
						{testimonials.map((testimonial) => {
							const shouldShowReadMore = testimonial.quote.length > 200;
							const displayText = truncateText(testimonial.quote);

							return (
								<Box key={testimonial.id} sx={testimonialsCarouselStyles.cardContainer}>
									<Card sx={testimonialsCarouselStyles.testimonialCard}>
										<Box sx={testimonialsCarouselStyles.cardContent}>
											{/* Content Section */}
											<Box sx={testimonialsCarouselStyles.contentSection}>
												<FormatQuote sx={testimonialsCarouselStyles.quoteIcon} />

												<Box sx={testimonialsCarouselStyles.quoteContainer}>
													<Typography sx={testimonialsCarouselStyles.quoteText}>
														{displayText}
													</Typography>
													{shouldShowReadMore && (
														<Button
															onClick={() => openModal(testimonial)}
															sx={testimonialsCarouselStyles.readMoreButton}
														>
															Read full review
														</Button>
													)}
												</Box>
											</Box>

											{/* Author Section with Teal Background */}
											<Box sx={testimonialsCarouselStyles.authorContainer}>
												<Avatar
													src={testimonial.image || "/api/placeholder/50/50"}
													sx={testimonialsCarouselStyles.avatar}
												>
													{!testimonial.image && getInitials(testimonial.name)}
												</Avatar>
												<Box sx={testimonialsCarouselStyles.authorInfo}>
													<Typography sx={testimonialsCarouselStyles.authorName}>
														{testimonial.name}
													</Typography>
													{testimonial.position && (
														<Typography sx={testimonialsCarouselStyles.authorPosition}>
															{testimonial.position}
														</Typography>
													)}
													{testimonial.company && (
														<Typography sx={testimonialsCarouselStyles.authorCompany}>
															{testimonial.company}
														</Typography>
													)}
												</Box>
											</Box>
										</Box>
									</Card>
								</Box>
							);
						})}
					</Carousel>
				</Box>

				{/* Modal for full testimonial */}
				<Dialog
					open={!!selectedTestimonial}
					onClose={closeModal}
					maxWidth="sm"
					fullWidth
					PaperProps={{
						sx: testimonialsCarouselStyles.modalPaper
					}}
				>
					{selectedTestimonial && (
						<>
							<DialogTitle sx={testimonialsCarouselStyles.modalTitle}>
								<Typography variant="h6" sx={testimonialsCarouselStyles.modalTitleText}>
									Client Testimonial
								</Typography>
								<IconButton onClick={closeModal} sx={testimonialsCarouselStyles.modalCloseButton}>
									<Close />
								</IconButton>
							</DialogTitle>
							<DialogContent sx={testimonialsCarouselStyles.modalContent}>
								<Box sx={testimonialsCarouselStyles.modalQuoteSection}>
									<FormatQuote sx={testimonialsCarouselStyles.modalQuoteIcon} />
									<Typography sx={testimonialsCarouselStyles.modalQuoteText}>
										{selectedTestimonial.quote}
									</Typography>
								</Box>
								<Box sx={testimonialsCarouselStyles.modalAuthorSection}>
													<Avatar
														src={selectedTestimonial.image || "/api/placeholder/60/60"}
														sx={testimonialsCarouselStyles.modalAvatar}
													>
										{!selectedTestimonial.image && getInitials(selectedTestimonial.name)}
									</Avatar>
									<Box>
										<Typography sx={testimonialsCarouselStyles.modalAuthorName}>
											{selectedTestimonial.name}
										</Typography>
										{selectedTestimonial.position && (
											<Typography sx={testimonialsCarouselStyles.modalAuthorPosition}>
												{selectedTestimonial.position}
											</Typography>
										)}
										{selectedTestimonial.company && (
											<Typography sx={testimonialsCarouselStyles.modalAuthorCompany}>
												{selectedTestimonial.company}
											</Typography>
										)}
									</Box>
								</Box>
							</DialogContent>
						</>
					)}
				</Dialog>
			</Container>
		</Box>
	);
};

export default TestimonialsCarousel;