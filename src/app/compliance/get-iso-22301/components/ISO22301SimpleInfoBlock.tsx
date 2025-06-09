'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { iso22301Data } from '../constants/iso22301Data';
import simpleInfoBlockStyle from '../styles/simpleInfoBlockStyle';
import isoInfoImage from '../images/iso22301-iamge.png';
import theme from '../../../../theme';

interface ISO22301SimpleInfoBlockProps {
	sectionId: string;
}

const ISO22301SimpleInfoBlock: React.FC<ISO22301SimpleInfoBlockProps> = ({ sectionId }) => {
	const sectionData = iso22301Data.sections.find((sec) => sec.Sno === sectionId && sec.blockType === 'Simple Info');

	if (!sectionData) return null;

	return (
		<Box sx={simpleInfoBlockStyle.rootBox}>
			<Container sx={simpleInfoBlockStyle.container}>
				<Typography sx={simpleInfoBlockStyle.mainTitle}>{sectionData.title}</Typography>

				{sectionData.subtitle && <Typography sx={simpleInfoBlockStyle.subTitle}>{sectionData.subtitle}</Typography>}

				<Box sx={simpleInfoBlockStyle.innerBox}>
					<Grid container spacing={4} alignItems="center">
						<Grid size={{ xs: 12, md: 6 }}>
							<Typography sx={simpleInfoBlockStyle.headingText}>{sectionData.content?.heading}</Typography>

							<Typography sx={simpleInfoBlockStyle.bodyText}>{sectionData.content?.subheading}</Typography>
						</Grid>

						<Grid size={{ xs: 12, md: 6 }} sx={simpleInfoBlockStyle.imageGridItem}>
							<Box sx={simpleInfoBlockStyle.imageContainer}>
								<Image
									src={isoInfoImage}
									alt="ISO 22301 Information Illustration"
									placeholder="blur"
									width={300}
									height={240}
									style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301SimpleInfoBlock;
