'use client';
import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import faqSectionStyle from '../styles/faqSectionStyle';
import { iso42001Data } from '../constants/iso42001Data';

const FAQSection: React.FC = () => {
    const { faq } = iso42001Data.sections;

    return (
        <Box sx={faqSectionStyle.container}>
            <Container maxWidth="lg">
                <Box sx={faqSectionStyle.innerContainer}>
                    <Box sx={faqSectionStyle.titleContainer}>
                        <Typography variant="h2" sx={faqSectionStyle.title}>
                            {faq.title}
                        </Typography>
                        {faq.subtitle && (
                            <Typography variant="h6" sx={faqSectionStyle.subtitle}>
                                {faq.subtitle}
                            </Typography>
                        )}
                    </Box>
                    <Box sx={faqSectionStyle.faqContainer}>
                        {faq.questions.map((item, index) => (
                            <Accordion key={index} sx={faqSectionStyle.accordionRoot}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}
                                    sx={faqSectionStyle.accordionSummary}
                                >
                                    <Typography sx={faqSectionStyle.question}>
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                                    <Typography sx={faqSectionStyle.answer}>
                                        {item.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;