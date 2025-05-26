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
import pciDssData from '../constants/pciDssData';
import faqSectionStyle from '../styles/faqSectionStyle';

const PciDssFaqSection: React.FC = () => {
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
          {pciDssData.faq.map((item, index) => (
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

export default PciDssFaqSection;