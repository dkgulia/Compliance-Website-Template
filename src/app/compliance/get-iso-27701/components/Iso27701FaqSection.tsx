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
import faqSectionStyle from '../styles/faqSectionStyle';
import iso27701Data from '../constants/iso27701Data';

const Iso27701FaqSection: React.FC = () => {
  return (
    <Box sx={faqSectionStyle.box}>
      <Box sx={faqSectionStyle.section}>
        <Typography component="h2" variant="h4" sx={faqSectionStyle.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={faqSectionStyle.subtitle}>
          Common Questions About ISO 27701
        </Typography>

        <Box sx={faqSectionStyle.accordionContainer}>
          {iso27701Data.faq.map((faqItem, index) => (
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
                <Typography sx={faqSectionStyle.questionTypography}>{faqItem.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={faqSectionStyle.accordionDetails}>
                <Typography sx={faqSectionStyle.answerTypography}>{faqItem.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Iso27701FaqSection;