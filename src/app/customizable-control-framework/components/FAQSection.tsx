'use client';

import React from 'react';
import {
    Box,
    Typography,
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import faqSectionStyle from '../styles/faqSectionStyle';
import controlFrameworkData from '../constants/controlFrameworkData';

const FAQSection: React.FC = () => {
    const { faq } = controlFrameworkData.sections;
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box component="section" sx={faqSectionStyle.section}>
            <Container maxWidth="lg" sx={faqSectionStyle.container}>
                <Box sx={faqSectionStyle.header}>
                    <Typography variant="h2" sx={faqSectionStyle.title}>
                        {faq.title}
                    </Typography>

                    {faq.subtitle && (
                        <Typography variant="body1" sx={faqSectionStyle.subtitle}>
                            {faq.subtitle}
                        </Typography>
                    )}
                </Box>

                <Box sx={faqSectionStyle.faqContainer}>
                    {faq.questions.map((item, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === `panel${index}`}
                            onChange={handleChange(`panel${index}`)}
                            sx={faqSectionStyle.accordionRoot}
                            disableGutters
                            elevation={0}
                        >
                            <AccordionSummary
                                expandIcon={<AddIcon sx={faqSectionStyle.expandIcon} />}
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
            </Container>
        </Box>
    );
};

export default FAQSection;