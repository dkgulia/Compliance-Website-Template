'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import pitfallsSectionStyle from '../styles/pitfallsSectionStyle';
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
		<Box sx={pitfallsSectionStyle.container}>
			<Box sx={pitfallsSectionStyle.outerContainer}>
				<Box sx={pitfallsSectionStyle.innerBox}>
					<Box sx={pitfallsSectionStyle.titleSection}>
						<Box sx={pitfallsSectionStyle.chip}>Common Challenges</Box>
						<Typography variant="h2" sx={pitfallsSectionStyle.title}>
							{data.title}
						</Typography>
						<Typography sx={pitfallsSectionStyle.subtitle}>{data.subtitle}</Typography>
					</Box>

					<Box sx={pitfallsSectionStyle.gridContainer}>
						{patchedItems.map((item, index) => (
							<Box key={index} sx={pitfallsSectionStyle.pitfallCard}>
								<Box sx={pitfallsSectionStyle.iconTopSection}>
									<Box sx={pitfallsSectionStyle.iconContainer}>
										<Image
											src={item.icon}
											alt={item.heading}
											width={80}
											height={60}
											style={pitfallsSectionStyle.icon}
										/>
									</Box>
								</Box>
								<Box sx={pitfallsSectionStyle.contentBottomSection}>
									<Typography sx={pitfallsSectionStyle.pitfallTitle}>{item.heading}</Typography>
									<Typography sx={pitfallsSectionStyle.solutionText}>{item.subheading}</Typography>
								</Box>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PitfallsSection;
