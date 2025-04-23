'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import gdprData from '../constants/gdprData';
import certificationSectionStyle from '../styles/certificationSectionStyle';

export default function GdprCertificationSection() {
	const section = gdprData.sections.find((sec) => sec.Sno === '9');
	if (!section) return null;

	return (
		<Box sx={certificationSectionStyle.container}>
			<Box sx={certificationSectionStyle.innerBox}>
				<Typography variant="h4" sx={certificationSectionStyle.heading}>
					{section.title}
				</Typography>
				<Typography variant="h6" sx={certificationSectionStyle.subHeading}>
					{section.subtitle}
				</Typography>

				<Typography variant="h5" sx={certificationSectionStyle.description}>
					{section && section.content && section.content.heading ? section.content.heading : ''}
				</Typography>

				<Typography variant="body1" sx={certificationSectionStyle.description}>
					{section && section.content && section.content.heading ? section.content.subheading : ''}
				</Typography>
			</Box>
		</Box>
	);
}