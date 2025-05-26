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
import faqHipaaStyles from '../styles/hipaafaqStyle';
import {hipaaFaqData} from '../constant/hipaaData';

const FaqHipaa = () => {
  return (
    <Box sx={faqHipaaStyles.box}>
      <Box sx={faqHipaaStyles.section}>
        <Typography component="h2" variant="h4" sx={faqHipaaStyles.title}>
          Frequently Asked Questions
        </Typography>

        <Typography variant="subtitle1" sx={faqHipaaStyles.subtitle}>
          Your Questions, Our Commitment
        </Typography>

        <Box sx={faqHipaaStyles.accordionContainer}>
          {hipaaFaqData.map((item, index) => (
            <Accordion
              key={index}
              disableGutters
              elevation={0}
              sx={faqHipaaStyles.accordion}
            >
              <AccordionSummary
                expandIcon={<AddIcon sx={faqHipaaStyles.expandIcon} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={faqHipaaStyles.accordionSummary}
              >
                <Typography sx={faqHipaaStyles.questionTypography}>{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails sx={faqHipaaStyles.accordionDetails}>
                <Typography sx={faqHipaaStyles.answerTypography}>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FaqHipaa;
