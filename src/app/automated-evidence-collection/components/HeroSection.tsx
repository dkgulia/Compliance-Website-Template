'use client';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import Button from '../../Button/HexaFortButton';
import heroSectionStyle from '../styles/heroSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';
import Image from 'next/image';
import evidenceCollectionDashboard from '../images/hero-image.png';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
	const theme = useTheme();
	const styles = heroSectionStyle(theme);
	const { hero } = evidenceCollectionData;
	const router = useRouter();
	const featureItems = [
		{
			icon: AccessTimeIcon,
			title: '1:1 session',
			text: 'Platform Implementation',
		},
		{
			icon: SpeedIcon,
			title: '10X',
			text: 'Fast Audits',
		},
		{
			icon: VerifiedIcon,
			title: '100%',
			text: 'Audit Success',
		},
	];

	const handleBookDemo = () => {
		router.push('/get-a-product-demo');
	};

	return (
		<Box component="section" sx={styles.container}>
			<Container sx={styles.containerBox}>
				<Box sx={styles.leftContentBox}>
					<Box sx={styles.tag}>
						<Typography variant="body2" sx={styles.tagText}>
							EVIDENCE COLLECTION
						</Typography>
					</Box>

					<Typography variant="h1" sx={styles.title}>
						{hero.title}
						<Box component="span" display="block" sx={styles.highlightText}>
							{hero.subtitle}
						</Box>
					</Typography>

					{hero.description.map((paragraph, index) => (
						<Typography key={index} sx={styles.description}>
							{paragraph}
						</Typography>
					))}



					<Box sx={styles.featuresContainer}>
						{featureItems.map((item, index) => {
							const Icon = item.icon;
							return (
								<Box key={index} sx={styles.featureItem}>
									<Box sx={styles.iconWrapper}>
										<Icon sx={styles.featureIcon} />
									</Box>
									<Box sx={styles.featureTextWrapper}>
										<Typography sx={styles.featureTitle}>{item.title}</Typography>
										<Typography sx={styles.featureSubtitle}>{item.text}</Typography>
									</Box>
								</Box>
							);
						})}
					</Box>
					<Button onClick={handleBookDemo}>{hero.ctaText}</Button>
				</Box>

				<Box sx={styles.rightBox}>
					<Image
						src={evidenceCollectionDashboard}
						alt="HexaFort automated evidence collection dashboard showing compliance status and seamless integration with cloud services"
						fill
						style={styles.heroImage}
						priority
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;
