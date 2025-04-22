'use client';
import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { complianceData } from '../constants/doraData';
import DoraFaqStyle from '../styles/doraFaqStyle';

export default function DoraFaqSection() {
  return (
    <Box sx={DoraFaqStyle.box}>
      <Box sx={DoraFaqStyle.section}>
        <Typography component="h2" variant="h4" sx={DoraFaqStyle.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={DoraFaqStyle.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        <Box sx={DoraFaqStyle.accordionContainer}>
          {complianceData.faq.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={DoraFaqStyle.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={DoraFaqStyle.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={DoraFaqStyle.accordionSummary}
              >
                <Typography sx={DoraFaqStyle.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={DoraFaqStyle.accordionDetails}>
                <Typography sx={DoraFaqStyle.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}