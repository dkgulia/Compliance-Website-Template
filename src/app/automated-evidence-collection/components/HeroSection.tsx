'use client';
import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import heroSectionStyle from '../styles/heroSectionStyle';
import { evidenceCollectionData } from '../constants/evidenceCollectionData';

const HeroSection: React.FC = () => {
	const theme = useTheme();
	const styles = heroSectionStyle(theme);
	const { hero } = evidenceCollectionData;
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

	return (
		<Box component="section" sx={styles.container}>
			<Container sx={styles.containerBox}>
				<Box sx={styles.leftContentBox}>
					<Box sx={styles.tag}>
						<Typography variant="body2" sx={styles.tagText}>
							Evidence Collection
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
				</Box>

				<Box sx={styles.rightBox}>
                
                    <Box sx={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(23, 23, 23, 0.5)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '2rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        textAlign: 'center',
                        fontStyle: 'italic',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25)'
                    }}>
                        Hero image: HexaFort automated evidence collection dashboard showing compliance status and seamless integration with cloud services
                    </Box>
				</Box>
			</Container>
		</Box>
	);
};

export default HeroSection;