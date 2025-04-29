'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import aboutUsStyle from '../components/styles/aboutUsStyle';

const AboutUsComponent = () => {
	const values = [
		{
			title: 'Trust',
			description:
				'We build lasting relationships based on transparency and integrity, ensuring our clients can rely on us for honest guidance.',
			icon: <ShieldIcon sx={aboutUsStyle.valueIcon} />,
		},
		{
			title: 'Excellence',
			description:
				'We strive for excellence in everything we do, from our platform to our customer service, setting the highest standards in the industry.',
			icon: <VerifiedUserIcon sx={aboutUsStyle.valueIcon} />,
		},
		{
			title: 'Innovation',
			description:
				'We continuously improve our solutions to address evolving compliance challenges with creative, efficient approaches.',
			icon: <BusinessIcon sx={aboutUsStyle.valueIcon} />,
		},
		{
			title: 'Client Success',
			description:
				"Our client's success is our success. We're committed to helping organizations achieve and maintain compliance with minimal disruption.",
			icon: <GroupsIcon sx={aboutUsStyle.valueIcon} />,
		},
	];

	return (
		<Box sx={aboutUsStyle.section}>
			<Box sx={aboutUsStyle.backgroundGradient} />

			<Container sx={aboutUsStyle.container}>
				<Box sx={aboutUsStyle.heroContent}>
					<Typography variant="h1" sx={aboutUsStyle.mainTitle}>
						About{' '}
						<Box component="span" sx={aboutUsStyle.highlightText}>
							Hexafort
						</Box>
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.subtitle}>
						Simplifying compliance for businesses in a complex regulatory landscape
					</Typography>
				</Box>
			</Container>

			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						Our Mission
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.sectionText}>
						At Hexafort, our mission is to simplify the complex world of regulatory compliance, making it accessible and
						manageable for businesses of all sizes. We believe that robust compliance shouldn't be a burden but a
						strategic advantage that builds trust and enables growth.
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.sectionText}>
						Founded in 2021, we've helped hundreds of organizations across various industries achieve and maintain
						compliance with standards including ISO 27001, SOC 2, GDPR, HIPAA, and PCI DSS. Our innovative platform
						combines expert guidance with powerful automation to streamline compliance processes, reducing the time,
						cost, and complexity typically associated with regulatory requirements.
					</Typography>
				</Box>
			</Container>

			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						Our Values
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.sectionDescription}>
						These core principles guide everything we do at Hexafort
					</Typography>

					<Grid container spacing={4} sx={aboutUsStyle.valuesGrid}>
						{values.map((value, index) => (
							<Grid size={{ xs: 12, sm: 6 }} key={index}>
								<Box sx={aboutUsStyle.valueCard}>
									<Box sx={aboutUsStyle.valueIconContainer}>{value.icon}</Box>
									<Typography variant="h6" sx={aboutUsStyle.valueTitle}>
										{value.title}
									</Typography>
									<Typography variant="body2" sx={aboutUsStyle.valueDescription}>
										{value.description}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Box>
			</Container>

			<Container sx={aboutUsStyle.sectionContainer}>
				<Box sx={aboutUsStyle.contentBox}>
					<Typography variant="h2" sx={aboutUsStyle.sectionTitle}>
						Our Story
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.storyText}>
						Hexafort was born from a simple observation: compliance was too complex, too time-consuming, and too
						expensive for most businesses. Our founders experienced firsthand the challenges of navigating regulatory
						requirements while working with startups and enterprises.
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.storyText}>
						They envisioned a better approach – one that combined expert knowledge with technology to make compliance
						accessible to all organizations, regardless of size or resources. Since our founding, we've grown from a
						small team with a big idea to an industry leader trusted by hundreds of companies worldwide.
					</Typography>
					<Typography variant="body1" sx={aboutUsStyle.storyText}>
						Today, we continue to innovate and expand our offerings while maintaining our core mission: transforming
						compliance from a burden into a competitive advantage for our clients.
					</Typography>
				</Box>
			</Container>

			<Box sx={aboutUsStyle.decorationContainer}>
				<Box sx={aboutUsStyle.circle1} />
				<Box sx={aboutUsStyle.circle2} />
				<Box sx={aboutUsStyle.glowDot1} />
				<Box sx={aboutUsStyle.glowDot2} />
				<Box sx={aboutUsStyle.glowLine1} />
				<Box sx={aboutUsStyle.glowLine2} />
			</Box>
		</Box>
	);
};

export default AboutUsComponent;
