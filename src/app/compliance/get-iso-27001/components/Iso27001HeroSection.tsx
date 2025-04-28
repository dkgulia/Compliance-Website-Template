'use client';
import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import heroSectionStyle from '../styles/heroSectionStyle';
import { iso27001Data } from '../constants/iso27001Data';

const Iso27001HeroSection: React.FC = () => {
	const heroContent = iso27001Data.sections.find((section) => section.Sno === '1' && section.blockType === 'Hero');

	if (!heroContent) return null;

	return (
		<Box sx={heroSectionStyle.container}>
			<Container sx={heroSectionStyle.containerBox}>
				<Grid container spacing={3}>
					{/* Content Section */}
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={heroSectionStyle.contentBox}>
							<Typography sx={heroSectionStyle.tagline}>🔒 ISO 27001 made easy</Typography>

							<Typography variant="h2" sx={heroSectionStyle.title}>
								{heroContent.content.heroTitle}
							</Typography>

							{heroContent.content.heroDescription && (
								<Box sx={heroSectionStyle.listContainer}>
									{heroContent.content.heroDescription.map((desc: string, i: number) => (
										<Typography key={i} sx={heroSectionStyle.listItem}>
											{desc}
										</Typography>
									))}
								</Box>
							)}

							<Typography variant="h5" sx={heroSectionStyle.subtitle}>
								{heroContent.content.heroSubtitle}
							</Typography>

							<Button variant="contained" sx={heroSectionStyle.ctaButton} href="/compliance">
								Explore ISO 27001
							</Button>
						</Box>
					</Grid>
					<Grid size={{ xs: 12, md: 6 }}>
						<Box sx={heroSectionStyle.imageBox}>
							{heroContent.content.heroImage && (
								<Image
									src={heroContent.content.heroImage}
									alt="ISO 27001 Security"
									width={400}
									height={400}
									style={{
										objectFit: 'contain',
										borderRadius: '12px',
										maxWidth: '100%',
										height: 'auto',
									}}
								/>
							)}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Iso27001HeroSection;
