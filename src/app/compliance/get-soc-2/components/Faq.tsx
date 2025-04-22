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
import faqData from '../../get-soc-2/constants/soc2Faq';
import faqSectionStyle from '../styles/FaqStyles';

const FaqSOC2: React.FC = () => {
  return (
    <Box sx={faqSectionStyle.box}>
      <Box sx={faqSectionStyle.section}>
        <Typography component="h2" variant="h4" sx={faqSectionStyle.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={faqSectionStyle.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        <Box sx={faqSectionStyle.accordionContainer}>
          {faqData.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={faqSectionStyle.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={faqSectionStyle.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={faqSectionStyle.accordionSummary}
              >
                <Typography sx={faqSectionStyle.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                <Typography sx={faqSectionStyle.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSOC2;