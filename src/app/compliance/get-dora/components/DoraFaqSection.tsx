/* <ai_context>
   Renders the FAQ from JSON-based data
</ai_context> */

"use client";
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { complianceData } from '../constants/doraData';
import DoraFaqStyle from '../styles/doraFaqStyle';

export default function DoraFaqSection() {
    return (
        <Box sx={DoraFaqStyle.container}>
            <Box sx={DoraFaqStyle.innerBox}>
                <Typography variant="h4" sx={DoraFaqStyle.title}>
                    Frequently Asked Questions
                </Typography>

                <Box sx={DoraFaqStyle.accordionContainer}>
                    {complianceData.faq.map((item, index) => (
                        <Accordion key={index}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-header-${index}`}
                                sx={DoraFaqStyle.accordionSummary}
                            >
                                <Typography>{item.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={DoraFaqStyle.accordionDetails}>
                                <Typography>{item.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}