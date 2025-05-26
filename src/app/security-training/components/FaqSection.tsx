'use client';

import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { securityTrainingData } from '../constants/securityTrainingData';
import faqSectionStyles from '../styles/faqSectionStyles';

interface FaqQuestion {
	question: string;
	answer: string;
}

interface FaqContent {
	title: string;
	subtitle?: string;
	questions: FaqQuestion[];
}

const FaqSection: React.FC = () => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	const faqSection = securityTrainingData.sections.find(
		(section) => section.Sno === '6' && section.blockType === 'FAQ'
	);

	if (!faqSection || !faqSection.content) return null;

	const { title, subtitle, questions } = faqSection.content as FaqContent;

	if (!questions || questions.length === 0) {
		return (
			<Box sx={faqSectionStyles.box}>
				<Container sx={faqSectionStyles.section}>
					<Box sx={faqSectionStyles.header}>
						<Typography component="h2" variant="h4" sx={faqSectionStyles.title}>
							{title || 'Frequently Asked Questions'}
						</Typography>
						<Typography variant="body1" sx={faqSectionStyles.subtitle}>
							No frequently asked questions available at this time.
						</Typography>
					</Box>
				</Container>
			</Box>
		);
	}

	return (
		<Box sx={faqSectionStyles.box}>
			<Container sx={faqSectionStyles.section}>
				<Box sx={faqSectionStyles.header}>
					<Typography component="h2" variant="h4" sx={faqSectionStyles.title}>
						{title}
					</Typography>

					{subtitle && (
						<Typography variant="subtitle1" sx={faqSectionStyles.subtitle}>
							{subtitle}
						</Typography>
					)}
				</Box>

				<Box sx={faqSectionStyles.accordionContainer}>
					{questions.map((faq, index) => (
						<Accordion
							key={index}
							expanded={expanded === `panel${index}`}
							onChange={handleChange(`panel${index}`)}
							disableGutters
							elevation={0}
							sx={faqSectionStyles.accordion}
						>
							<AccordionSummary
								expandIcon={<AddIcon sx={faqSectionStyles.expandIcon} />}
								aria-controls={`panel${index}-content`}
								id={`panel${index}-header`}
								sx={faqSectionStyles.accordionSummary}
							>
								<Typography sx={faqSectionStyles.questionTypography}>{faq.question}</Typography>
							</AccordionSummary>
							<AccordionDetails sx={faqSectionStyles.accordionDetails}>
								<Typography sx={faqSectionStyles.answerTypography}>{faq.answer}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Box>
			</Container>
		</Box>
	);
};

export default FaqSection;
