import React from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Image from 'next/image';
import rightSectionStyles from '../styles/rightSectionStyles';
import DemoImage from '../../../Images/-create-a-professional--sleek-image-showing-a-cust.png';
const RightSection: React.FC = () => {
	return (
		<Box sx={rightSectionStyles.sectionContainer}>
			<Box sx={rightSectionStyles.cardContainer}>
				<Box sx={rightSectionStyles.featureCard}>
					<Box sx={rightSectionStyles.imageContainer}>
						<Image
							src={DemoImage}
							alt="Book a Demo"
							style={{
								width: '80%',
								height: '70%',
								borderRadius: '4px',
								objectFit: 'cover',
							}}
						/>
					</Box>

					<Typography sx={rightSectionStyles.cardHeading}>Book a Demo</Typography>

					<Typography sx={rightSectionStyles.cardDescription}>
						Experience igniPC in action with a personalized demo
					</Typography>

					<Link href="/demo" passHref style={{ textDecoration: 'none' }}>
						<Box component="a" sx={rightSectionStyles.actionLink}>
							Schedule Now
							<ArrowForwardIcon sx={rightSectionStyles.linkIcon} />
						</Box>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default RightSection;
