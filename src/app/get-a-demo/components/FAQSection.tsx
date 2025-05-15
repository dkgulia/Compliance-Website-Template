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
import { faqData } from '../constant/faqData';
import faqSectionStyle from '../styles/faqSectionStyle';

const FAQSection: React.FC = () => {
  return (
    <Box sx={faqSectionStyle.box}>
      <Box sx={faqSectionStyle.section}>
        <Typography component="h2" variant="h4" sx={faqSectionStyle.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={faqSectionStyle.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        {faqData.categories.map((category, categoryIndex) => (
          <Box key={`category-${categoryIndex}`} sx={faqSectionStyle.categoryContainer}>
            <Typography variant="h5" sx={faqSectionStyle.categoryTitle}>
              {category.name}
            </Typography>

            <Box sx={faqSectionStyle.accordionContainer}>
              {category.questions.map((item, index) => (
                <Accordion
                  key={`faq-${categoryIndex}-${index}`}
                  disableGutters
                  elevation={0}
                  sx={faqSectionStyle.accordion}
                >
                  <AccordionSummary
                    expandIcon={<AddIcon sx={faqSectionStyle.expandIcon} />}
                    aria-controls={`panel-${categoryIndex}-${index}-content`}
                    id={`panel-${categoryIndex}-${index}-header`}
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
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;