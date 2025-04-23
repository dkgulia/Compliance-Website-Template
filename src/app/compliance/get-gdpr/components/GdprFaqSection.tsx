"use client";

import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import gdprData from '../constants/gdprData';
import faqSectionStyle from '../styles/faqSectionStyle';

export default function GdprFaqSection() {
    const section = gdprData.sections.find((sec) => sec.Sno === "12");
    if (!section) return null;
    const questions = section.content?.questions || [];

    return (
        <Box sx={faqSectionStyle.container}>
            <Box sx={faqSectionStyle.innerBox}>
                <Typography variant="h4" sx={faqSectionStyle.title}>
                    {section.title}
                </Typography>

                <Box sx={faqSectionStyle.accordionContainer}>
                    {questions.map((q, idx) => (
                        <Accordion key={idx} disableGutters elevation={0}>
                            <AccordionSummary
                                expandIcon={<AddIcon />}
                                sx={faqSectionStyle.accordionSummary}
                                aria-controls={`panel${idx}-content`}
                                id={`panel${idx}-header`}
                            >
                                <Typography>{q.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                                <Typography>{q.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}