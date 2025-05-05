'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {iso22301Data} from '../constants/iso22301Data';
import caseStudyBlockStyle from '../styles/caseStudyBlockStyle';
import theme from '../../../../theme';

const ISO22301CaseStudyBlock: React.FC = () => {
	const sectionData = iso22301Data.sections.find((sec) => sec.Sno === '8');
	if (!sectionData) return null;

	return (
		<Box sx={caseStudyBlockStyle.rootBox}>
			<Container>
				<Typography variant="h4" sx={caseStudyBlockStyle.mainTitle}>
					{sectionData.title}
				</Typography>
				{sectionData.subtitle && (
					<Typography variant="h6" sx={caseStudyBlockStyle.subTitle}>
						{sectionData.subtitle}
					</Typography>
				)}

				<Box sx={caseStudyBlockStyle.innerBox}>
					<Typography variant="h5" sx={caseStudyBlockStyle.headingText}>
						{sectionData.content?.heading}
					</Typography>
					<Typography variant="body1" sx={caseStudyBlockStyle.bodyText}>
						{sectionData.content?.subheading}
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

export default ISO22301CaseStudyBlock;