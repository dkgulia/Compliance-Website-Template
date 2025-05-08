'use client';

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import benefitsSectionStyle from '../styles/benefitsSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const BenefitsSection: React.FC = () => {
	const { benefits } = controlFrameworkData.sections;

	return (
		<Box component="section" sx={benefitsSectionStyle.section}>
			<Container maxWidth="lg" sx={benefitsSectionStyle.container}>
				<Box sx={benefitsSectionStyle.headerBox}>
					<Typography variant="h2" sx={benefitsSectionStyle.title}>
						{benefits.title}
					</Typography>
					{benefits.subtitle && <Typography sx={benefitsSectionStyle.subtitle}>{benefits.subtitle}</Typography>}
				</Box>

				<Box sx={benefitsSectionStyle.benefitsGrid}>
					{benefits.items.map((benefit, index) => {
						const BenefitIcon = benefit.icon;

						return (
							<Box key={index} sx={benefitsSectionStyle.benefitCard}>
								<Box sx={benefitsSectionStyle.contentWrapper}>
									<Box sx={benefitsSectionStyle.iconContainer}>
										<BenefitIcon sx={benefitsSectionStyle.benefitIcon} />
									</Box>

                  <Typography variant="h6" sx={benefitsSectionStyle.benefitTitle}>
                    {benefit.title}
                  </Typography>

									<Typography sx={benefitsSectionStyle.benefitDescription}>
                    {benefit.description}
                  </Typography>
								</Box>
							</Box>
						);
					})}
				</Box>
			</Container>
		</Box>
	);
};

export default BenefitsSection;