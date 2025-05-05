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
import { ccpaFaq } from '../constants/ccpaData';
import faqStyle from '../styles/faqStyle';

const CcpaFaqSection: React.FC = () => {
  return (
    <Box sx={faqStyle.box}>
      <Box sx={faqStyle.section}>
        <Typography component="h2" variant="h4" sx={faqStyle.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={faqStyle.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        <Box sx={faqStyle.accordionContainer}>
          {ccpaFaq.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={faqStyle.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={faqStyle.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={faqStyle.accordionSummary}
              >
                <Typography sx={faqStyle.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={faqStyle.accordionDetails}>
                <Typography sx={faqStyle.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CcpaFaqSection;