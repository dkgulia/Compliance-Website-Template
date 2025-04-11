'use client';
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import iso27701Data from '../constants/iso27701Data';
import faqSectionStyle from '../styles/faqSectionStyle';

const Iso27701FaqSection: React.FC = () => {
	return (
		<Box sx={faqSectionStyle.box}>
			<Box sx={faqSectionStyle.section}>
				<Typography variant="h3" sx={faqSectionStyle.title}>
					Frequently Asked Questions
				</Typography>
                <Typography variant="h6" sx={faqSectionStyle.subtitle}>
                    Common Questions About ISO 27701
                </Typography>

				<Box sx={faqSectionStyle.accordionContainer}>
					{iso27701Data.faq.map((faqItem, index) => (
						<Accordion key={index} sx={faqSectionStyle.accordion}>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon sx={faqSectionStyle.expandIcon} />}
								aria-controls={`panel${index}-content`}
								id={`panel${index}-header`}
								sx={faqSectionStyle.accordionSummary}
							>
								<Typography sx={faqSectionStyle.questionText}>{faqItem.question}</Typography>
							</AccordionSummary>
							<AccordionDetails sx={faqSectionStyle.accordionDetails}>
								<Typography sx={faqSectionStyle.answerText}>{faqItem.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Iso27701FaqSection;