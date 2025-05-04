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
import { securityTrainingData } from '../constants/securityTrainingData';
import faqSectionStyles from '../styles/faqSectionStyles';

const FaqSection = () => {
  const { title, subtitle, questions } = securityTrainingData.sections[5].content;

  return (
    <Box sx={faqSectionStyles.box}>
      <Box sx={faqSectionStyles.section}>
        <Typography component="h2" variant="h4" sx={faqSectionStyles.title}>
          {title}
        </Typography>
        
        {subtitle && (
          <Typography variant="subtitle1" sx={faqSectionStyles.subtitle}>
            {subtitle}
          </Typography>
        )}

        <Box sx={faqSectionStyles.accordionContainer}>
          {questions.map((faq, index) => (
            <Accordion 
              key={index}
              disableGutters 
              elevation={0} 
              sx={faqSectionStyles.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={faqSectionStyles.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={faqSectionStyles.accordionSummary}
              >
                <Typography sx={faqSectionStyles.questionText}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={faqSectionStyles.accordionDetails}>
                <Typography sx={faqSectionStyles.answerText}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqSection;