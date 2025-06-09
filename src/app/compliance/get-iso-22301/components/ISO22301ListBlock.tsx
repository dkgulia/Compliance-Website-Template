'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import Image from 'next/image';
import { iso22301Data } from '../constants/iso22301Data';
import * as Icons from '@mui/icons-material';
import listBlockStyle from '../styles/listBlockStyle';
import crisisManagementImage from '../images/22301Crisis.png';
import theme from '../../../../theme';

interface Props {
	sectionId: string;
}



const ISO22301ListBlock: React.FC<Props> = ({ sectionId }) => {
	const sectionData = iso22301Data.sections.find(
		(sec) => sec.Sno === sectionId && (sec.blockType === 'List' || sec.blockType === 'List Block')
	);

	if (!sectionData) return null;
	const listItems = sectionData.list || [];

	return (
		<Box sx={listBlockStyle.box}>
			<Container maxWidth="lg">
				<Typography variant="h4" sx={listBlockStyle.heading}>
					{sectionData.title}
				</Typography>

				{sectionData.subtitle && (
					<Typography variant="h6" sx={listBlockStyle.subtitle}>
						{sectionData.subtitle}
					</Typography>
				)}

				<Grid container spacing={3} alignItems="center">
					<Grid size={{ xs: 12, md: 6 }}>
						{listItems.map((item, index) => {
							const IconComp = Icons.CheckCircle;
							return (
								<Box key={index} sx={listBlockStyle.outerItemBox}>
									<Box sx={listBlockStyle.iconContainerForList}>
										<IconComp sx={listBlockStyle.iconForList} />
									</Box>
									<Typography sx={listBlockStyle.textForList}>{item}</Typography>
								</Box>
							);
						})}
					</Grid>
					<Grid size={{ xs: 12, md: 6 }} sx={listBlockStyle.rightGridItem}>
						<Box sx={listBlockStyle.imageContainer}>
							<Image
								src={crisisManagementImage}
								alt="Crisis Management Illustration"
								placeholder="blur"
								width={350}
								height={350}
								style={{ maxWidth: '80%', height: 'auto', objectFit: 'contain' }}
							/>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default ISO22301ListBlock;
