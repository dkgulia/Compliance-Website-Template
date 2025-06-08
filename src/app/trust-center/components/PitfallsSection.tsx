'use client';

import React from 'react';
import { Box, Typography,Grid } from '@mui/material';
import styles from '../styles/pitfallsSectionStyle';
import { trustCenterPageData } from '../constants/trustCenterPageData';
import Image from 'next/image';
import icon1 from '../images/pdf.png';
import icon2 from '../images/manual-nda-churn.png';
import icon3 from '../images/securiy.png';
import icon4 from '../images/report.png';

const iconImages = [icon1, icon2, icon3, icon4];
const patchedItems = trustCenterPageData.sections.pitfalls.items.map((item, index) => ({
	...item,
	icon: iconImages[index],
}));

const PitfallsSection: React.FC = () => {
	const data = trustCenterPageData.sections.pitfalls;
	return (
		<Box sx={styles.section}>
		  <Box sx={styles.headerContainer}>
		    <Box sx={styles.chip}>{data.tagline}</Box>
		    <Typography sx={styles.title}>
		      {data.title}
		    </Typography>
		    <Typography sx={styles.subtitle}>
		      {data.subtitle}
		    </Typography>
		  </Box>

		  <Box sx={styles.gridContainer}>
		    <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
		      {patchedItems.map((item, index) => (
			<Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
			  <Box sx={styles.card}>
			    <Box sx={styles.iconTopSection}>
			      <Box sx={styles.iconContainer}>
				<Image
				  src={item.icon}
				  alt={item.heading}
				  width={80}
				  height={60}
				  style={{ color: 'white', maxWidth: '100%', height: 'auto' }}
				/>
			      </Box>
			    </Box>
			    <Box sx={styles.contentBottomSection}>
			      <Typography sx={styles.cardTitle}>{item.heading}</Typography>
			      <Typography sx={styles.cardDescription}>{item.subheading}</Typography>
			    </Box>
			  </Box>
			</Grid>
		      ))}
		    </Grid>
		  </Box>
		</Box>
	      );
	     };

	     export default PitfallsSection;
