'use client';
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import nistFaqStyles from '../styles/nistFaqStyle';
import { nistFaq } from '../constants/nistComplianceData';

export default function NistFaqSection() {
	return (
		<Box sx={nistFaqStyles.box}>
			<Box sx={nistFaqStyles.section}>
				<Typography component="h2" variant="h4" sx={nistFaqStyles.title}>
					Frequently Asked Questions
				</Typography>

				<Typography variant="subtitle1" sx={nistFaqStyles.subtitle}>
					Your Questions, Our Commitment
				</Typography>

				<Box sx={nistFaqStyles.accordionContainer}>
					{nistFaq.map((item, index) => (
						<Accordion key={index} disableGutters elevation={0} sx={nistFaqStyles.accordion}>
							<AccordionSummary
								expandIcon={<AddIcon sx={nistFaqStyles.expandIcon} />}
								aria-controls={`panel${index}-content`}
								id={`panel${index}-header`}
								sx={nistFaqStyles.accordionSummary}
							>
								<Typography sx={nistFaqStyles.questionTypography}>{item.question}</Typography>
							</AccordionSummary>

							<AccordionDetails sx={nistFaqStyles.accordionDetails}>
								<Typography sx={nistFaqStyles.answerTypography}>{item.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Box>
		</Box>
	);
}