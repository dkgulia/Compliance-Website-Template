'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import aboutUsStyle from '../components/styles/aboutUsStyle';
import aboutUsData from '../constants/aboutUsData';

const AboutUsComponent = () => {
	const { hero, mission, vision, values, differentiators, story, customers, impact } = aboutUsData;

	return (
		<Box sx={aboutUsStyle.section}>
		

			<Container sx={aboutUsStyle.container}>
				<Box sx={aboutUsStyle.heroContent}>
					<Typography variant="h1" sx={aboutUsStyle.mainTitle}>
						About{' '}
						<Box component="span" sx={aboutUsStyle.highlightText}>
							ComplianceHub
						</Box>
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.subtitle}>
						{hero.subtitle}
					</Typography>
				</Box>
			</Container>


			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{mission.title}
					</Typography>
					{mission.paragraphs.map((paragraph, index) => (
						<Typography key={`mission-p-${index}`} variant="body1" sx={aboutUsStyle.sectionText}>
							{paragraph}
						</Typography>
					))}
				</Box>
			</Container>


			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{vision.title}
					</Typography>
					{vision.paragraphs.map((paragraph, index) => (
						<Typography key={`vision-p-${index}`} variant="body1" sx={aboutUsStyle.sectionText}>
							{paragraph}
						</Typography>
					))}
				</Box>
			</Container>

			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{values.title}
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.sectionDescription}>
						{values.description}
					</Typography>

					<Grid container spacing={4} sx={aboutUsStyle.valuesGrid}>
						{values.items.map((value, index) => {
							const IconComponent = value.icon;
							return (
								<Grid size={{ xs: 12, sm: 6 }} key={`value-${index}`}>
									<Box sx={aboutUsStyle.valueCard}>
										<Box sx={aboutUsStyle.valueIconContainer}>
											<IconComponent sx={aboutUsStyle.valueIcon} />
										</Box>
										<Typography variant="h6" sx={aboutUsStyle.valueTitle}>
											{value.title}
										</Typography>
										<Typography variant="body2" sx={aboutUsStyle.valueDescription}>
											{value.description}
										</Typography>
									</Box>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Container>


			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{differentiators.title}
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.sectionDescription}>
						{differentiators.description}
					</Typography>

					<Grid container spacing={4} sx={aboutUsStyle.valuesGrid}>
						{differentiators.items.map((item, index) => {
							const IconComponent = item.icon;
							return (
								<Grid size={{ xs: 12, sm: 6 }} key={`diff-${index}`}>
									<Box sx={aboutUsStyle.valueCard}>
										<Box sx={aboutUsStyle.valueIconContainer}>
											<IconComponent sx={aboutUsStyle.valueIcon} />
										</Box>
										<Typography variant="h6" sx={aboutUsStyle.valueTitle}>
											{item.title}
										</Typography>
										<Typography variant="body2" sx={aboutUsStyle.valueDescription}>
											{item.description}
										</Typography>
									</Box>
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</Container>


			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{story.title}
					</Typography>
					{story.paragraphs.map((paragraph, index) => (
						<Typography key={`story-p-${index}`} variant="body1" sx={aboutUsStyle.storyText}>
							{paragraph}
						</Typography>
					))}
				</Box>
			</Container>

			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{customers.title}
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.sectionDescription}>
						{customers.description}
					</Typography>

					<Box sx={aboutUsStyle.customersList}>
						{customers.items.map((item, index) => (
							<Typography key={`customer-${index}`} variant="body1" sx={aboutUsStyle.customerItem}>
								• {item}
							</Typography>
						))}
					</Box>

					<Typography variant="body1" sx={aboutUsStyle.sectionText}>
						{customers.paragraph}
					</Typography>
				</Box>
			</Container>


			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						{impact.title}
					</Typography>
					{impact.paragraphs.map((paragraph, index) => (
						<Typography key={`impact-p-${index}`} variant="body1" sx={aboutUsStyle.sectionText}>
							{paragraph}
						</Typography>
					))}
				</Box>
			</Container>

		</Box>
	);
};

export default AboutUsComponent;
