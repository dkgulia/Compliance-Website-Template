import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import pageStyles from '../styles/pageStyles';
import aboutItemStyles from '../styles/aboutItemStyles';
import { aboutItems, featuredContent } from '../../../constants/aboutData';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface AboutSectionProps {
	onClose?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onClose }) => {
	const router = useRouter();

	const handleNavigate = (href: string) => {
		router.push(href);
		if (onClose) onClose();
	};

	const handleDemoClick = () => {
		router.push('/get-a-product-demo');
		if (onClose) onClose();
	};

	return (
		<>
			<Grid container spacing={3}>
				<Grid size={{ xs: 12, sm: 6, md: 6 }}>
					<Typography sx={pageStyles.title}>About HexaFort</Typography>
					<Typography sx={pageStyles.description}>
						Empowering Your Workflow with High-Performance Computing. At Hexafort, we specialize in building top-tier
						workstations tailored to your needs. Whether you're a business, a creator, or a professional, we ensure you
						get the best computing solution with expert guidance and exceptional support.
					</Typography>
					<Box sx={pageStyles.linksContainer}>
						{aboutItems.map((item, index) => (
							<Box key={`link-${index}`} sx={aboutItemStyles.aboutItem} onClick={() => handleNavigate(item.href)}>
								<Box sx={aboutItemStyles.itemIcon}>{item.icon}</Box>
								<Typography sx={aboutItemStyles.itemText}>{item.title}</Typography>
							</Box>
						))}
					</Box>
				</Grid>

				<Grid size={{ xs: 12, sm: 6, md: 6 }}>
					<Box sx={pageStyles.featuredBox}>
						<Typography sx={pageStyles.featuredTitle}>{featuredContent.title}</Typography>
						<Typography sx={pageStyles.featuredDescription}>{featuredContent.description}</Typography>

						<Button
							endIcon={<ArrowForwardIcon />}
							sx={{
								...aboutItemStyles.knowMoreButton,
								backgroundColor: '#115e59',
								color: '#f9fafb',
								borderRadius: '0.5rem',
								padding: '0.5rem 1rem',
								textTransform: 'none',
								fontSize: '0.875rem',
								fontWeight: 500,
								border: '1px solid #0d9488',
								width: 'fit-content',
								'&:hover': {
									backgroundColor: '#0f766e',
								},
							}}
							onClick={featuredContent.buttonText?.toLowerCase().includes('demo') ? handleDemoClick : () => handleNavigate(featuredContent.href)}
						>
							{featuredContent.buttonText}
						</Button>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default AboutSection;